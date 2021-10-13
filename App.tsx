import styled from 'constants/styled';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {TransactionList} from 'screens';

const Navigator = () => {
  return <TransactionList />;
};

const App = () => {
  return (
    <SafeAreaView style={appStyles.safeAreaWrapper}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styled.colors.white.white}
      />
      <Navigator />
    </SafeAreaView>
  );
};

const appStyles = StyleSheet.create({
  safeAreaWrapper: {flex: 1, backgroundColor: styled.colors.white.white},
});

export default App;
