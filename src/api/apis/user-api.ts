/* tslint:disable */
/* eslint-disable */
/**
 * Online Resume Builder API
 * An API for Online Resume Builder
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { UpdatePasswordModel } from '../models';
import { UserUM } from '../models';
import { UserVM } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Changes the password of the current user.
         * @param {UpdatePasswordModel} [body] Update password model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserChangePasswordPost: async (body?: UpdatePasswordModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/change-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets info of the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserCurrentGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/current`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates the current user.
         * @param {UserUM} [body] User Update Model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPut: async (body?: UserUM, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Changes the password of the current user.
         * @param {UpdatePasswordModel} [body] Update password model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserChangePasswordPost(body?: UpdatePasswordModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserChangePasswordPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets info of the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserCurrentGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserVM>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserCurrentGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates the current user.
         * @param {UserUM} [body] User Update Model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPut(body?: UserUM, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserPut(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Changes the password of the current user.
         * @param {UpdatePasswordModel} [body] Update password model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserChangePasswordPost(body?: UpdatePasswordModel, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserApiFp(configuration).apiUserChangePasswordPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets info of the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserCurrentGet(options?: AxiosRequestConfig): Promise<AxiosResponse<UserVM>> {
            return UserApiFp(configuration).apiUserCurrentGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates the current user.
         * @param {UserUM} [body] User Update Model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPut(body?: UserUM, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserApiFp(configuration).apiUserPut(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @summary Changes the password of the current user.
     * @param {UpdatePasswordModel} [body] Update password model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserChangePasswordPost(body?: UpdatePasswordModel, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserApiFp(this.configuration).apiUserChangePasswordPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Gets info of the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserCurrentGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<UserVM>> {
        return UserApiFp(this.configuration).apiUserCurrentGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Updates the current user.
     * @param {UserUM} [body] User Update Model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserPut(body?: UserUM, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserApiFp(this.configuration).apiUserPut(body, options).then((request) => request(this.axios, this.basePath));
    }
}
