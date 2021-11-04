import {selectionSort} from './selection-sort';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Returns an array, add comma in between \n`,
  (name: string) => {
    const arr = name.split(',').map(ele => +ele);
    console.log(arr);
    selectionSort(arr);
    console.log(`Sorted array \n [${arr}]`);
    readline.close();
  }
);
