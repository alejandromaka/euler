function heapsort(arr) {
  let heap = buildHeap(arr.slice());
  const length = heap.length;
  for (let i=length-1; i>=0; i--) {
    const newHeap = swap(heap, 0, i);
    heap = heapify(newHeap, 0, i-1);
  }
  return heap;
}

function buildHeap(arr) {
  const mid = Math.floor((arr.length-1)/2);
  let heap = arr;
  for (let i=mid; i>=0; i--) {
    heap = heapify(arr, i, arr.length-1);
  }
  return heap;
}

function heapify(arr, index, size) {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  let max = index;

  if (left <= size && arr[left] > arr[index]) {
    max = left;
  }

  if (right <= size && arr[right] > arr[max]) {
    max = right;
  }

  if (index !== max) {
    const newArr = swap(arr, index, max);
    return heapify(newArr, max, size);
  }
  return arr;
}

function swap(arr, i, j) {
  const newArr = arr.slice();
  const temp = newArr[i];
  newArr[i] = newArr[j];
  newArr[j] = temp;
  return newArr;
}
