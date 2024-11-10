import React from 'react';
import { Avatar, AvatarProps } from '@mui/material';
import { stringAvatar, stringToColor } from '@/utils/utils';

interface AvatarNameProps extends AvatarProps {
  name: string;
}

const AvatarName: React.FC<AvatarNameProps> = props => {
  const name = props.name || '';

  return (
    <Avatar
      {...props}
      sx={{
        ...props.sx,
        bgcolor: stringToColor(name as string),
        textTransform: 'uppercase',
        color: '#FFF'
      }}
    >
      {stringAvatar(name as string)}
    </Avatar>
  );
};

export { AvatarName };
