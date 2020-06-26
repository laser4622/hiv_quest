import React from 'react'
import './LetterReading.css'
import appStore from "../../../store";
import PlayButton from "../../components/PlayButton";

const LetterReading = () => {
    return (
        <div className="LetterReading">
            <span className="LetterReading-letter_text">{appStore.activity.text}
                <PlayButton style={{width: '50%', margin: 'auto', marginTop: 25}} onClick={()=>appStore.getNextStatus()}>Далее</PlayButton>
            </span>
        </div>
    )
}

export default LetterReading;