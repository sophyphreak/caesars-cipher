const rot13 = str => {
  const cipherKey = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M'
  };

  let result = '';

  for (let i = 0; i < str.length; i++) {
    var alphabet = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    if (alphabet.indexOf(str[i]) === -1) {
      result += str[i];
    } else {
      result += cipherKey[str[i]];
    }
  }

  return result;
};

export default rot13;
