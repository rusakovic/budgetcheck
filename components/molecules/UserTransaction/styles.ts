import styled from '@constants/styled';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const UserTransactionStyles = StyleSheet.create({
  mainWrapper: {flex: 1, marginHorizontal: wp(4), marginVertical: hp(1)},
  transactionContainer: {
    height: hp(10),
    width: '100%',

    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 5,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    backgroundColor: styled.colors.white.white,
    shadowRadius: 5,
  },
  innerWrapper: {height: '100%'},
  uuidContainer: {
    borderBottomColor: styled.colors.grey5opacity,
    borderBottomWidth: 1,
    height: '25%',
  },
  allCurrencyContainer: {
    borderBottomColor: styled.colors.grey5opacity,
    borderBottomWidth: 1,
    height: '50%',
    justifyContent: 'space-between',
    width: '100%',
  },
  balanceContainer: {width: '33.3%'},
  lastVisitDataContainer: {
    height: '25%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
