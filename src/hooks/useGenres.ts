import useData from "./userData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres;
