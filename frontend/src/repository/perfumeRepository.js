import axiosInstance from "../axios/axios.js";

const perfumeRepository = {
    createPerfume: async (data) => {
        return axiosInstance.post("/perfumes/create", data);
    },
    getAllPerfumes: async () => {
        return await axiosInstance.get("/perfumes");
    },
    updatePerfume: async (id, data) => {
        return axiosInstance.put(`/perfumes/update/${id}`, data);
    },
    deletePerfume: async (id) => {
        return await axiosInstance.delete(`/perfumes/delete/${id}`);
    },
    getPerfumeById: async (id) => {
        return await axiosInstance.get(`/perfumes/${id}`);
    },
    filterByNote: async (note) => {
        return await axiosInstance.get(`/perfumes/filter-by-note?note=${note}`);
    },
};

export default perfumeRepository;