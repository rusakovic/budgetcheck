import {TransactionType} from '@types/generalTypes';
import dayjs from 'dayjs';
import {groupBy, map, orderBy, sumBy, keyBy} from 'lodash';

export const transformFetchedData = (transactions: TransactionType[]) => {
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

  return balancedUserTransactions;
};
