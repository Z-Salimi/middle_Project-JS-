import { axiosClient } from "../client";
import { urls } from "../urls";

export async function getBrands() {
    const response = await axiosClient().get(urls.sneaker.brands);
   
    
    return response.data;
}
export async function getSneakers(params) {
    const response = await axiosClient().get(urls.sneaker.list,{params :params});
    return response.data;
}
export async function findSneaker(id) {
    const response = await axiosClient().get(urls.sneaker.find(id))
    return response.data;
}