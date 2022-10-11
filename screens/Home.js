import { useState } from 'react';
import { View, Text, SafeArea, FlatList } from 'react-native';

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar  backgroundColor={COLORS.black} />
      </SafeAreaView>
      
  )
}

export default Home