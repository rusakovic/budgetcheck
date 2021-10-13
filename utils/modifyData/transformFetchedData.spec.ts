import {mockData, transformedMockData} from '@mocks/mockDataForTests';
import {transformFetchedData} from './transformFetchedData';

describe('transformFetchedData util', () => {
  describe('if Transaction array is empty', () => {
    it('should return empty array', () => {
      const transformedData = transformFetchedData([]);
      expect(transformedData).toStrictEqual([]);
    });
  });
  describe('if Transaction array is not empty', () => {
    it('should return correctly transformed balance', () => {
      const transformedData = transformFetchedData(mockData);
      expect(transformedData).toEqual(transformedMockData);
    });
  });
});
