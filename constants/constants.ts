import {SourceTypes} from 'screens/TransactionList/constants';

export const DataTransactionAPIs = {
  [SourceTypes.small]: 'transactionsSmall',
  [SourceTypes.medium]: 'transactionsMedium',
  [SourceTypes.large]: 'transactionsLarge',
};
