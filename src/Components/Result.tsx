import React from "react";
import ResultItem from './ResultItem'
import { useSelector } from 'react-redux'
import { IReduxState } from "../types"

const Results = () => {
    const count = useSelector((store: IReduxState) => store.count);
    const items = useSelector((store: IReduxState) => store.items);

    return (
    <div className="result_box">
        <div className="top">
            <span className="title">Результаты:</span>
            <span className="count">{count}</span>
        </div>
        <div id="result">
            {items.map((el, i) =>{
                return <ResultItem
                    key={i}
                    item={el}
                />}
            )}
        </div>
    </div>
    );
};

export default Results;
