package mk.com.fraglify.backend.web.controllers;

import mk.com.fraglify.backend.dto.wishlist.DisplayWishlistDto;
import mk.com.fraglify.backend.service.application.WishlistApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("/addPerfume")
    public ResponseEntity<DisplayWishlistDto> addPerfumeToWishlist(Long perfumeId) {
        return ResponseEntity.ok(wishlistApplicationService.addParfumeToWishlist(1L, perfumeId));
    }

    @PostMapping("/removePerfume")
    public ResponseEntity<DisplayWishlistDto> removePerfumeFromWishlist(Long perfumeId) {
        return ResponseEntity.ok(wishlistApplicationService.removeParfumeFromWishlist(1L, perfumeId));
    }

}
