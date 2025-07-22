import {useCallback, useEffect, useState} from 'react';
import perfumeRepository from "../repository/perfumeRepository.js";

const initialState = {
    perfumes: [],
    loading: true
};

const usePerfumes = () => {
    const [state, setState] = useState(initialState);

    const fetchPerfumes = useCallback(() => {
        setState(initialState);
        perfumeRepository
            .getAllPerfumes()
            .then((response) => {
                setState({
                    perfumes: response.data,
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const createPerfume = useCallback((data) => {
        perfumeRepository
            .createPerfume(data)
            .then(() => {
                console.log("Perfume created");
                fetchPerfumes();
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchPerfumes])

    const updatePerfume = useCallback((id, data) => {
        perfumeRepository
            .updatePerfume(id, data)
            .then(() => {
                console.log("Perfume updated");
                fetchPerfumes()
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchPerfumes])

    const deletePerfume = useCallback((id) => {
        perfumeRepository
            .deletePerfume(id)
            .then(() => {
                console.log("Perfume deleted");
                fetchPerfumes()
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fetchPerfumes])

    const filterByNote = useCallback((note) => {
        perfumeRepository
            .filterByNote(note)
            .then((response) => {
                setState({
                    perfumes: response.data,
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        fetchPerfumes()
    }, [fetchPerfumes]);

    return {
        ...state,
        onCreate: createPerfume,
        onUpdate: updatePerfume,
        onDelete: deletePerfume,
        onFilter: filterByNote,
    }
};

export default usePerfumes;