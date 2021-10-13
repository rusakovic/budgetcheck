export const mockData = [
  {
    user_id: 'ec28d8b8-1320-4e35-88ef-700c3eec750a',
    timestamp: '2019-10-03T03:42:25Z',
    currency: 'GBP',
    amount: '+690.67',
  },
  {
    user_id: '32138630-53c5-40df-973d-497b306f0576',
    timestamp: '2020-06-28T19:01:45Z',
    currency: 'USD',
    amount: '-618.50',
  },
  {
    user_id: '6f6c005c-bb46-47d3-b560-800a67798e70',
    timestamp: '2020-06-21T16:37:05Z',
    currency: 'EUR',
    amount: '+380.19',
  },
  {
    user_id: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    timestamp: '2019-11-19T16:49:22Z',
    currency: 'EUR',
    amount: '-604.56',
  },
  {
    user_id: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    timestamp: '2019-09-14T23:13:41Z',
    currency: 'EUR',
    amount: '-767.01',
  },
  {
    user_id: '308020fa-2074-4ac5-afa6-d514b35c5962',
    timestamp: '2019-11-19T08:42:09Z',
    currency: 'GBP',
    amount: '-538.02',
  },
  {
    user_id: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    timestamp: '2020-03-14T18:40:29Z',
    currency: 'GBP',
    amount: '-751.10',
  },
];

export const transformedMockData = [
  {
    uuid: 'ec28d8b8-1320-4e35-88ef-700c3eec750a',
    latestTransactionDate: '03-10-2019',
    transactions: {
      GBP: {
        totalBalance: '690.67',
        currency: 'GBP',
      },
    },
  },
  {
    uuid: '32138630-53c5-40df-973d-497b306f0576',
    latestTransactionDate: '28-06-2020',
    transactions: {
      USD: {
        totalBalance: '-618.50',
        currency: 'USD',
      },
    },
  },
  {
    uuid: '6f6c005c-bb46-47d3-b560-800a67798e70',
    latestTransactionDate: '21-06-2020',
    transactions: {
      EUR: {
        totalBalance: '380.19',
        currency: 'EUR',
      },
    },
  },
  {
    uuid: '58b906e2-df1e-4b1c-a9c5-eced03801299',
    latestTransactionDate: '14-03-2020',
    transactions: {
      EUR: {
        totalBalance: '-1371.57',
        currency: 'EUR',
      },
      GBP: {
        totalBalance: '-751.10',
        currency: 'GBP',
      },
    },
  },
  {
    uuid: '308020fa-2074-4ac5-afa6-d514b35c5962',
    latestTransactionDate: '19-11-2019',
    transactions: {
      GBP: {
        totalBalance: '-538.02',
        currency: 'GBP',
      },
    },
  },
];
