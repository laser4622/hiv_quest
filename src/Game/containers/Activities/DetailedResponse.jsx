import React, {useEffect, useRef, useState} from 'react';
import './DetailedResponse.css'

const DetailedResponse = ({callback}) => {

    const [inputText, setInputText] = useState('');

    return (
        <div className="DetailedResponse">
            <textarea onChange={(e) => setInputText(e.target.value)}/>
            <button onClick={()=>callback(inputText)}>Отправить</button>
        </div>
    )
};

export default DetailedResponse;