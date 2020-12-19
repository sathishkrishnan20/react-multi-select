import React from 'react';
import '../styles/chips.css';
import { ChipsProp } from '../interfaces';

export function Chips({items, onClickRemove}: ChipsProp) {
    return (
        <div className="container">
            {items.map((item, key) => (
                <div className="chip-container" key={key}>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div className={'label'}> {item.label}</div>
                        <i onClick={() => onClickRemove(item.value)} className="material-icons closebtn">close</i>
                    </div>
                </div>
            ))}
        </div>   
    )
}