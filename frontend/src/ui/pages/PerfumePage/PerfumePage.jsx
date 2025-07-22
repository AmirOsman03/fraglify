import React from 'react';
import usePerfumes from "../../../hooks/usePerfumes.js";
import PerfumesGrid from "../../components/Perfume/PerfumesGrid/PerfumesGrid.jsx";

const PerfumePage = () => {
    const {perfumes, loading, onCreate, onUpdate, onDelete, onFilter} = usePerfumes();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    return (
        <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
            <PerfumesGrid
                perfumes={perfumes}
                onCreate={onCreate}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onFilter={onFilter}
            />
        </div>
    );
};

export default PerfumePage;