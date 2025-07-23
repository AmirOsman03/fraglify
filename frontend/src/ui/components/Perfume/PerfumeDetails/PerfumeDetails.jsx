import React, {useState} from 'react';
import usePerfumeDetails from '../../../../hooks/usePerfumeDetails.js';
import {useParams} from 'react-router';
import useWishlist from "../../../../hooks/useWishlist.js";
import WishlistModal from "../../Wishlist/WishlistModal/WishlistModal.jsx";

const noteImages = {
    Bergamot: 'https://t3.ftcdn.net/jpg/08/27/71/00/360_F_827710062_QlRkI05PTtXzLPy4cY3xHIcGkE9Saeps.jpg',
    Marine_wood: 'https://media.istockphoto.com/id/1312307362/photo/culinary-border-of-rosemary-salt-pepper-and-oil.jpg?s=612x612&w=0&k=20&c=EijUZMMofisUyhpiigozGbMKZMJXT55y11VcpiVcJnI=',
    Vanilla: 'https://www.synergytaste.com/wp-content/uploads/sites/2/2021/10/Vanilla-3-WP.jpg',
    Sandalwood: 'https://www.learnreligions.com/thmb/b8243JXdomaCb5lYbb5rPsetLt0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/powdered-and-whole-sandalwood-90258078-578cfaba5f9b584d20db4620.jpg',
    Jasmine: 'https://www.shutterstock.com/image-photo/white-jasmine-isolated-on-black-600nw-204401845.jpg',
    Oud: 'https://oudimentary.com/cdn/shop/articles/oud_wood_full_554x.png?v=1741822704',
    Mint: 'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/06/mint-good-GettyImages-2216675819-Header-1024x575.jpg',
    Lemon: 'https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg?cs=srgb&dl=pexels-goumbik-952360.jpg&fm=jpg',
    Patchouli: 'https://s.maison21g.com/media/images/patchouli-black-bg-032425/patchouli-black-bg-032425.jpg',
    Rose: 'https://images.pexels.com/photos/9951169/pexels-photo-9951169.jpeg',
    Cherry: 'https://i.pinimg.com/736x/b5/ce/29/b5ce292706ec76ae17b355178f5f0198.jpg',
    Apple: 'https://foodfulife.com/wp-content/uploads/2015/09/dsc_05311.jpg?w=584',
    Grapefruit: 'https://img.artpal.com/203822/41-21-12-10-5-12-19m.jpg',
    Cedar: 'https://static.vecteezy.com/system/resources/thumbnails/035/380/011/small/ai-generated-swiss-fir-christmas-tree-isolated-on-dark-background-christmas-tree-free-photo.jpg',
    Cedarwood: 'https://t4.ftcdn.net/jpg/03/87/30/55/360_F_387305523_IQikVzczY94NmuCKqEIMS4foH8FPXYif.jpg',
    Kiwi: 'https://c1.wallpaperflare.com/preview/1017/908/868/green-kiwi-fruit-black.jpg',
    Black_orchid: 'https://www.shutterstock.com/image-photo/phalaenopsis-orchid-black-angel-on-600nw-2392398281.jpg',
    Amber: 'https://st4.depositphotos.com/36959558/38400/i/450/depositphotos_384002918-stock-photo-transparent-amber-sand-dark-background.jpg',
    Marine_accord: 'https://static.wixstatic.com/media/nsplsh_6852656d6368305a447749~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_858,h_584,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_6852656d6368305a447749~mv2_d_4896_3264_s_4_2.jpg',
    Guaiac_wood: 'https://www.perfumestars.com/wp-content/uploads/2024/08/guaiac-wood-in-fragrances.webp',
    Sage: 'https://kellogggarden.com/wp-content/uploads/2021/02/Grow-Sage.jpg',
    Geranium: 'https://all-americaselections.org/wp-content/uploads/2016/11/GeraniumCalliopeMDarkRed3.jpg',
    Damask_rose: 'https://rosehomegarden.com/wp-content/uploads/2024/01/La-Ville-de-Bruxelles-rose-jpg.webp',
    Pepper: 'https://www.shutterstock.com/image-photo/red-bell-pepper-isolated-against-600nw-2247973041.jpg',
    Ambroxan: 'https://cdn.kaochemicals-eu.com/common/project/images/xambroxan-small-opt.jpg.pagespeed.ic.ILNEEgNd5t.jpg',
    Tonka_bean: 'https://www.alyssaashley.com/cdn/shop/articles/Tonka_Beans.jpg?v=1597322763&width=3504',
    Tuberose: 'https://www.dutchgrown.com/cdn/shop/articles/Tuberose.jpg?v=1671195538',
    Cinnamon: 'https://spices.com/cdn/shop/products/2aafc516a293cb71e5a78ee6685082ae9869ab3ca60f83401a4d4d54806f157b_5a4f342d-dd26-4ad1-949a-e9abba003c55.jpg?v=1654795859&width=1445',
    Leather: 'https://hidepark.co.uk/cdn/shop/articles/noah-kroes-9Iju1D_znUw-unsplash_840x_crop_center.jpg?v=1661268388',
    Coffee: 'https://www.barniescoffee.com/cdn/shop/articles/beans-brew-caffeine-coffee-2059_1.jpg?v=1660683860',
    White_flowers: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1183074816-649c5cb4c4d8e.jpg?crop=0.447xw:1.00xh;0.318xw,0&resize=980:*',
    Green_tea: 'https://img.forestessentialsindia.com/blog/wp-content/uploads/2020/02/Green-tea.png',
    Pineapple: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7SxOWYbcQgZG35EOPOKfLRL_GoY_F-QwFA&s',
    Musk: 'https://aromaticscentslab.com/wp-content/uploads/2022/07/musk-scaled.jpg',
    Green_apple: 'https://i5.walmartimages.com/seo/Fresh-Granny-Smith-Apple-Each_bf2ec88a-2f36-41f2-93d3-c3161772733d_1.cdc913433c6acc6bf9201dc1fa86bac9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    Iris: 'https://cdn.britannica.com/19/235419-050-9DF1D2AF/Purple-iris-flower-plant.jpg',
    Gourmand: 'https://www.luxsb.com/sites/default/files/Gourmand.jpeg'
};

