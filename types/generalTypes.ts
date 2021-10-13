import {SourceTypes} from 'screens/TransactionList/constants';

export interface TransactionType {
  user_id: string;
  timestamp: string;
  currency: string;
  amount: string;
}

export interface DataTransactionType {
  [key: string]: TransactionType;
}
