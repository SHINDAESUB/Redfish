import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse  } from "axios";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {

    if(config.method === 'GET'){
        config.headers = { 'Authorization': `bearer ${sessionStorage.getItem('token')}`}
    }

    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    sessionStorage.setItem('token',response.headers['x-auth-token'] )
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}