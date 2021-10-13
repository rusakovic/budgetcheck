import styled from '@constants/styled';
import {Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SourceSelectorStyle = StyleSheet.create({
  sourceText: {width: '50%'},
  pickerWrapper: {
    width: '50%',
    marginVertical: Platform.OS === 'ios' ? hp(-2) : 0,
  },
  pickerItem: {
    height: hp(15),
    fontSize: styled.font.size.xs,
  },
});
