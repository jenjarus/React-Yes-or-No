import React from "react";

interface IPropsResultItem {
    item: string
}

const ResultItem: React.FC<IPropsResultItem> = ({item}) => {
    return (
            <div className="item">Ответ - <b>{item}</b></div>
    );
};
export default ResultItem;
