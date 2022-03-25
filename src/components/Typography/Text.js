import React from 'react';
import { Text } from 'react-native'; 
import tw from 'twrnc';

const NewText = ({children}) => {
  return (
    <Text style={tw`text-white dark:text-black`}> {children} </Text>
  );
}
export default NewText;
