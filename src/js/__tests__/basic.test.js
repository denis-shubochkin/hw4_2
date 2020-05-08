import getEl from '../basic';

test('Элемент найден', () => {
  const result = getEl('name', 'маг');
  const exp = [
    {
      name: 'маг',
      type: 'character',
      description: 'Персонаж, обладающий магическими способностями',
    },
  ];
  expect(result).toEqual(exp);
});

test('Элемент не найден', () => {
  const result = getEl('name', '1');
  const exp = 'элемент не найден';
  expect(result).toEqual(exp);
});

test('Без фильтра', () => {
  const result = getEl();
  const exp = [
    {
      name: 'маг',
      type: 'character',
      description: 'Персонаж, обладающий магическими способностями',
    },
    {
      name: 'заклинание',
      type: 'attack',
      description: 'Атака магическим заклинанием',
    },
    {
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса',
    },
  ];
  expect(result).toEqual(exp);
});
