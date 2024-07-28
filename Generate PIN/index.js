const generatePin = () => {
  let min = 0,
    max = 9999;
  return ('0' + (Math.floor(Math.random() * (max - min + 1)) + min)).substr(-4);
};

const get6DigitCode = () => Math.floor(100000 + Math.random() * 900000);
