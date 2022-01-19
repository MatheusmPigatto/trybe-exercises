/* const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return console.log(value1 + value2);
    } catch (error) {
      throw error.message;
    }
  };
  
sum(2,'2') */

function verifyResult(result) {
    if (typeof result == NaN) {
        console.log('nada');
}
}
verifyResult();
