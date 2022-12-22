import revers from '../src/index.js';

test('revers', () => {
  expect(revers('hello')).toEqual('olleh');
  expect(revers('')).toEqual('');
});