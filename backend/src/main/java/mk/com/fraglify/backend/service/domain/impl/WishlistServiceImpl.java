package mk.com.fraglify.backend.service.domain.impl;

import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.domain.Wishlist;
import mk.com.fraglify.backend.repository.PerfumeRepository;
import mk.com.fraglify.backend.repository.WishlistRepository;
import mk.com.fraglify.backend.service.domain.WishlistService;
import org.springframework.stereotype.Service;

@Service
public class WishlistServiceImpl implements WishlistService {

    private final WishlistRepository wishlistRepository;
    private final PerfumeRepository perfumeRepository;

    public WishlistServiceImpl(WishlistRepository wishlistRepository, PerfumeRepository perfumeRepository) {
        this.wishlistRepository = wishlistRepository;
        this.perfumeRepository = perfumeRepository;
    }

    @Override
    public Wishlist create(Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }

    @Override
    public Wishlist getById(Long id) {
        return wishlistRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Wishlist not found"));
    }

    @Override
    public void deleteById(Long id) {
        wishlistRepository.deleteById(id);
    }

    @Override
    public Wishlist addParfumeToWishlist(Long wishlistId, Long perfumeId) {
        Wishlist existingWishlist = wishlistRepository.findById(wishlistId)
                .orElseThrow(() -> new RuntimeException("Wishlist not found"));

        Perfume perfume = perfumeRepository.findById(perfumeId)
                .orElseThrow(() -> new RuntimeException("Perfume not found"));

        perfume.setWishlist(existingWishlist);
        perfumeRepository.save(perfume);

        existingWishlist.getPerfumes().add(perfume);
        return wishlistRepository.save(existingWishlist);
    }

    @Override
    public Wishlist removeParfumeFromWishlist(Long wishlistId, Long perfumeId) {
        Wishlist existingWishlist = wishlistRepository.findById(wishlistId)
                .orElseThrow(() -> new RuntimeException("Wishlist not found"));

        Perfume perfume = perfumeRepository.findById(perfumeId)
                .orElseThrow(() -> new RuntimeException("Perfume not found"));

        perfume.setWishlist(null);
        perfumeRepository.save(perfume);

        existingWishlist.getPerfumes().remove(perfume);
        return wishlistRepository.save(existingWishlist);
    }
}
