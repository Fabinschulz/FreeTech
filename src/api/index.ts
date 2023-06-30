import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import * as Qs from 'qs';
import { env } from '@/config';

let instance: AxiosInstance | null = null;

const createAxiosInstance = async () => {
    const axiosParams: AxiosRequestConfig = {
        baseURL: env.BASE_API_URL,
        responseType: 'json' as const,
        paramsSerializer: (params: any) => Qs.stringify(params, { arrayFormat: 'repeat' })
    };

    return axios.create(axiosParams);
};

const getAxiosInstance = async () => {
    if (!instance) {
        instance = await createAxiosInstance();
    }

    return instance;
};

const axiosApi = {
    get: <T>(url: string, config?: AxiosRequestConfig) => {
        return getAxiosInstance().then((instance) => instance.get<T>(url, config));
    },
    post: <T>(url: string, body: unknown, config?: AxiosRequestConfig) => {
        return getAxiosInstance().then((instance) => instance.post<T>(url, body, config));
    },
    put: <T>(url: string, body: unknown, config?: AxiosRequestConfig) => {
        return getAxiosInstance().then((instance) => instance.put<T>(url, body, config));
    },
    delete: <T>(url: string, config?: AxiosRequestConfig) => {
        return getAxiosInstance().then((instance) => instance.delete<T>(url, config));
    }
};

export default axiosApi;
