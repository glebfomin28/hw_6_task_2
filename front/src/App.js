import React, {useEffect, useState} from 'react';
import './App.css';
import {ListNotes} from "./components/ListNotes";
import {NewNotes} from "./components/NewNotes";

function App() {
    const [reset, setReset] = useState(false)
    const [items, setItems] = useState([])

    const getNotes = () => {
        fetch('http://localhost:7777/notes')
            .then( (res) => res.json())
            .then((res) => setItems(res))
    }

    useEffect( () => {
        getNotes()
    }, [])


    useEffect( () => {
        getNotes()
    }, [reset])


    const deleteText = (id) => {
        fetch('http://localhost:7777/notes/' + id, {
            method: 'DELETE',
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                setItems(p => p.filter(item => item.id !== id));
                return response;
            }
        })
        getNotes()
    }

    const pushText = (text, id) => {
        fetch("http://localhost:7777/notes", {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },

            body: JSON.stringify({id:id, content: text})
        })
            .then( (response) => {
                if (response.status >= 200 && response.status < 300) {
                    setItems(p => [...p, {id:id, content: text}]);
                }
                return response;
            })
        getNotes()
    }

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
                    pushText={pushText}
                />
                <ListNotes
                    items={items}
                    deleteText={deleteText}
                />
            </div>

        </>
  );
}

export default App;
