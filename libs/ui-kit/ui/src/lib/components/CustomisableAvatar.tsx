import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarImageProps,
} from '../ui/avatar';

interface CustomisableAvatarProps extends AvatarImageProps {
  size?: number;
  fallback?: React.ReactNode;
}

export const CustomisableAvatar = ({
  size = 38,
  fallback,
  ...imageProps
}: CustomisableAvatarProps) => {
  return (
    <Avatar
      className="h-auto w-auto"
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        maxWidth: size,
        maxHeight: size,
      }}
    >
      <AvatarImage {...imageProps} />
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
    </Avatar>
  );
};