const normalize = str =>
    str && str.toLowerCase().replace(/[\s_]+/g, '_');

const getNoteImage = (note) => {
    if (!note) return 'https://via.placeholder.com/80x80?text=Note';
    const normalizedNote = normalize(note);
    const found = Object.keys(noteImages).find(
        key => normalize(key) === normalizedNote
    );
    return found ? noteImages[found] : 'https://via.placeholder.com/80x80?text=Note';
};

const PerfumeDetails = () => {
    const {id} = useParams();
    const {perfume, loading} = usePerfumeDetails(id);
    const { onAdd, wishlist } = useWishlist();
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddToCart = () => {
        if (perfume && perfume.id) {
            onAdd(perfume.id);
            setModalOpen(true);
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (!perfume) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-gray-500 text-lg">
                Perfume not found.
            </div>
        );
    }

    return (
        <main
            className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex flex-col items-center py-12 px-4">
            {/* Name and Brand */}
            <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-1">{perfume.brand}</div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">{perfume.name}</h1>
                {perfume.type && (
                    <div
                        className="inline-block px-4 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-2">
                        {perfume.type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                    </div>
                )}
            </div>

            {/* Perfume Image */}
            <div className="flex justify-center mb-8 w-full">
                <div
                    className="w-max h-120 bg-white rounded-xl shadow-2xl flex items-center justify-center overflow-hidden border-4 border-purple-200">
                    <img
                        src={perfume.imageUrl}
                        alt={perfume.name || 'Perfume'}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Notes as Circles with Images */}
            {perfume.notes && (
                <div className="mb-10 w-full max-w-2xl">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Notes</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {(Array.isArray(perfume.notes) ? perfume.notes : [perfume.notes]).map((note, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div
                                    className="w-30 h-30 rounded-full bg-white shadow-lg border-2 border-blue-200 flex items-center justify-center overflow-hidden mb-2">
                                    <img
                                        src={getNoteImage(note)}
                                        alt={note}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <span className="text-xs font-medium text-blue-800 text-center capitalize">{note}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Description and Price */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                {perfume.description && (
                    <div className="mb-4 w-full text-center">
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{perfume.description}</p>
                    </div>
                )}

                <div className="flex justify-center items-center w-full mb-4">
                    <div className="text-2xl font-bold text-purple-700">${perfume.price}</div>
                </div>

                <div className="flex items-center justify-center w-full  gap-4 mt-4">
                    <input
                        type="number"
                        min="1"
                        max={perfume.quantity}
                        defaultValue="1"
                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="text-sm font-medium text-gray-600">
                        {perfume.quantity} left
                    </div>
                    <button
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100 rounded-lg border border-gray-300"
                        onClick={handleAddToCart}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                            <path
                                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
            <WishlistModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                wishlist={wishlist}
            />
        </main>
    );
};

export default PerfumeDetails;