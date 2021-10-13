import React, {FC} from 'react';
import {View} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';

import CurrencyFlagBalance from '@components/atoms/CurrencyFlagBalance/CurrencyFlagBalance';
import {UserTransactionStyles} from './styles';
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
    <View style={UserTransactionStyles.mainWrapper}>
      <View style={UserTransactionStyles.transactionContainer}>
        <View style={UserTransactionStyles.innerWrapper}>
          {/* UUID  */}
          <ContainerCenter
            alignItemsCenter
            style={UserTransactionStyles.uuidContainer}>
            <DefaultText xs>{userId}</DefaultText>
          </ContainerCenter>

          {/* BALANCE  */}
          <ContainerCenter
            alignItemsCenter
            isVerticalCenter
            flexDirectionRow
            isContainer
            style={UserTransactionStyles.allCurrencyContainer}>
            {/* EUR */}
            <View style={UserTransactionStyles.balanceContainer}>
              <CurrencyFlagBalance flagEmoji="🇪🇺" balance={balanceEUR} />
            </View>
            {/* GBP */}
            <View style={UserTransactionStyles.balanceContainer}>
              <CurrencyFlagBalance flagEmoji="🇬🇧" balance={balanceGBP} />
            </View>
            {/* USD */}
            <View style={UserTransactionStyles.balanceContainer}>
              <CurrencyFlagBalance flagEmoji="🇺🇸" balance={balanceUSD} />
            </View>
          </ContainerCenter>

          {/* LAST VISIT DATE  */}
          <ContainerCenter
            isContainer
            flexDirectionRow
            style={UserTransactionStyles.lastVisitDataContainer}>
            <DefaultText xxs2>{date}</DefaultText>
          </ContainerCenter>
        </View>
      </View>
    </View>
  );
};

export default UserTransaction;
