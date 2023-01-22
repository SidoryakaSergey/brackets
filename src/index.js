module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) {
    return false;
  }
  const openBrackets = [];
  const closeBrackets = [];
  const otherBrackets = [];
  const stake = [];
  for (let el of bracketsConfig) {
    if (el[0] === el[1]) {
      otherBrackets.push(el[0]);
    } else {
      openBrackets.push(el[0]);
      closeBrackets.push(el[1]);
    }
  }

  function getBracket(bracket) {
    return closeBrackets[openBrackets.indexOf(bracket)];
  }

  for (let i = 0; i < str.length; i++) {
    if (otherBrackets.includes(str[i])) {
      if (stake.includes(str[i])) {
        if (stake.pop() !== str[i]) {
          return false;
        } else {
          continue;
        }
      } else {
        stake.push(str[i]);
        continue;
      }
    }
    if (openBrackets.includes(str[i])) {
      stake.push(str[i]);
    } else {
      if (getBracket(stake.pop()) === str[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};
