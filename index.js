import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {server, createServer} from 'miragejs';
import cloneDeep from 'lodash/cloneDeep';

import smallTransactions from 'mocks/transactions-small.json';

// Make object mutable
const clonedTransactions = cloneDeep(smallTransactions);

// Initialized mock server
if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/transactions', () => {
      return {
        transactions: clonedTransactions,
      };
    });
  },
});

AppRegistry.registerComponent(appName, () => App);
