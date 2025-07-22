package mk.com.fraglify.backend.dto.wishlist;

import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.domain.Wishlist;

import java.util.List;

public record DisplayWishlistDto(
        Long id,
        List<Perfume> perfumes
) {
    public static DisplayWishlistDto from(Wishlist wishlist) {
        return new DisplayWishlistDto(
                wishlist.getId(),
                wishlist.getPerfumes()
        );
    }
}
