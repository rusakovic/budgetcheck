import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {TransactionList} from 'screens';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Navigator = () => {
  return <TransactionList />;
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Navigator />
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create();

export default App;
