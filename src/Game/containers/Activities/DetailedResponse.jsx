import React, {useEffect, useRef, useState} from 'react';
import './DetailedResponse.css'
import appStore from "../../../store";

const DetailedResponse = ({callback}) => {

    const [inputText, setInputText] = useState('');

    return (
        <div className="DetailedResponse">
            <textarea onChange={(e) => setInputText(e.target.value)}/>
            <button onClick={()=>appStore.getNextStatus({answer: inputText})}>Отправить</button>
        </div>
    )
};

export default DetailedResponse;