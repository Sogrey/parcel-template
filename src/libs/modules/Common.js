import BaseObject from "../BaseObject";
import { OnException } from "../OnException";

class Common extends BaseObject {
    constructor(api) {
        super();
        this.api = api;
    }

    getClassName () {
        return "Common";
    }

    aException () {
        try {
            const a = 0;
            a++;
        } catch (error) {
            OnException(error)
        }
    }

    getVersion () {
        return this.api.getVersion()
    }
}

export default Common;