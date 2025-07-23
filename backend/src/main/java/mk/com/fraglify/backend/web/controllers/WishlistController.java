package mk.com.fraglify.backend.web.controllers;

import mk.com.fraglify.backend.dto.wishlist.DisplayWishlistDto;
import mk.com.fraglify.backend.service.application.WishlistApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistApplicationService wishlistApplicationService;

    public WishlistController(WishlistApplicationService wishlistApplicationService) {
        this.wishlistApplicationService = wishlistApplicationService;
    }

    @GetMapping
    public ResponseEntity<DisplayWishlistDto> getWishlist() {
        return ResponseEntity.ok(wishlistApplicationService.getById(1L));
    }

    @PostMapping("/addPerfume/{perfumeId}")
    public ResponseEntity<DisplayWishlistDto> addPerfumeToWishlist(@PathVariable Long perfumeId) {
        return ResponseEntity.ok(wishlistApplicationService.addParfumeToWishlist(1L, perfumeId));
    }

    @PostMapping("/removePerfume/{perfumeId}")
    public ResponseEntity<DisplayWishlistDto> removePerfumeFromWishlist(@PathVariable Long perfumeId) {
        return ResponseEntity.ok(wishlistApplicationService.removeParfumeFromWishlist(1L, perfumeId));
    }

}
