import { jwtDecode } from 'jwt-decode';
import { Awaitable, NextAuthOptions, User, getServerSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies, headers } from 'next/headers';
import { env } from '../env.mjs';

async function refreshAccessToken(token: JWT) {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_API}/auth/refresh`, {
      method: 'POST',
      headers: headers(),
    });

    const { success, data } = await res.json();

    if (!success) {
      console.log('The token could not be refreshed!');
      throw data;
    }

    console.log('The token has been refreshed successfully.');

    // get some data from the new access token such as exp (expiration time)
    const decodedAccessToken = JSON.parse(
      Buffer.from(data.accessToken.split('.')[1], 'base64').toString(),
    );

    return {
      ...token,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken ?? token.refreshToken,
      expires_at: decodedAccessToken['exp'] * 1000,
      error: '',
    };
  } catch (error) {
    console.log(error);

    // return an error if somethings goes wrong
    return {
      ...token,
      error: 'RefreshAccessTokenError', // attention!
    };
  }
}

export const authOptions = {
  debug: env.NODE_ENV === 'development',

  pages: {
    signIn: '/sign-in',
  },

  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(env.NEXT_PUBLIC_BACKEND_API + 'auth/signin', {
          method: 'POST',
          body: JSON.stringify({
            ...credentials,
            role: 'SUPPLIER',
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        const user = (await res.json()) as User;

        // check if response is ok
        if (!res.ok) {
          //@ts-ignore
          throw new Error(user.message);
        }

        if (res.ok && user) {
          cookies().set({
            name: 'xxx.refresh-token',
            value: user.refreshToken,
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
          } as any);

          return user;
        }

        return null;
      },
    }),
  ],

  secret: env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        // If login with Credentials
        // - user object is what the credential provider returns (from the authorize function)
        // - for instance, you return `accessToken` in the authorize function => bind accessToken to the data
        // and make it available to the client.
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.image = user.image;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;

        // exp date
        token.expires_at =
          Date.now() + (jwtDecode(user.accessToken as string).exp as number);

        return token;
      }

      if (Date.now() < token.expires_at) {
        // if our access token has not expired yet, return all information except the refresh token
        const { refreshToken, ...rest } = token;
        return rest;
      }

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      return {
        user: {
          id: token.id,
          username: token.username,
          email: token.email,
          image: token.image,
          accessToken: token.accessToken,
        },
        expires: session.expires,
      } as const;
    },

    redirect() {
      return '/';
    },
  },
} satisfies NextAuthOptions;

export const getAuthSession = () => getServerSession(authOptions);
