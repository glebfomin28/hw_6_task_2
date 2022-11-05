import React, {useEffect, useState} from 'react';
import {ItemNote} from "./ItemNote";

export const ListNotes = ({items, deleteText, setFlagDel}) => {




    const printListNotes = items.map(el =>
        <ItemNote
            key={el.id}
            id={el.id}
            content={el.content}
            deleteText={deleteText}
            setFlagDel={setFlagDel}
        />
    )

    return (
        <div className="listNotes">
            {printListNotes}
        </div>
    );
}

