import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import axiosInstance from '../../../../lib/axios';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Type your email address',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Type your password',
        },
      },
      async authorize(credentials, req) {
        const res = await axiosInstance.post('/auth/login', credentials, {
          headers: req.headers,
        });

        // If no error and we have user data, return it
        if (res.status === 200 && res.data) {
          return res.data;
        }
        return null;
      },
    }),
  ],
  // TODO: Add JWT callbacks
  callbacks: {},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
