import {observable, action, autorun, decorate} from 'mobx'
import Cookie from "js-cookie"
import {getStatus, gameLogin} from "./api";

class AppStore {
    token = '';

    async login(phone) {
        try {
            const token = (await gameLogin({phone})).data;
            Cookie.set("token", token);
            this.setToken(token);
        }catch (e) {
            console.log(e);
        }
    }

    async updateStatus(){
        console.log((await getStatus(this.token)).data)
    }


    setToken(token) {
        this.token = token;
    }

}

decorate(AppStore, {

});

const appStore = new AppStore();

autorun(() => {
    const token = Cookie.get('token');

    appStore.setToken(token);
});

export default appStore;