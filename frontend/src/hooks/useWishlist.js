import {useCallback, useEffect, useState} from 'react';
import wishlistRepository from "../repository/wishlistRepository.js";

const initialState = {
    wishlist: [],
    loading: true,
}

const UseWishlist = () => {
    const [state, setState] = useState(initialState);

    const fetchWishlist = useCallback(() => {
        setState(initialState);
        wishlistRepository
            .getWishlist()
            .then((response) => {
                setState({
                    wishlist: response.data.perfumes || [],
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);

    const removePerfume = useCallback((perfumeId) => {
        wishlistRepository
            .removePerfumeFromWishlist(perfumeId)
            .then(() => {
                console.log("Perfume removed from wishlist");
                fetchWishlist()
            })
            .catch((error) => {
                console.log(error);
            })
    }, [fetchWishlist])

    const addPerfume = useCallback((perfumeId) => {
        wishlistRepository
            .addPerfumeToWishlist(perfumeId)
            .then(() => {
                console.log("Perfume added to wishlist");
                fetchWishlist();
            })
            .catch((error) => {
                console.log(error);
            })
    }, [fetchWishlist]);

    useEffect(() => {
        fetchWishlist()
    }, [fetchWishlist]);

    return {
        ...state,
        onDelete: removePerfume,
        onAdd: addPerfume,
    }
};

export default UseWishlist;