function insertionsort(arr) {
  const result = arr.slice();
  for (let i=0; i<result.length;i++) {
    let j=i-1;
    let pointer=i;
    while (result[j] > result[pointer]) {
      const temp = result[j];
      result[j] = result[pointer];
      result[pointer] = temp;
      j--;
      pointer--;
    }
  }
  return result;
}
