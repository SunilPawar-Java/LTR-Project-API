import api from "./api.js";

export const getAllProducts = () => {
    return api.get("/product/all");
}

export const getProductById =  (id) => {
    return api.get(`/product/get/${id}`);
}