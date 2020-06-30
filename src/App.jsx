import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './Router';
import axios from "axios";

const images = ['bortsov_angry.png',
    'bortsov_dissatisfied.png',
    'bortsov_fear.png',
    'bortsov_happy.png',
    'bortsov_neutral.png',
    'bortsov_sad.png',
    'bortsovjacket_happy.png',
    'bortsovjacket_neutral.png',
    'bortsovjacket_sad.png',
    'boy.png',
    'canteen.png',
    'canteenMom.png',
    'doctor_neutral.png',
    'girl.png',
    'girlRoom.png',
    'hugs.png',
    'kraskovskaya_dissatisfied.png',
    'kraskovskaya_happy.png',
    'kraskovskaya_neutral.png',
    'kraskovskaya_sad.png',
    'kraskovskaya_skeptical.png',
    'kraskovskaya_surprised.png',
    'kraskovskayabant_happy.png',
    'kraskovskayabant_neutral.png',
    'lastCall.png',
    'lena_angry.png',
    'lena_neutral.png',
    'letterBackground.png',
    'letterNohands.png',
    'moderator_happy.png',
    'moderator_neutral.png',
    'mom_angry.png',
    'mom_neutral.png',
    'mom_sad.png',
    'mom_shocked.png',
    'palebortsov_dissatisfied.png',
    'palebortsov_neutral.png',
    'palebortsov_sad.png',
    'prison.png',
    'school.png',
    'square.png',
    'squareModerator.png',
    'tentIn.png',
    'tentInDoctor.png',
    'tentOut.png',
    'virus_fear.png',
    'virus_happy.png',
    'virus_neutral.png',
    'viruspsycho_angry.png',
    'viruspsycho_neutral.png',
    'yard.png'
]

const App = () => {

    return (
        <div>
            <div style={{display: 'none'}}>
                {images.map(src => {
                    return <img src={`https://api.goquest.online/${src}`}/>
                })}
            </div>
            <Router>
                <BaseRouter />
            </Router>
        </div>
    );
};

export default App;