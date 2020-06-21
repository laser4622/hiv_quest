import {observable, action, autorun, decorate, computed} from 'mobx'
import Cookie from "js-cookie"
import {getStatus, gameLogin} from "./api";

class AppStore {
    token = '';
    text = 'Привет, давно не видились. Как дела?';
    activity = null;
    position = '';
    currentChar = null;
    currentStep = 0;
    score = 0;
    background = '';


    async login(phone) {
        try {
            const token = (await gameLogin({phone})).data;
            Cookie.set("token", token);
            this.setToken(token);
        } catch (e) {
            console.log(e);
        }
    }

    updateStatus = async () => {
        const status = (await getStatus(this.token)).data


        this.currentChar = status.char;
/*
        this.text = status.activity.text;
        this.currentStep = status.currentStep;
        this.score = status.score;
        this.position = status.position;
        this.background = status.background;*/
    };


    setToken(token) {
        this.token = token;
    }

}

decorate(AppStore, {
    isRight: observable,
    text: observable,
    activity: observable,
    position: observable,
    updateStatus: action,
    currentChar: observable
});

const appStore = new AppStore();

autorun(async () => {
    const token = Cookie.get('token');

    appStore.setToken(token);
    await appStore.updateStatus();

});

export default appStore;