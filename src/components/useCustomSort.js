import React, { useState, useEffect } from 'react';


export const useCustomSort = (initialArray) => {
  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    // Custom sorting logic (ascending order)
    const customSort = (arr) => {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            // Swap elements if they are in the wrong order
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    };

    const sorted = customSort([...initialArray]);
    setSortedArray(sorted);
  }, [initialArray]);

  return sortedArray;
};