import React, {useState} from 'react';

export const NewNotes = ({setItems, setFlagNew}) => {

    const [textId, setTextId] = useState(1)
    const [textNote, setTextNote] = useState("")

    const onInputText = (evt) => {
        setTextNote(evt.target.value)
    }

    const onPushText = () => {
        if(textNote !== '') {
            setFlagNew(true)
            fetch("http://localhost:7777/notes", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({id:textId, content: textNote})
            })
                .then( (response) => response.json())
                .then(json => setItems(json))

            setTextNote("")
            setTextId(p => p + 1)
        }
    }


    return (
        <div className="inputBlock">
            <textarea
                  className="textarea"
                  value={textNote}
                  onChange={onInputText}
            ></textarea>
            <button onClick={onPushText}>Отправить =></button>
        </div>
    );
}

