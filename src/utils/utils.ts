export const generateGUID = () => {
  const S4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return S4() + S4();
};

export const stringAvatar = (name: string): string => {
  const nameTmp = name.split(' ');
  return nameTmp.length === 1 ? nameTmp[0][0] : `${nameTmp[0][0]}${nameTmp[1][0]}`;
};

export const stringToColor = (string: string): string => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
};
