import { FC } from 'react';
import { SessionUser } from 'next-auth';
import Image from 'next/image';
import { AvatarProps } from '@radix-ui/react-avatar';
import { User2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@mono/ui';
import { nameToSlug } from '../lib/utils';

interface UserAvatarProps extends AvatarProps {
  user: SessionUser;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt={user.username as string}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{nameToSlug(user.username)}</span>
          <User2 />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
