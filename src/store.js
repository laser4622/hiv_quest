import {observable, action, autorun, decorate, computed} from 'mobx'
import Cookie from "js-cookie"
import {getStatus, gameLogin, chooseChar, getReset, getNext} from "./api";

// Лена lena
// Ведущий moderator
// Доктор doctor
// Мама mom
// Вирус virus
const chars = {
    bortsov: 'Саша Борцов',
    kraskovskaya: 'Саша Красковская',
    lena: 'Лена',
    doctor: 'Доктор',
    mom: 'Мама',
    virus: 'Вирус',
    moderator: 'Ведущий',
};


class AppStore {
    token = '';
    finishTime = 0;
    activity = null;
    position = '';
    currentChar = '';
    currentStep = '0';
    score = 0;
    background = '';
    availableChars = {};
    emotion = 'neutral';
    lock = false;

    get charName(){
        for (const char of Object.keys(chars)) {

            if(this.currentChar && this.currentChar.includes(char))
                return chars[char];
        }
        return '';
    }


    async login(phone, code) {
        try {
            const token = (await gameLogin({phone, code})).data;
            Cookie.set("token", token);
            this.setToken(token);
        } catch (e) {
            console.log(e);
            throw new Error('error');
        }
    }

    setStatus = (status) => {
        this.availableChars = status.availableChars;
        this.currentChar = status.char;
        this.activity = status.activity;
        this.currentStep = status.currentStep;
        this.score = status.score;
        this.position = status.position;
        this.background = status.background;
        this.emotion = status.emotion || 'neutral';

        if (this.currentStep === "finish") {
            this.finishTime = status.time;
        }
    };

    setLock = async () => {
        this.lock = true;
        setTimeout(()=>{
            this.lock = false;
        },1000)
    };

    getNextStatus = async (option = {}) => {
        try {
            if(this.lock) return;
            this.setStatus((await getNext(option)).data);
            this.setLock();
        } catch (e) {
            this.error(e);
        }

    };

    resetGame = async () => {
        this.setStatus((await getReset()).data)
    };

    chooseChar = async (data) => {
        try {
            if(this.lock) return;
            this.setStatus((await chooseChar(data)).data);
            this.setLock();
        } catch (e) {
            this.error(e);
        }
    };

    updateStatus = async () => {
        try {
            if(this.lock) return;
            this.setStatus((await getStatus(this.token)).data);
            this.setLock();
        } catch (e) {
            this.error(e);
        }
    };

    error = (e) => {
        if (e.response && e.response.status===403){
            this.token = null;
            Cookie.remove('token')
        }
    };


    setToken(token) {
        this.token = token;
    }

}

decorate(AppStore, {
    isRight: observable,
    background: observable,
    activity: observable,
    position: observable,
    updateStatus: action,
    currentChar: observable,
    currentStep: observable,
    emotion: observable,
    error: action,
    token: observable,
    charName: computed

});

const appStore = new AppStore();

autorun(() => {
    const token = Cookie.get('token');
    appStore.setToken(token);
});

export default appStore;