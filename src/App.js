import React from 'react';
import './App.css';
import { incNumber, decNumber } from "./action/index";
import {useSelector, useDispatch} from 'react-redux'
import SearchResultNotFount from './SearchResultNotFount/SearchResultNotFount';
const App = () => {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <>
    <SearchResultNotFount/>
      {/* <div className="container">
        <h1 className='text-center'>Increment and decrement</h1>
        <h4 className='text-center'>with redux state management</h4>
        <div style={{ height: "100%", width: "100%", display:"flex", justifyContent: "center", alignItems: "center" }}>
            <input onClick={()=>dispatch(decNumber())} type="button" value="-"/>
            <input type="text"value={myState}/>
            <input onClick={()=>dispatch(incNumber())} type="button" value="+"/>
          </div>
      </div> */}
    </>
  );
};

export default App;