import React from 'react';
import PerfumeCard from "../PerfumeCard/PerfumeCard.jsx";

const PerfumesGrid = ({perfumes, onUpdate, onDelete}) => {
    return (
        <div className={"grid grid-cols-4 gap-5"}>
            {perfumes.map((perfume) => (
                <div key={perfume.id}>
                    <PerfumeCard
                        perfume={perfume}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
};

export default PerfumesGrid;