import React from 'react';

const WishlistModal = ({open, onClose, wishlist = []}) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end mt-5 me-2 rounded-3xl">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[500px] text-center relative">
                <h2 className="text-xl font-bold mb-4">Wishlist</h2>
                {wishlist.length === 0 ? (
                    <div className="text-gray-500 mb-4">Your wishlist is empty.</div>
                ) : (
                    <ul className="mb-4 max-h-64 overflow-y-auto text-left divide-y divide-gray-100">
                        {wishlist.map((perfume) => (
                            <li key={perfume.id} className="flex items-center gap-3 py-2">
                                {perfume.imageUrl && (
                                    <img src={perfume.imageUrl} alt={perfume.name} className="w-10 h-10 object-cover rounded" />
                                )}
                                <div>
                                    <div className="font-semibold text-gray-800">{perfume.name}</div>
                                    <div className="text-xs text-gray-500">{perfume.brand}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    onClick={onClose}
                    className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    Close
                </button>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default WishlistModal;