import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {server, createServer} from 'miragejs';
import cloneDeep from 'lodash/cloneDeep';

import smallTransactions from 'mocks/transactions-small.json';
import mediumTransactions from 'mocks/transactions-medium.json';
import largeTransactions from 'mocks/transactions-large.json';
import {DataTransactionAPIs} from 'constants/constants';
// Make object mutable
const clonedTransactions = transactions => cloneDeep(transactions);

// Initialized mock server
if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get(`/api/${DataTransactionAPIs.small}`, () => {
      return {
        transactions: clonedTransactions(smallTransactions),
      };
    });
    this.get(`/api/${DataTransactionAPIs.medium}`, () => {
      return {
        transactions: clonedTransactions(mediumTransactions),
      };
    });
    this.get(`/api/${DataTransactionAPIs.large}`, () => {
      return {
        transactions: clonedTransactions(largeTransactions),
      };
    });
  },
});

AppRegistry.registerComponent(appName, () => App);
