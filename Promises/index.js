const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('1st Promise');
    resolve();
  }, 1000);
});

firstPromise
  .then(() => {
    console.log('1st Promise resolved');
  })
  .catch((err) => {
    console.log(err);
  });

////////////////////////////////////////////////////////
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2nd Promise');
    resolve({ userName: 'John', password: '123qwe' });
  }, 1000);
});

secondPromise
  .then((data) => {
    console.log('2nd promise resolved');
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

////////////////////////////////////////////////////////
const thirdPromise = new Promise((resolve, reject) => {
  const isError = false;
  setTimeout(() => {
    console.log('3rd Promise');
    resolve({ userName: 'John', password: '123qwe' });
  }, 1000);

  if (isError) reject('Custom Error:');
});

(async () => {
  try {
    const res = await thirdPromise;
    console.log('3rd promise resolved');
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})();
