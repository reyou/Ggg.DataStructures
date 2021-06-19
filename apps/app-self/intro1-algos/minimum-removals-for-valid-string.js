/**
 * @param {string} s
 * @return {string}
 */
const makeStringValid = (s) => {
  let chars = s.split('');
  let openStack = [];
  let deleteIndexes = [];
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (char === ')') {
      if (openStack.length === 0) {
        deleteIndexes.push(i);
      } else {
        openStack.pop();
      }
    } else if (char === '(') {
      openStack.push(i);
    }
  }
  while (openStack.length > 0) {
    deleteIndexes.push(openStack.pop());
  }
  while (deleteIndexes.length > 0) {
    let deleteIndex = deleteIndexes.pop();
    delete chars[deleteIndex];
  }
  return chars.join('');
};

console.log(makeStringValid('((()'));

console.log(
  makeStringValid(
    '(abcd(ad(adfdf(d)fd)fdfdf)f)g)gg)g)tg)tg)g)g(tgs(ty)t(ty)t(y)ty(tyt)))((bgghgf))gfgf)fgfgg'
  )
);

console.log(makeStringValid('a)b(c)d'));
