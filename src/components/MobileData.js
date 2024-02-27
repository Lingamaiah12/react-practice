import { useReducer } from "react";
import iphone1 from '../Images/iphone1.webp';

import iphone2 from '../Images/iphone2.webp'
import iphone3 from '../Images/iphone3.webp'
import iphone4 from '../Images/iphone4.webp'
import iphone5 from '../Images/iphone5.webp'
import iphone6 from '../Images/iphone6.webp'

const initialState = {
  selectedImage: null,
  data: {}, // You can initialize this with your actual data structure
};

function reducer(state, action) {
  switch (action.type) {
    case 'i1':
      return {
        ...state,
        selectedImage: action.image,
      };
      case 'i2':
      return {
        ...state,
        selectedImage: action.image,
      };
      case 'i3':
      return {
        ...state,
        selectedImage: action.image,
      };
      case 'i4':
      return {
        ...state,
        selectedImage: action.image,
      };
      case 'i5':
      return {
        ...state,
        selectedImage: action.image,
      };
      case 'i6':
      return {
        ...state,
        selectedImage: action.image,
      };

    // Add other cases for different actions if needed
    default:
      return state;
  }
}

export default function MobileData() {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="row">
      <div className="col-2 ">
        <img
          src={iphone1}
          height={'60px'}
          width={'60px'}
          onClick={() => dispatch({ type: 'i1', image:<img src={iphone1}/> })}
        />
        <br/>
        <img
          src={iphone2}
          height={'60px'}
          width={'60px'}
          onClick={() => dispatch({ type: 'i2', image:<img src={iphone2}/> })}
        />
        <br/>
        <img
          src={iphone3}
          height={'60px'}
          width={'60px'}
          onClick={() => dispatch({ type: 'i3', image:<img src={iphone3}/> })}
        />
        <br/>
        <img
          src={iphone4}
          height={'60px'}
          width={'60px'}
          onClick={() => dispatch({ type: 'i4', image:<img src={iphone4}/> })}
        />
        <br/>
        <img
          src={iphone5}
          height={'60px'}
          width={'60px'}
          onClick={() => dispatch({ type: 'i5', image:<img src={iphone5}/> })}
        />
        <br/>   
        <img
          src={iphone6}
          height={'60px'}
          width={'60px'}
          onClick={() => dispatch({ type: 'i6', image:<img src={iphone6}/> })}
        />
      </div>
      <div className="col-10">
        <span>{data.selectedImage}</span>
      </div>
    </div>
  );
}
