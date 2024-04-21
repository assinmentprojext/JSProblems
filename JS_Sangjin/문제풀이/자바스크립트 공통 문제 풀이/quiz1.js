let a = [1, 2, 3, 4, 5];
maxValue = Math.max(...a);
sortArr = a.sort((a, b) => a - b).reverse();
console.log(maxValue, sortArr);
