import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MultiDropdown } from './component/multi-select';

function App() {
  const [selectedItems, setSelectedItems] = useState([] as string[]);
  const initialItems = [{
    value: 'abc',
    label: 'abc',
  },
  {
    value: 'xyz',
    label: 'xyz',
  },
  {
    value: 'jkl',
    label: 'jkl',
  }]
 
  const handleChange= (value:string) => {
   // const newArray = [...selectedItems, value]
    console.log('value', selectedItems) 
    setSelectedItems([ 
      ...selectedItems,
      value
    ]);
  } 
  console.log(selectedItems);
  return (
    <div className="App">
        <MultiDropdown items={initialItems} selectedItems={selectedItems} onChange={handleChange} />
    </div>
  );
}

export default App;
