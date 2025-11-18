function cartesianProblem(arr1, arr2) {
  let result = [];
  for (let i = 0; i<arr1.length; i++) {
    for (let j = 0; j<arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const a = [1, 2, 3],
  b = [4, 5, 6];
console.log(cartesianProblem(a, b));
