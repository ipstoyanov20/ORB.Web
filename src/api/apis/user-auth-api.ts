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
import { ForgotPasswordModel } from '../models';
import { TokensIM } from '../models';
import { UserIM } from '../models';
import { UserLM } from '../models';
/**
 * UserAuthApi - axios parameter creator
 * @export
 */
export const UserAuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Confirms email of a user.
         * @param {string} [token] Token.
         * @param {string} [email] Email.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserAuthConfirmEmailGet: async (token?: string, email?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/auth/confirm-email`;
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

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
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
         * @summary Sends email for resetting a password.
         * @param {ForgotPasswordModel} [body] Model for forgotten password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserAuthForgotPasswordPost: async (body?: ForgotPasswordModel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/auth/forgot-password`;
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
         * @summary Route to login a user.
         * @param {UserLM} [body] Email and Password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserAuthLoginPost: async (body?: UserLM, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/auth/login`;
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
         * @summary Register a user.
         * @param {UserIM} [body] Register model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserAuthRegisterPost: async (body?: UserIM, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/auth/register`;
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
         * @summary Renews a access token.
         * @param {TokensIM} [body] Token model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserAuthRenewPost: async (body?: TokensIM, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/auth/renew`;
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
         * @summary Resets the user password.
         * @param {string} [password] 
         * @param {string} [email] 
         * @param {string} [token] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserAuthResetPasswordPostForm: async (password?: string, email?: string, token?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/auth/reset-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }


            if (password !== undefined) { 
                localVarFormParams.append('Password', password as any);
            }

            if (email !== undefined) { 
                localVarFormParams.append('Email', email as any);
            }

            if (token !== undefined) { 
                localVarFormParams.append('Token', token as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserAuthApi - functional programming interface
 * @export
 */
export const UserAuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Confirms email of a user.
         * @param {string} [token] Token.
         * @param {string} [email] Email.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthConfirmEmailGet(token?: string, email?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserAuthApiAxiosParamCreator(configuration).apiUserAuthConfirmEmailGet(token, email, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Sends email for resetting a password.
         * @param {ForgotPasswordModel} [body] Model for forgotten password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthForgotPasswordPost(body?: ForgotPasswordModel, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserAuthApiAxiosParamCreator(configuration).apiUserAuthForgotPasswordPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Route to login a user.
         * @param {UserLM} [body] Email and Password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthLoginPost(body?: UserLM, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserAuthApiAxiosParamCreator(configuration).apiUserAuthLoginPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Register a user.
         * @param {UserIM} [body] Register model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthRegisterPost(body?: UserIM, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserAuthApiAxiosParamCreator(configuration).apiUserAuthRegisterPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Renews a access token.
         * @param {TokensIM} [body] Token model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthRenewPost(body?: TokensIM, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserAuthApiAxiosParamCreator(configuration).apiUserAuthRenewPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Resets the user password.
         * @param {string} [password] 
         * @param {string} [email] 
         * @param {string} [token] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthResetPasswordPostForm(password?: string, email?: string, token?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await UserAuthApiAxiosParamCreator(configuration).apiUserAuthResetPasswordPostForm(password, email, token, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserAuthApi - factory interface
 * @export
 */
export const UserAuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Confirms email of a user.
         * @param {string} [token] Token.
         * @param {string} [email] Email.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthConfirmEmailGet(token?: string, email?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserAuthApiFp(configuration).apiUserAuthConfirmEmailGet(token, email, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sends email for resetting a password.
         * @param {ForgotPasswordModel} [body] Model for forgotten password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthForgotPasswordPost(body?: ForgotPasswordModel, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserAuthApiFp(configuration).apiUserAuthForgotPasswordPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Route to login a user.
         * @param {UserLM} [body] Email and Password.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthLoginPost(body?: UserLM, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserAuthApiFp(configuration).apiUserAuthLoginPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register a user.
         * @param {UserIM} [body] Register model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthRegisterPost(body?: UserIM, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserAuthApiFp(configuration).apiUserAuthRegisterPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Renews a access token.
         * @param {TokensIM} [body] Token model.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthRenewPost(body?: TokensIM, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserAuthApiFp(configuration).apiUserAuthRenewPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Resets the user password.
         * @param {string} [password] 
         * @param {string} [email] 
         * @param {string} [token] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserAuthResetPasswordPostForm(password?: string, email?: string, token?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return UserAuthApiFp(configuration).apiUserAuthResetPasswordPostForm(password, email, token, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserAuthApi - object-oriented interface
 * @export
 * @class UserAuthApi
 * @extends {BaseAPI}
 */
export class UserAuthApi extends BaseAPI {
    /**
     * 
     * @summary Confirms email of a user.
     * @param {string} [token] Token.
     * @param {string} [email] Email.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAuthApi
     */
    public async apiUserAuthConfirmEmailGet(token?: string, email?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserAuthApiFp(this.configuration).apiUserAuthConfirmEmailGet(token, email, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Sends email for resetting a password.
     * @param {ForgotPasswordModel} [body] Model for forgotten password.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAuthApi
     */
    public async apiUserAuthForgotPasswordPost(body?: ForgotPasswordModel, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserAuthApiFp(this.configuration).apiUserAuthForgotPasswordPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Route to login a user.
     * @param {UserLM} [body] Email and Password.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAuthApi
     */
    public async apiUserAuthLoginPost(body?: UserLM, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserAuthApiFp(this.configuration).apiUserAuthLoginPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Register a user.
     * @param {UserIM} [body] Register model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAuthApi
     */
    public async apiUserAuthRegisterPost(body?: UserIM, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserAuthApiFp(this.configuration).apiUserAuthRegisterPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Renews a access token.
     * @param {TokensIM} [body] Token model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAuthApi
     */
    public async apiUserAuthRenewPost(body?: TokensIM, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserAuthApiFp(this.configuration).apiUserAuthRenewPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Resets the user password.
     * @param {string} [password] 
     * @param {string} [email] 
     * @param {string} [token] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAuthApi
     */
    public async apiUserAuthResetPasswordPostForm(password?: string, email?: string, token?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return UserAuthApiFp(this.configuration).apiUserAuthResetPasswordPostForm(password, email, token, options).then((request) => request(this.axios, this.basePath));
    }
}
