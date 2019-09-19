function countSwaps(a) {
    let numSwaps = 0;
    let firstElement;
    let lastElement; 
  
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length-1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
            numSwaps++;
        }
      }
    }
      firstElement = a[0];
      lastElement = a[a.length-1];
  
      console.log("Array is sorted in "+numSwaps+" swaps.\n"+"First Element: "+firstElement+"\n"+"Last Element: "+lastElement)
  }