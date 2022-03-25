import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import tw from 'twrnc';

// components
import Title from '../../components/Typography/Title';

// contexts
import { TWContext } from '../../providers/contexts/TWProvider';

const Home = ({
  navigation
}) => {

  const {toggleColorScheme} = useContext(TWContext);

  return (

    <View style={tw`bg-white dark:bg-black p-20`}>
      <TouchableOpacity onPress={toggleColorScheme} style={tw`p-3 bg-slate-300`}>
        <Text style={tw`text-black dark:text-white`}> Hello </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={tw`p-3 bg-slate-300`}>
        <Text style={tw`text-black dark:text-white`}> Navigate </Text>
      </TouchableOpacity>
      <Title />
    </View>
  );
}
export default Home;
