function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let sum = 0;
  let avg = 0;

  if (arr.length > 0) {
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    avg = Number((sum / arr.length).toFixed(2));
  }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let differenceMaxMin = 0;
  if (arr.length > 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    differenceMaxMin = max - min;
  }

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      (arr[i] % 2 === 0) ? sumEvenElement += arr[i] : sumOddElement += arr[i];
    }
    differenceEvenOdd = sumEvenElement - sumOddElement;
  }
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements = 0;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    averageEvenElements = sumEvenElement / countEvenElement;
  }
  return averageEvenElements;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  if (arrOfArr.length > 0) {
    for (let i = 0; i < arrOfArr.length; i++) {
      const res = func(...arrOfArr[i]);
      if (res > maxWorkerResult) {
        maxWorkerResult = res;
      }
    }
  }
  return maxWorkerResult;
}
