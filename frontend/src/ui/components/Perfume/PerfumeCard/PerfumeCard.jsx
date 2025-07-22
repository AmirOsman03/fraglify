import React from 'react';
import {useNavigate} from "react-router";

const formatType = (type) => {
    if (!type) return '';
    return type
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
};

const PerfumeCard = ({perfume}) => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate("/perfumes/" + id);
    }
    if (!perfume) return null;
    return (
        <div
            onClick={() => handleCardClick(perfume.id)}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col">
            <div>
                <img
                    src={perfume.imageUrl}
                    alt={perfume.name || 'Perfume'}
                    className="w-full h-50 object-cover rounded-t-xl"
                />
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="text-sm text-gray-500 mb-1 truncate">{perfume.brand}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{perfume.name}</h3>
                <div className="text-xs text-purple-700 font-medium mb-2">{formatType(perfume.type)}</div>
                <div className="text-base font-bold text-gray-900 mt-1">${perfume.price}</div>
            </div>
        </div>
    );
};

export default PerfumeCard;