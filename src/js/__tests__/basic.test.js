import ErrorRepository from '../basic';

test('should errorcode', () => {
  const errors = new ErrorRepository();
  const errorCode = {
    code: 404
  }
  errors.set(errorCode, 'Ошибка сети')
  const result = errors.get(errorCode);
  let expected = 'Ошибка сети'
  expect(result).toBe(expected);
});
