package mk.com.fraglify.backend.service.application;

import mk.com.fraglify.backend.dto.wishlist.DisplayWishlistDto;
import mk.com.fraglify.backend.models.domain.Wishlist;

public interface WishlistApplicationService {

    DisplayWishlistDto create(Wishlist wishlist);

    DisplayWishlistDto getById(Long id);

    void deleteById(Long id);

    DisplayWishlistDto addParfumeToWishlist(Long wishlistId, Long perfumeId);

    DisplayWishlistDto removeParfumeFromWishlist(Long wishlistId, Long perfumeId);

}
