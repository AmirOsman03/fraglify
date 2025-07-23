package mk.com.fraglify.backend.config.init;

import jakarta.annotation.PostConstruct;
import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.domain.Wishlist;
import mk.com.fraglify.backend.models.enums.PerfumeGender;
import mk.com.fraglify.backend.models.enums.PerfumeType;
import mk.com.fraglify.backend.repository.PerfumeRepository;
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
                10,
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
                5,
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
                7,
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
                3,
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
                2,
                true,
                "https://cdn.basler-beauty.de/out/pictures/generated/product/1/1200_1200_100/2621428-Viktor-Rolf-Flowerbomb-Tiger-Lily-Eau-de-Parfum-50-ml.5657877a.jpg"
        );

        Perfume p6 = new Perfume(
                "Dior Sauvage",
                "Dior",
                PerfumeType.EAU_DE_TOILETTE,
                "A bold and spicy fragrance",
                List.of("pepper", "bergamot", "ambroxan"),
                100,
                95,
                PerfumeGender.MALE,
                8,
                true,
                "https://epocacosmeticos.vteximg.com.br/arquivos/ids/672640-800-800/sauvage-parfum-dior-perfume-masculino-20-7-.jpg.jpg?v=638633240041070000"
        );

        Perfume p7 = new Perfume(
                "La Vie Est Belle",
                "Lancôme",
                PerfumeType.EAU_DE_PARFUM,
                "A sweet and floral fragrance",
                List.of("iris", "patchouli", "gourmand"),
                75,
                85,
                PerfumeGender.FEMALE,
                6,
                true,
                "https://cdn.sistemawbuy.com.br/arquivos/feb5eb39b3a2004abcc3bcd79041ba64/produtos/64a6097dd7b4f/20230705212330-64a6098265b0d.jpg"
        );

        Perfume p8 = new Perfume(
                "Y",
                "Yves Saint Laurent",
                PerfumeType.EAU_DE_PARFUM,
                "A woody and aromatic scent",
                List.of("sage", "geranium", "cedarwood"),
                60,
                78,
                PerfumeGender.MALE,
                4,
                true,
                "https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/11866960-1795232857762592.jpg&format=webp&auto=avif&width=985&height=985&fit=cover"
        );

        Perfume p9 = new Perfume(
                "J'adore",
                "Dior",
                PerfumeType.EAU_DE_PARFUM,
                "A luminous floral bouquet",
                List.of("ylang-ylang", "damask rose", "jasmine"),
                50,
                90,
                PerfumeGender.FEMALE,
                9,
                true,
                "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw50eba8ff/Y0615246/Y0615246_F361524609_E01_GHC.jpg?sw=1850&sh=1850"
        );

        Perfume p10 = new Perfume(
                "Invictus",
                "Paco Rabanne",
                PerfumeType.EAU_DE_TOILETTE,
                "A fresh and sporty scent",
                List.of("marine accord", "grapefruit", "guaiac wood"),
                100,
                88,
                PerfumeGender.MALE,
                6,
                true,
                "https://fimgs.net/mdimg/perfume-thumbs/375x500.90433.jpg"
        );

        Perfume p11 = new Perfume(
                "Good Girl",
                "Carolina Herrera",
                PerfumeType.EAU_DE_PARFUM,
                "A daring blend of dark and light elements",
                List.of("tuberose", "jasmine", "tonka bean"),
                80,
                92,
                PerfumeGender.FEMALE,
                5,
                true,
                "https://cdn.notinoimg.com/detail_main_lq/carolina-herrera/8411061818961_01-o/good-girl___210901.jpg"
        );

        Perfume p12 = new Perfume(
                "1 Million",
                "Paco Rabanne",
                PerfumeType.EAU_DE_TOILETTE,
                "A spicy leather fragrance",
                List.of("cinnamon", "rose", "leather"),
                100,
                89,
                PerfumeGender.MALE,
                3,
                true,
                "https://fragrance.mk/wp-content/uploads/2023/09/paco-rabanne-1-million-parfum-1.webp"
        );

        Perfume p13 = new Perfume(
                "Black Opium",
                "Yves Saint Laurent",
                PerfumeType.EAU_DE_PARFUM,
                "A vibrant and addictive fragrance",
                List.of("coffee", "vanilla", "white flowers"),
                50,
                87,
                PerfumeGender.FEMALE,
                7,
                true,
                "https://e-elixir.mk/wp-content/uploads/2016/02/black-opium.jpg"
        );

        Perfume p14 = new Perfume(
                "CK One",
                "Calvin Klein",
                PerfumeType.EAU_DE_TOILETTE,
                "A clean and universal scent",
                List.of("pineapple", "green tea", "musk"),
                100,
                70,
                PerfumeGender.UNISEX,
                12,
                true,
                "https://fragrance.mk/wp-content/uploads/2021/02/calvin-klein-ck-one-edt-1.jpg"
        );

        Perfume p15 = new Perfume(
                "Versace Eros",
                "Versace",
                PerfumeType.EAU_DE_PARFUM,
                "A bold, passionate fragrance",
                List.of("mint", "green apple", "tonka bean"),
                100,
                86,
                PerfumeGender.MALE,
                4,
                true,
                "https://i5.walmartimages.com/seo/Versace-Eros-Eau-de-Parfum-Cologne-for-Men-6-7-oz_d66b3353-ded1-4a61-ab76-ef1487fad52a.8352049f9fd1bee3f904e7e71c411bc8.jpeg"
        );

        perfumeRepository.saveAll(List.of(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15));
    }

}
