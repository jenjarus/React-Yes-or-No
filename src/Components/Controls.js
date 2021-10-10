import React from 'react'
import { connect } from 'react-redux'
import { addItem, Reset } from '../actions'

const Controls = ({addItem, Reset}) => {
    return (
        <div className="btns">
            <button className="btn random" onClick={addItem}>Узнать</button>
            <button className="btn reset" onClick={Reset}>Очистить</button>
        </div>
    );
};

const mapDipatchToProps = {
    addItem,
    Reset
};

export default connect(null, mapDipatchToProps)(Controls)
