import axiosInstance from "../axios/axios.js";

const wishListRepository = {
    addPerfumeToWishlist: async (perfumeId) => {
        return await axiosInstance.post(`/wishlist/addPerfume/${perfumeId}`);
    },
    removePerfumeFromWishlist: async (perfumeId) => {
        return await axiosInstance.post(`/wishlist/removePerfume/${perfumeId}`);
    },
    getWishlist: async () => {
        return await axiosInstance.get(`/wishlist`);
    }
};

export default wishListRepository;