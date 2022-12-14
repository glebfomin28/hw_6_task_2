import React from 'react';

export const ItemNote = ({content, id, deleteText}) => {
    const onDeleteItem = () => {
        deleteText(id)
    }

    return (
        <div className="printCard">
            {content}
            <button className="dellItem" onClick={onDeleteItem}>X</button>
        </div>
    );
}

