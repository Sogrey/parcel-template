import Common from "./modules/Common";

class API {

    static VERSION = "1.0.0"

    constructor(options) {
        let _this = this;
        _this.options = options;

        this.Common = new Common(this);
    }

    test () {
        console.log(`Hi,It's running.\nVersion: ${API.VERSION}`);
    }

    getVersion () {
        return API.VERSION
    }
}

export default API;
