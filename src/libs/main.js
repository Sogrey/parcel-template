import Common from "./modules/Common.js";

/** 
 * 引擎主入口
 * @class
 */
class API {

    /** 版本号 */
    static VERSION = "1.0.0"

    /**
     * 引擎主类构造
     * @param {Object} options 配置参数表
     * @constructor
     */
    constructor(options) {
        let _this = this;
        /** 配置 */
        _this.options = options;

        /**
         * 公共模块. See {@link Common}
         * @see: {@link Common}
         */
        this.Common = new Common(_this);
    }

    /**
     * 测试
     */
    test () {
        console.log(`Hi,It's running.\nVersion: ${API.VERSION}`);
    }

    /**
     * 获取引擎版本号
     * @returns 版本号
     * @example 
     * // return '1.0.0'
     * api.getVersion();
     * @since 1.0.0
     */
    getVersion () {
        return API.VERSION
    }
}

export default API;
