// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  const regex = /^[-+]?\d*\.?\d+$/;
  return regex.test(str);

  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
}

export function findAvgOfNums(arr) {
  const newarray = arr.filter((item) => typeof item === "number");
  if (newarray.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const num of newarray) {
    sum += num;
  }
  return sum / newarray.length;
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
}

export function findAverageAge(people) {
  if (Object.keys(people).length === 0) {
    return 0;
  }
  let sum = 0;
  people.forEach((item) => {
    sum += item.age;
  });
  return sum / Object.keys(people).length;
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
}

export function findAvgAgeByJob(people, job) {
  if (Object.keys(people).length === 0) {
    return 0;
  }

  let arr = people.filter((item) => item.job === job);
  let sum = 0;
  arr.forEach((item) => {
    sum += item.age;
  });
  return sum === 0 ? 0 : sum / Object.keys(arr).length;

  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
}

export function findMaxNum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
}

export function findLongestWord(str) {
  if (str.length === 0) {
    return "";
  }
  const arr = str.split(" ");
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
}

export function findSumOfEvenNums(arr) {
  if (arr.length == 0) {
    return [];
  }
  return arr.filter((item) => item % 2 === 0);
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  if (num.length <= 1) {
    return num;
  }
  const arr = num.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
      }
    }
  }
  return arr;
}

export function bubbleSortArr2(num) {
  if (num.length <= 1) {
    return num;
  }
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        const tem = num[j];
        num[j] = num[j + 1];
        num[j + 1] = tem;
      }
    }
  }
  return num;
  // Same as above but this time returns the original array reference sorted.
}

export function removeTypes(arr, typeToRemove) {
  if (arr.length === 0) {
    return arr;
  }
  const res = arr.filter((item) => typeof item !== typeToRemove);
  return res;
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  if (operator === "+") {
    return nums.map((num) => num + amount);
  } else if (operator === "-") {
    return nums.map((num) => num - amount);
  } else if (operator === "*") {
    return nums.map((num) => num * amount);
  } else if (operator === "/") {
    if (amount !== 0) {
      return nums.map((num) => num / amount);
    }
  }
  return nums;
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
}

export function removeNumFromArr(nums, num) {
  if (nums.length === 0) {
    return nums;
  }
  return nums.filter((item) => item !== num);
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
}
