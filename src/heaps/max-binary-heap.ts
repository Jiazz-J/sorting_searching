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

  //extract max
  /// children of a node - 2n+1, 2n+2
  extractMax() {
    if (this.values.length > 0) {
      this.swap(0, this.values.length - 1);
      const maxValue = this.values.pop();
      this.bubbleDown(0);
      return maxValue;
    }
    return null;
  }

  private bubbleDown(index: number) {
    if (index < this.values.length) {
      const childIndex = 2 * index; // Out of bound check should be performed
      const child_1 = this.values[childIndex + 1];
      const child_2 = this.values[childIndex + 2];
      const maxElement = Math.max(child_1, child_2);
      if (maxElement > this.values[index]) {
        const indexToBeMoved =
          maxElement === child_1 ? childIndex + 1 : childIndex + 2;
        this.swap(index, indexToBeMoved);
        this.bubbleDown(indexToBeMoved);
      } else {
        return;
      }
    }
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

maxHeap.extractMax();

console.log(maxHeap.values);
