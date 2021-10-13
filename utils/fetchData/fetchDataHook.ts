import {TransactionType} from 'types/generalTypes';
import {useEffect, useState} from 'react';

export const useFetchData = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  console.log(
    '🚀 ~ file: TransactionList.tsx ~ line 9 ~ transactions',
    transactions,
  );
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const fetchReq = await fetch('/api/transactions');
      const fetchRes = await fetchReq.json();

      if (fetchRes.transactions) {
        setTransactions(fetchRes.transactions);
        setIsLoading(false);
      } else {
        setError('Transactions not fetched');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.message;
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {transactions, isLoading, error};
};
