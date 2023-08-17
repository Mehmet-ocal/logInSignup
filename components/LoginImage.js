import React from 'react';
import { Image } from 'react-native';

const LoginImage = () => {
  return (
    <Image
      source={require('../images/sally.png')} 
      style={{ width: '100%', height: 423, flex:1 }} 
      resizeMode="cover" 
    />
  );
};

export default LoginImage;
