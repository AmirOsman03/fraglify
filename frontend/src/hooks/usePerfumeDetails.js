import {useEffect, useState} from "react";
import perfumeRepository from "../repository/perfumeRepository.js";

const initialState = {
    perfume: [],
    loading: true
};

const UsePerfumeDetails = (id) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        perfumeRepository
            .getPerfumeById(id)
            .then((response) => {
                setState({
                    perfume: response.data,
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id])

    return state;
};

export default UsePerfumeDetails;