package mk.com.fraglify.backend.service.application.impl;

import mk.com.fraglify.backend.dto.wishlist.DisplayWishlistDto;
import mk.com.fraglify.backend.models.domain.Wishlist;
import mk.com.fraglify.backend.service.application.WishlistApplicationService;
import mk.com.fraglify.backend.service.domain.WishlistService;
import org.springframework.stereotype.Service;

@Service
public class WishlistApplicationServiceImpl implements WishlistApplicationService {

    private final WishlistService wishlistService;

    public WishlistApplicationServiceImpl(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @Override
    public DisplayWishlistDto create(Wishlist wishlist) {
        return DisplayWishlistDto.from(wishlistService.create(wishlist));
    }

    @Override
    public DisplayWishlistDto getById(Long id) {
        return DisplayWishlistDto.from(wishlistService.getById(id));
    }

    @Override
    public void deleteById(Long id) {
        wishlistService.deleteById(id);
    }

    @Override
    public DisplayWishlistDto addParfumeToWishlist(Long wishlistId, Long perfumeId) {
        return DisplayWishlistDto.from(wishlistService.addParfumeToWishlist(wishlistId, perfumeId));
    }

    @Override
    public DisplayWishlistDto removeParfumeFromWishlist(Long wishlistId, Long perfumeId) {
        return DisplayWishlistDto.from(wishlistService.removeParfumeFromWishlist(wishlistId, perfumeId));
    }
}
