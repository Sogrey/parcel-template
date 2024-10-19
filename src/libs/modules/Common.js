import BaseObject from "../BaseObject";
import { OnException } from "../OnException";

/**
 * 基础工具接口
 * @class
 */
class Common extends BaseObject {
    /**
     * 
     * @constructor
     * @param {API} api 
     */
    constructor(api) {
        super();
        this.api = api;
    }

    /**
     * 返回此类类名
     * @returns 本类类型
     */
    getClassName () {
        return "Common";
    }

    /**
     * 抛出异常测试
     */
    aException () {
        try {
            const a = 0;
            a++;
        } catch (error) {
            OnException(error)
        }
    }

    /**
     * 获取引擎版本号
     * @returns 版本号
     * @see {@link API#getVersion}
     * @example 
     * // return '1.0.0'
     * api.Common.getVersion();
     */
    getVersion () {
        return this.api.getVersion()
    }
}

export default Common;