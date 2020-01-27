function insertionsort(arr) {
  let result = arr.slice();
  for (let i=0; i<result.length; i++) {
    let j=i-1;
    let pointer=i;
    while (result[j] > result[pointer]) {
      result = swap(result, pointer, j);
      j--;
      pointer--;
    }
  }
  return result;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
