import React from "react";
import ResultItem from './ResultItem'
import { connect } from 'react-redux'

const Results = ({count, items}) => {
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
}

function mapStateToProps(state) {
    return {
        count: state.count,
        items: state.items
    }
}

export default connect(mapStateToProps)(Results)
