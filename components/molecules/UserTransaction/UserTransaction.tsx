import React, {FC} from 'react';
import {Text, View} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from '@constants/styled';
import CurrencyFlagBalance from '@components/atoms/CurrencyFlagBalance/CurrencyFlagBalance';

interface UserTransactionProps {
  userId: string;
  date: string;
  balanceUSD: number | string;
  balanceGBP: number | string;
  balanceEUR: number | string;
}

const UserTransaction: FC<UserTransactionProps> = ({
  userId,
  date,
  balanceUSD,
  balanceEUR,
  balanceGBP,
}) => {
  return (
    <View style={{flex: 1, marginHorizontal: wp(4), marginVertical: hp(1)}}>
      <View
        style={{
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
        }}>
        <View style={{height: '100%'}}>
          {/* UUID  */}
          <ContainerCenter
            alignItemsCenter
            style={{
              borderBottomColor: styled.colors.grey5opacity,
              borderBottomWidth: 1,
              height: '25%',
            }}>
            <DefaultText xs>{userId}</DefaultText>
          </ContainerCenter>

          {/* BALANCE  */}
          <ContainerCenter
            alignItemsCenter
            isVerticalCenter
            flexDirectionRow
            isContainer
            style={{
              borderBottomColor: styled.colors.grey5opacity,
              borderBottomWidth: 1,
              height: '50%',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{width: '33.3%'}}>
              {/* EUR */}
              <CurrencyFlagBalance flagEmoji="🇪🇺" balance={balanceEUR} />
            </View>

            <View style={{width: '33.3%'}}>
              {/* GBP */}
              <CurrencyFlagBalance flagEmoji="🇬🇧" balance={balanceGBP} />
            </View>
            <View style={{width: '33.3%'}}>
              {/* USD */}
              <CurrencyFlagBalance flagEmoji="🇺🇸" balance={balanceUSD} />
            </View>
          </ContainerCenter>

          {/* LAST VISIT DATE  */}
          <ContainerCenter
            isContainer
            flexDirectionRow
            style={{
              height: '25%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <DefaultText xxs2>{date}</DefaultText>
          </ContainerCenter>
        </View>
      </View>
    </View>
  );
};

export default UserTransaction;
