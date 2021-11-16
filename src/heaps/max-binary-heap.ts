class MaxBinaryHeap {
  values: number[] = [];

  insert(val: number) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  private bubbleUp(index: number) {
    if (index > 0) {
      const parentIndex = Math.floor(index - 1 / 2);
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex);
        this.bubbleUp(parentIndex);
      } else {
        return;
      }
    }
  }

  private swap(index: number, parentIndex: number) {
    [this.values[index], this.values[parentIndex]] = [
      this.values[parentIndex],
      this.values[index],
    ];
  }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

console.log(maxHeap.values);
