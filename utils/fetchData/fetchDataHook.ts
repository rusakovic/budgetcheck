import {TransactionType} from 'types/generalTypes';
import {useEffect, useState} from 'react';
import {SourceTypes} from 'screens/TransactionList/constants';
import {DataTransactionAPIs} from '@constants/constants';

export const useFetchData = (selectedSource: SourceTypes) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const apiPath = selectedSource
        ? `/api/${DataTransactionAPIs[selectedSource]}`
        : DataTransactionAPIs.small;
      const fetchReq = await fetch(apiPath);
      const fetchRes = await fetchReq.json();

      if (fetchRes.transactions) {
        setTransactions(fetchRes.transactions);
        setIsLoading(false);
      } else {
        setError('Transactions not fetched');
        setIsLoading(false);
        setTransactions([]);
      }
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
      setIsLoading(false);
      setTransactions([]);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [selectedSource]);

  return {transactions, isLoading, error};
};
