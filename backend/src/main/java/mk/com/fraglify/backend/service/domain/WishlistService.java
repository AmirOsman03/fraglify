package mk.com.fraglify.backend.service.domain;

import mk.com.fraglify.backend.models.domain.Wishlist;

public interface WishlistService {

    Wishlist create(Wishlist wishlist);

    Wishlist getById(Long id);

    void deleteById(Long id);

    Wishlist addParfumeToWishlist(Long wishlistId, Long perfumeId);

    Wishlist removeParfumeFromWishlist(Long wishlistId, Long perfumeId);

}
