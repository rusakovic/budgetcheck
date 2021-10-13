import React, {FC, useState} from 'react';
import {ActivityIndicator, FlatList, Platform, View} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import {SourceSelector, UserTransaction} from '@components/molecules';
import ContainerSpace from '@components/atoms/Containers/ContainerSpace';
import {useFetchData} from 'utils/fetchData/fetchDataHook';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {groupBy, map, sumBy, keyBy, orderBy} from 'lodash';
import dayjs from 'dayjs';
import {Picker} from '@react-native-picker/picker';
import {SourceTypes} from './constants';
import styled from '@constants/styled';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TransactionList: FC = () => {
  const [selectedSource, setSelectedSource] = useState(SourceTypes.small);

  // Hook for fetching data
  const {transactions, isLoading, error} = useFetchData(selectedSource);

  // 1. Group all users by 'user_id'
  const groupedBy = groupBy(transactions, 'user_id');

  const balancedUserTransactions = map(groupedBy, transaction => {
    const userUUID = transaction[0].user_id;

    // 2. Find the latest transaction for a specific user
    const latestTransactionSort = orderBy(transaction, ['timestamp'], ['desc']);
    const latestTransaction = latestTransactionSort[0].timestamp;
    const convertIsoToHumanDate = dayjs(latestTransaction).format('DD-MM-YYYY');

    // 3. Group all user transactions by 'currency'
    const groupByCurrency = groupBy(transaction, 'currency');

    // 4. Summarize all 'amount' of a specific 'currency'
    const sumByCurrency = map(groupByCurrency, currencyGroup => {
      const currencyBalance = sumBy(currencyGroup, currencyGroupTransaction => {
        return Number(currencyGroupTransaction.amount);
      });

      return {
        totalBalance: currencyBalance.toFixed(2),
        currency: currencyGroup[0].currency,
      };
    });

    // 5. Add keys for currencies for easier mapping in Flatlist
    const addCurrencyKeys = keyBy(sumByCurrency, 'currency');
    return {
      uuid: userUUID,
      latestTransactionDate: convertIsoToHumanDate,
      transactions: addCurrencyKeys,
    };
  });

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
