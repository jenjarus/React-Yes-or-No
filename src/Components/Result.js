import React from "react";
import ResultItem from './ResultItem'
import { useSelector } from 'react-redux'

const Results = () => {
    const count = useSelector((store) => store.count);
    const items = useSelector((store) => store.items);

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
