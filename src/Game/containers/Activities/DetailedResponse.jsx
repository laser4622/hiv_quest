import React, {useEffect, useRef, useState} from 'react';
import './DetailedResponse.css'
import appStore from "../../../store";
import PlayButton from "../../components/PlayButton";

const DetailedResponse = ({callback}) => {

    const [inputText, setInputText] = useState('');

    return (
        <div className="DetailedResponse">
            <textarea autoFocus={true} onChange={(e) => setInputText(e.target.value)}/>
            <PlayButton style={{width: '50%', margin: 'auto', padding: '10%', fontSize: 'calc(90vh/16*9 * 0.03)'}} onClick={()=>appStore.getNextStatus({answer: inputText})}>Отправить</PlayButton>
        </div>
    )
};

export default DetailedResponse;