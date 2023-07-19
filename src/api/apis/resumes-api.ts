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
import { ResumeIM } from '../models';
import { ResumeVM } from '../models';
/**
 * ResumesApi - axios parameter creator
 * @export
 */
export const ResumesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Endpoint for getting all resumes of the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiResumesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Resumes`;
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
         * @summary Endpoint for getting a specific resume by its id.
         * @param {string} id Id of the resume to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiResumesIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiResumesIdGet.');
            }
            const localVarPath = `/api/Resumes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @summary Update a resume by its id.
         * @param {string} id Id of the resume to update.
         * @param {ResumeIM} [body] Updated information of the resume.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiResumesIdPut: async (id: string, body?: ResumeIM, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiResumesIdPut.');
            }
            const localVarPath = `/api/Resumes/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        /**
         * 
         * @summary Endpoint for creating a new resume.
         * @param {ResumeIM} [body] Input model for the new resume.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiResumesPost: async (body?: ResumeIM, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Resumes`;
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
    }
};

/**
 * ResumesApi - functional programming interface
 * @export
 */
export const ResumesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Endpoint for getting all resumes of the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ResumeVM>>>> {
            const localVarAxiosArgs = await ResumesApiAxiosParamCreator(configuration).apiResumesGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Endpoint for getting a specific resume by its id.
         * @param {string} id Id of the resume to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResumeVM>>> {
            const localVarAxiosArgs = await ResumesApiAxiosParamCreator(configuration).apiResumesIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a resume by its id.
         * @param {string} id Id of the resume to update.
         * @param {ResumeIM} [body] Updated information of the resume.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesIdPut(id: string, body?: ResumeIM, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResumeVM>>> {
            const localVarAxiosArgs = await ResumesApiAxiosParamCreator(configuration).apiResumesIdPut(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Endpoint for creating a new resume.
         * @param {ResumeIM} [body] Input model for the new resume.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesPost(body?: ResumeIM, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResumeVM>>> {
            const localVarAxiosArgs = await ResumesApiAxiosParamCreator(configuration).apiResumesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ResumesApi - factory interface
 * @export
 */
export const ResumesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Endpoint for getting all resumes of the current user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ResumeVM>>> {
            return ResumesApiFp(configuration).apiResumesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Endpoint for getting a specific resume by its id.
         * @param {string} id Id of the resume to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResumeVM>> {
            return ResumesApiFp(configuration).apiResumesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a resume by its id.
         * @param {string} id Id of the resume to update.
         * @param {ResumeIM} [body] Updated information of the resume.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesIdPut(id: string, body?: ResumeIM, options?: AxiosRequestConfig): Promise<AxiosResponse<ResumeVM>> {
            return ResumesApiFp(configuration).apiResumesIdPut(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Endpoint for creating a new resume.
         * @param {ResumeIM} [body] Input model for the new resume.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiResumesPost(body?: ResumeIM, options?: AxiosRequestConfig): Promise<AxiosResponse<ResumeVM>> {
            return ResumesApiFp(configuration).apiResumesPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ResumesApi - object-oriented interface
 * @export
 * @class ResumesApi
 * @extends {BaseAPI}
 */
export class ResumesApi extends BaseAPI {
    /**
     * 
     * @summary Endpoint for getting all resumes of the current user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResumesApi
     */
    public async apiResumesGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<ResumeVM>>> {
        return ResumesApiFp(this.configuration).apiResumesGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Endpoint for getting a specific resume by its id.
     * @param {string} id Id of the resume to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResumesApi
     */
    public async apiResumesIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ResumeVM>> {
        return ResumesApiFp(this.configuration).apiResumesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a resume by its id.
     * @param {string} id Id of the resume to update.
     * @param {ResumeIM} [body] Updated information of the resume.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResumesApi
     */
    public async apiResumesIdPut(id: string, body?: ResumeIM, options?: AxiosRequestConfig) : Promise<AxiosResponse<ResumeVM>> {
        return ResumesApiFp(this.configuration).apiResumesIdPut(id, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Endpoint for creating a new resume.
     * @param {ResumeIM} [body] Input model for the new resume.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResumesApi
     */
    public async apiResumesPost(body?: ResumeIM, options?: AxiosRequestConfig) : Promise<AxiosResponse<ResumeVM>> {
        return ResumesApiFp(this.configuration).apiResumesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}