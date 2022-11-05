import React, {useEffect, useState} from 'react';
import './App.css';
import {ListNotes} from "./components/ListNotes";
import {NewNotes} from "./components/NewNotes";

function App() {
    const [reset, setReset] = useState(false)
    const [items, setItems] = useState([])
    const [dellItems, setDellItems] = useState(null)

    const [flagNew, setFlagNew] = useState(false)
    const [flagDel, setFlagDel] = useState(false)

    const getNotes = () => {
        setFlagNew(false)
        setFlagDel(false)
        fetch('http://localhost:7777/notes')
            .then( (res) => res.json())
            .then((res) => setItems(res))
    }

    useEffect( () => {
        getNotes()
    }, [])


    useEffect( () => {
        getNotes()
    }, [flagNew, flagDel, reset])

    const deleteText = (id) => {
        setDellItems(id)
    }

    useEffect(() => {
        fetch('http://localhost:7777/notes/' + dellItems, {
            method: 'DELETE',
        }).then(response => response)
    }, [flagDel])

    const onReset = () => {
        setReset(p => !p)
    }

    return (
        <>
            <div className="refresh">Notes :
              <button onClick={onReset}>Обновление списка</button>
            </div>
            <div className="body">
                <NewNotes
                    setItems={setItems}
                    setFlagNew={setFlagNew}
                />
                <ListNotes
                    items={items}
                    deleteText={deleteText}
                    setFlagDel={setFlagDel}
                />
            </div>

        </>
  );
}

export default App;
