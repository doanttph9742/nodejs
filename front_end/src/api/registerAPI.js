import { axiosClient } from './axiosClient';

const registerAPI = {
    getAll(){
        const url = `/register`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/register/${id}`;
        return axiosClient.get(url);
    },
    add(category){
        const url = `/register`;
        return axiosClient.post(url,category);
    },
    remove(id){
        const url = `/register/${id}`;
        return axiosClient.delete(url);
    },

}
export default registerAPI;