import {observable, action, autorun, decorate, computed} from 'mobx'
import Cookie from "js-cookie"
import {getStatus, gameLogin, chooseChar, getReset, getNext} from "./api";

class AppStore {
    token = '';
    finishTime = 0;
    activity = null;
    position = '';
    currentChar = null;
    currentStep = '0';
    score = 0;
    background = '';
    availableChars = {};
    emotion = 'neutral';


    async login(phone, code) {
        try {
            const token = (await gameLogin({phone, code})).data;
            Cookie.set("token", token);
            this.setToken(token);
        } catch (e) {
            console.log(e);
        }
    }

    setStatus = (status) => {
        this.availableChars = status.availableChars
        this.currentChar = status.char;
        this.activity = status.activity;
        this.currentStep = status.currentStep;
        this.score = status.score;
        this.position = status.position;
        this.background = status.background;
        this.emotion = status.emotion || 'neutral';

        if(this.currentStep==="finish") {
            this.finishTime = status.time;
        }
    }

    getNextStatus = async (option={}) => {
        this.setStatus( (await getNext(option)).data );

    }

    resetGame = async () => {
        this.setStatus((await getReset()).data)
    }

    chooseChar = async (data) => {
        this.setStatus((await chooseChar(data)).data)
    }

    updateStatus = async () => {
        this.setStatus((await getStatus(this.token)).data);
    };


    setToken(token) {
        this.token = token;
    }

}

decorate(AppStore, {
    isRight: observable,
    activity: observable,
    position: observable,
    updateStatus: action,
    currentChar: observable,
    currentStep: observable,
    emotion: observable
});

const appStore = new AppStore();

autorun(() => {
    const token = Cookie.get('token');
    appStore.setToken(token);
});

export default appStore;