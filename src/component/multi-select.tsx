import React, { useState, useCallback } from 'react';
import '../styles/multi-select.css'
import { MultiSelectProp } from '../interfaces';


export function MultiSelect({ items, onChange, label}: MultiSelectProp) {
    const handleChange = useCallback((index: number) => {
      onChange(index);
    },[items])
   
    return (
        <div className="dropdown">
          <div className="flex row dropdown-title">  
          <div className="">{label}</div>
            <i className="material-icons">arrow_drop_down</i>
          </div>
          
        <div className="dropdown-content">
          {items.map((item, key) =>  (
            <div key={`multi-select-${key}`} className="flex space-bet" onClick={() => handleChange(key)}>
              <div> {item.label}</div>
              {item.isSelected && (
                <div>
                  <input 
                    readOnly
                    className="checkbox-custom" 
                    type="checkbox" 
                    checked={item.isSelected}/>
                  </div> 
              )}
            </div>
          )
          )}
        </div>
      </div>
    
    )
}