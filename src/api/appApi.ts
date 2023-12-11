import axiosClient from "./axiosClient";

class appAPI {
    allFoods = () => {
        const url = "/foods"
        return axiosClient.get(url)
    }
    filterFoods = (query: { name: string, page?: number, size?: number, categoryId?: number | undefined, minPrice?: number, maxPrice?: number }) => {
        const url = "/foods"
        return axiosClient.get(url, { params: query })
    }

    allCategories = () => {
        const url = '/categories'
        return axiosClient.get(url)
    }

    signIn = (data: { username: string; password: string }) => {
        const url = "/auth/sign-in";
        return axiosClient.post(url, data);
    };
}

export const appApi = new appAPI();
