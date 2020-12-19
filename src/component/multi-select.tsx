import React, { useState, useCallback } from 'react';
import '../styles/multi-select.css'
interface MultiSelectProp {
  items: {
    label: string;
    value: string;
  }[],
  selectedItems: string[]
  onChange: (value:string) => void;
}

export function MultiDropdown({ items, selectedItems, onChange}: MultiSelectProp) {
    
    const handleChange = useCallback((value: string) => {
      onChange(value);
    },[selectedItems])
    
    return (
        <div className="dropdown">
          <div className="flex row dropdown-title">  
            <div className="">Mouse over me</div>
            <i className="material-icons">arrow_drop_down</i>
          </div>
          
        <div className="dropdown-content">
          {items.map((item, key) => (
            <div className="flex space-bet">
              <div className="label"> {item.label}</div>
            
            <div>
              <input onClick={() => handleChange(item.value)} 
                className="checkbox-custom" key={`checkbox-${key}`} 
                type="checkbox" 
                checked={selectedItems.includes(item.value)}/>
            </div> 
             



            </div>
          )
          )}
        </div>

       
        
      </div>
    
    )
}