import axios, {AxiosRequestConfig} from "axios";
export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'be88cba5013c42f599c3d1873bf0d2b3'
    }
})

class APIClient<T> {
    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getALl = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id)
            .then(res => res.data)
    }
}
export default APIClient;