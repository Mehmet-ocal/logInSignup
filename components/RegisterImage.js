import React from 'react';
import { Image } from 'react-native';

const RegisterImage = () => {
  return (
    <Image
      source={require('../images/RegisterImage.png')} 
      style={{ width: '100%', height: 423, flex:1 }} 
      resizeMode="cover" 
    />
  );
};

export default RegisterImage;
