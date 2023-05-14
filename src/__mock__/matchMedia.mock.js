import MatchMediaMock from 'jest-matchmedia-mock';

export default global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};