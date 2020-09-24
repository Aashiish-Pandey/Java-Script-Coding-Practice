//sum of All prime numbers in a given range

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
};

const sumPrime = (inNum) => {
  let sum = 0;

  for (let num = 2; num<=inNum;num++) {
    if (isPrime(num)) {
      sum += num;
    }
  }

  return sum;
};

console.log(sumPrime(10))
