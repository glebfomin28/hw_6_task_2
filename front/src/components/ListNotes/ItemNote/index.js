import React from 'react';

export const ItemNote = ({content, id, deleteText, setFlagDel}) => {
    const onDeleteItem = () => {
        deleteText(id)
        setFlagDel(true)
    }

    return (
        <div className="printCard">
            {content}
            <button className="dellItem" onClick={onDeleteItem}>X</button>
        </div>
    );
}

