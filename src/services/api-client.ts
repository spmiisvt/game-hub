import axios from "axios";
export interface FetchResponse<T> {
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'be88cba5013c42f599c3d1873bf0d2b3'
    }
})