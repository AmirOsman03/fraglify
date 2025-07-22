package mk.com.fraglify.backend.config.init;

import jakarta.annotation.PostConstruct;
import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.domain.Wishlist;
import mk.com.fraglify.backend.models.enums.PerfumeGender;
import mk.com.fraglify.backend.models.enums.PerfumeType;
import mk.com.fraglify.backend.repository.PerfumeRepository;
import mk.com.fraglify.backend.repository.WishlistRepository;
import mk.com.fraglify.backend.service.domain.WishlistService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer {

    private final PerfumeRepository perfumeRepository;
    private final WishlistService wishlistService;

    public DataInitializer(PerfumeRepository perfumeRepository, WishlistService wishlistService) {
        this.perfumeRepository = perfumeRepository;
        this.wishlistService = wishlistService;
    }

//    @PostConstruct
    private void init() {
        Wishlist wishlist = wishlistService.create(new Wishlist());

        Perfume p1 = new Perfume(
                "Euphoria",
                "Calvin Klein",
                PerfumeType.EAU_DE_PARFUM,
                "A sensual and mysterious scent",
                List.of("kiwi", "black orchid", "amber"),
                50,
                75,
                PerfumeGender.FEMALE,
                true,
                "https://pvh-brands.imgix.net/catalog/product/media/99350070_995_FL-AS-F1_014.jpg?w=&h=&crop=top&fit=crop&auto=compress&auto=format"
        );

        Perfume p2 = new Perfume(
                "Acqua Di Gio",
                "Giorgio Armani",
                PerfumeType.EAU_DE_TOILETTE,
                "A fresh and marine fragrance",
                List.of("bergamot", "jasmine", "marine wood"),
                100,
                85,
                PerfumeGender.MALE,
                true,
                "https://moustaphalabban.com/cdn/shop/files/3614273953832_1b6e3274-6862-4e84-ac27-2513d61e4607.jpg?v=1736684743"
        );

        Perfume p3 = new Perfume(
                "Light Blue",
                "Dolce & Gabbana",
                PerfumeType.EAU_DE_TOILETTE,
                "A fresh and floral scent",
                List.of("apple", "cherry", "sandalwood"),
                50,
                65,
                PerfumeGender.FEMALE,
                true,
                "https://urbanshop.pk/wp-content/uploads/2023/05/Untitled-design-28-500x500.png"
        );

        Perfume p4 = new Perfume(
                "Bleu de Chanel",
                "Chanel",
                PerfumeType.EAU_DE_PARFUM,
                "A dynamic and modern scent",
                List.of("grapefruit", "cedar", "cedarwood"),
                100,
                90,
                PerfumeGender.MALE,
                true,
                "https://fragrance.mk/wp-content/uploads/2022/01/chanel-bleu-de-chanel-edt-1.jpg"
        );

        Perfume p5 = new Perfume(
                "Flowerbomb",
                "Viktor & Rolf",
                PerfumeType.EAU_DE_PARFUM,
                "An intense and floral fragrance",
                List.of("rose", "jasmine", "patchouli"),
                30,
                80,
                PerfumeGender.FEMALE,
                true,
                "https://cdn.basler-beauty.de/out/pictures/generated/product/1/1200_1200_100/2621428-Viktor-Rolf-Flowerbomb-Tiger-Lily-Eau-de-Parfum-50-ml.5657877a.jpg"
        );
        perfumeRepository.save(p1);
        perfumeRepository.save(p2);
        perfumeRepository.save(p3);
        perfumeRepository.save(p4);
        perfumeRepository.save(p5);

    }

}
