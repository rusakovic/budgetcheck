import React, {FC, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import {SourceSelector, UserTransaction} from '@components/molecules';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import {useFetchData} from 'utils/fetchData/fetchDataHook';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {SourceTypes} from './constants';
import {transformFetchedData} from '@utils/modifyData/transformFetchedData';

const TransactionList: FC = () => {
  const [selectedSource, setSelectedSource] = useState(SourceTypes.small);

  // Hook for fetching data
  const {transactions, isLoading, error} = useFetchData(selectedSource);

  // Transformed data
  const balancedUserTransactions = useMemo(
    () => transformFetchedData(transactions),
    [transactions],
  );

  return (
    <>
      <ContainerCenter isMarginVertical1 isFullWidth>
        <SourceSelector
          setSelectedSource={setSelectedSource}
          selectedSource={selectedSource}
        />

        {/* LOADING INDICATOR */}
        {isLoading ? (
          <ContainerCenter isMarginTop>
            <ContainerSpace mtXL />
            <ActivityIndicator size="large" />
          </ContainerCenter>
        ) : error ? (
          <ContainerCenter isContainer isVerticalCenter>
            <DefaultText numberOfLines={4}>Error occurs: {error}</DefaultText>
          </ContainerCenter>
        ) : (
          <FlatList
            data={balancedUserTransactions}
            renderItem={({
              item: {uuid, latestTransactionDate, transactions},
            }) => {
              return (
                <UserTransaction
                  userId={uuid}
                  date={latestTransactionDate}
                  balanceEUR={transactions?.EUR?.totalBalance ?? ''}
                  balanceGBP={transactions?.GBP?.totalBalance ?? ''}
                  balanceUSD={transactions?.USD?.totalBalance ?? ''}
                />
              );
            }}
            ListFooterComponent={<ContainerSpace mtXL />}
            keyExtractor={item => item.uuid}
          />
        )}
      </ContainerCenter>
    </>
  );
};

export default TransactionList;
