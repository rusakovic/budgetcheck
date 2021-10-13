import React, {FC, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import {UserTransaction} from '@components/molecules';
import {TransactionType} from 'types/generalTypes';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';

const TransactionList: FC = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  console.log(
    '🚀 ~ file: TransactionList.tsx ~ line 9 ~ transactions',
    transactions,
  );
  const [error, setError] = useState<null | string>(null);

  const fetchTransactions = async () => {
    try {
      setError(null);
      const fetchReq = await fetch('/api/transactions');
      const fetchRes = await fetchReq.json();

      if (fetchRes.transactions) {
        setTransactions(fetchRes.transactions);
      } else {
        setError('Transactions not fetched');
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <ContainerCenter isMarginVertical1 isFullWidth>
      <FlatList
        data={transactions}
        renderItem={({item, index}) => {
          console.log(
            '🚀 ~ file: TransactionList.tsx ~ line 57 ~ index',
            index,
          );
          console.log(
            '🚀 ~ file: TransactionList.tsx ~ line 44 ~ transaction',
            item,
          );
          return <UserTransaction />;
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ContainerSpace mtXS />}
      />
    </ContainerCenter>
  );
};

export default TransactionList;
