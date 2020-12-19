import React, { useState } from 'react';
import './App.css';
import { MultiSelect } from './component/multi-select';
import { Chips } from './component/chips';
import { OptionItem } from './interfaces';

function App() {
  const initialItems: OptionItem[] = [{
    label: 'Jenny Hess',
    value: '1',
    isSelected: false
  },
  {
    label: 'Eliot Fu',
    value: '2',
    isSelected: false
  },
  {
    label: 'Steve Feliciano',
    value: '3',
    isSelected: false
  },
  {
    label: 'Christian',
    value: '4',
    isSelected: false
  }]
 
  const [selectedItems, setSelectedItems] = useState(initialItems);
  
  
  const handleAdd = (index: number) => {
    const newItems = [...selectedItems]
    newItems[index].isSelected = true;
    setSelectedItems(newItems);
  } 
    
  const handleRemove = (value: string) => {
    const newItems = [...selectedItems]
    const index = selectedItems.findIndex(item => item.value === value);
    newItems[index].isSelected = false;
    setSelectedItems(newItems);
  } 
  
  
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column'}}>
        <div> 
          <MultiSelect label="Select Users" items={selectedItems} onChange={handleAdd} />
        </div>
        <div style={{ marginTop: 16 }}>
          <Chips items={selectedItems.filter(item => item.isSelected === true)} onClickRemove={handleRemove} />
        </div>
    </div>
  );
}

export default App;
