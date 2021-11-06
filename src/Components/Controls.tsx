import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, Reset } from '../actions'

const Controls = () => {
    const dispatch = useDispatch();

    const ResetItem = () =>{
        dispatch(Reset())
    };

    const randomizeItem = () => {
        let answer;
        const random = Math.floor(Math.random() * 2) + 1;
        random > 1 ? answer = 'Нет' : answer = 'Да';
        dispatch(addItem(answer))
    };

    return (
        <div className="btns">
            <button className="btn random" onClick={randomizeItem}>Узнать</button>
            <button className="btn reset" onClick={ResetItem}>Очистить</button>
        </div>
    );
};

export default Controls;
