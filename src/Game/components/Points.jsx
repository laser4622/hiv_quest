import React from 'react'
import appStore from "../../store";

import './Points.css'

const numberEnding = (number) => {
    let ending = 'баллов'
    const lastDigit = number % 10;
    const preLastDigit = Math.floor(number % 100 / 10);

    if(preLastDigit===1 || lastDigit===0) return ending

    if(lastDigit===1) {
        ending = 'балл'
    }else if(number%10<5) {
        ending = 'балла'
    }

    return ending;
}

const Points = () => {
    return (
        <div className="Points">
            <span>{appStore.score} {numberEnding( Math.abs(appStore.score))}</span>
        </div>
    )
}

export default Points;