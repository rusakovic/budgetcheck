import React, {FC} from 'react';
import ContainerCenter from '../Containers/ContainerCenter';
import DefaultText from '../Text/DefaultText/DefaultText';
import {CurrencyFlagBalanceStyles} from './styles';
import styled from '@constants/styled';

interface CurrencyFlagBalanceProps {
  flagEmoji: string;
  balance: number | string;
}

const CurrencyFlagBalance: FC<CurrencyFlagBalanceProps> = ({
  flagEmoji,
  balance,
}) => {
  return (
    <ContainerCenter flexDirectionRow alignItemsCenter>
      <DefaultText xs style={CurrencyFlagBalanceStyles.flag}>
        {flagEmoji}
      </DefaultText>

      <DefaultText
        xs
        fontFamilyMedium
        fontColor={
          balance > 0
            ? styled.colors.green.positiveBalance
            : styled.colors.red.redButton
        }
        style={CurrencyFlagBalanceStyles.balance}>
        {balance}
      </DefaultText>
    </ContainerCenter>
  );
};

export default CurrencyFlagBalance;
