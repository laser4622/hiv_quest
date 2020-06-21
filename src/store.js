import {observable, action, autorun, decorate, computed} from 'mobx'
import Cookie from "js-cookie"
import {getStatus, gameLogin} from "./api";

class AppStore {
    token = '';
    text = 'Привет, давно не видились. Как дела?';
    activity = null;
    isRight = false;
    currentChar = null;
    currentStep = 0;
    background = '';


    get position() {
        return this.isRight ? 'right' : 'left'
    };


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
        this.text = this.isRight ? 'Привет, давно не видились. Как дела?' : 'Привет, все хорошо, как у тебя?';
        this.isRight = !this.isRight
    };


    setToken(token) {
        this.token = token;
    }

}

decorate(AppStore, {
    isRight: observable,
    text: observable,
    activity: observable,
    position: computed,
    updateStatus: action,
    currentChar: observable
});

const appStore = new AppStore();

autorun(async () => {
    const token = Cookie.get('token');

    appStore.setToken(token);
    getStatus(token)

});

export default appStore;