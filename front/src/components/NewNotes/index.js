import React, {useState} from 'react';

export const NewNotes = ({pushText}) => {

    const [textNote, setTextNote] = useState("")
    const [textId, setTextId] = useState(1)

    const onInputText = (evt) => {
        setTextNote(evt.target.value)
    }

    const onPushText = () => {
        if(textNote !== '') {
            pushText(textNote, textId)
        }

        setTextNote("")
        setTextId(p => p + 1)
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

