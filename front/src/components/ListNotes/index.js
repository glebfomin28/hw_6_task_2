import React from 'react';
import {ItemNote} from "./ItemNote";

export const ListNotes = ({items, deleteText}) => {


    const printListNotes = items.map(el =>
        <ItemNote
            key={el.id}
            id={el.id}
            content={el.content}
            deleteText={deleteText}
        />
    )

    return (
        <div className="listNotes">
            {printListNotes}
        </div>
    );
}

