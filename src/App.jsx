import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './Router';
import axios from "axios";

const images = [
    'bortsov_angry.png',
    'hugs.png',
    'moderator_happy.png',
    'square.png',
    'bortsov_dissatisfied.png',
    'kraskovskaya_dissatisfied.png',
    'moderator_neutral.png',
    'squareModerator.png',
    'bortsov_fear.png',
    'kraskovskaya_happy.png',
    'mom_angry.png',
    'tentIn.png',
    'bortsov_happy.png',
    'kraskovskaya_neutral.png',
    'mom_neutral.png',
    'tentInDoctor.png',
    'bortsov_neutral.png',
    'kraskovskaya_sad.png',
    'mom_sad.png',
    'tentOut.png',
    'bortsov_sad.png',
    'kraskovskaya_skeptical.png',
    'mom_shocked.png',
    'virus_angry.png',
    'bortsovjacket_happy.png',
    'kraskovskaya_surprised.png',
    'palebortsov_dissatisfied.png',
    'virus_fear.png',
    'bortsovjacket_neutral.png',
    'kraskovskayabant_happy.png',
    'palebortsov_neutral.png',
    'virus_happy.png',
    'bortsovjacket_sad.png',
    'kraskovskayabant_neutral.png',
    'palebortsov_sad.png',
    'virus_neutral.png',
    'canteen.png',
    'kraskovskayabant_sad.png',
    'prison.png',
    'viruspsycho_angry.png',
    'canteenMom.png',
    'lastCall.png',
    'school.png',
    'viruspsycho_neutral.png',
    'doctor_neutral.png',
    'lena_angry.png',
    'schoolExit.png',
    'yard.png',
    'girlRoom.png',
    'lena_neutral.png',
    'schoolMicro.png'
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