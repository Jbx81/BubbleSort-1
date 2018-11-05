describe('Split Array function', function() {
  it('is able to split an array into two halves', function () {
    // your code here
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3],[4, 5, 6]]);
  });
});


describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1], [2]).toEqual([1,2]));
    expect(merge([3, 4, 5], [6, 7, 8]).toEqual([3,4,5,6,7,8]));
  });
});


describe('mergeSort function', function() {
  it('is able to split remaining arrays into `n` number of arrays with length of 1', function() {
    expect(split([[1, 2, 3],[4, 5, 6]])).toEqual([[1],[2], [3],[4], [5], [6]]);
  });
});
