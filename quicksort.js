function quicksort(arr) {
  const sorted = arr.slice();
  return organize(sorted, 0, arr.length-1);
}

function organize(arr, low, high) {
  if (low < high) {
    const p = sort(arr, low, high);
    organize(arr, low, p-1);
    organize(arr, p+1, high);
  }
  return arr;
}

function sort(arr, low, high) {
  let j = low;
  const p = arr[high];
  for (let i=low; i<high; i++) {
    if (arr[i] < p) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
  arr[high] = arr[j];
  arr[j] = p;
  return j;
}
