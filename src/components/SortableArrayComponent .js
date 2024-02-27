import { useCustomSort } from "./useCustomSort";



export function SortableArrayComponent ({ arrayToSort }) {
    const sortedArray = useCustomSort(arrayToSort);
  
    return (
      <div>
        <h2>Sorted Array:</h2>
        <ul>
          {sortedArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  