export default function getEl(k, v) {
  const array = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];


  function findBy(p1, p2) {
    const key = p1;
    const value = p2;
    return function (item) {
      if (item[key] === value) {
        return true;
      }
      return false;
    };
  }

  const finder = findBy(k, v);
  const p = array.filter(finder);

  if (p.length > 0) {
    return p;
  }
  return 'элемент не найден';
}
