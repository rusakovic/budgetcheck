import {TransactionType} from 'types/generalTypes';
import React, {FC} from 'react';
import ContainerCenter from '../Containers/ContainerCenter';
import DefaultText from '../Text/DefaultText/DefaultText';
import {CurrencyFlagBalanceStyles} from './styles';

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

      <DefaultText s style={CurrencyFlagBalanceStyles.balance}>
        {balance}
      </DefaultText>
    </ContainerCenter>
  );
};

export default CurrencyFlagBalance;
