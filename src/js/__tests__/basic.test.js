import ErrorRepository from '../basic';

const errors = new ErrorRepository();
const error404 = {code: 404}
const error400 = {code: 400}
errors.map.set(error404, 'Ошибка сети');

test('valid errorcode', () => {  
  let result = errors.translate(error404);
  let expected = 'Ошибка сети'
  expect(result).toBe(expected);
});

test('invalid errorcode', () => {  
  let result = errors.translate(error400);
  let expected = 'Unknown error'
  expect(result).toBe(expected);
});