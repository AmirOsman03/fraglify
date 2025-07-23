package mk.com.fraglify.backend.models.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.com.fraglify.backend.models.enums.PerfumeGender;
import mk.com.fraglify.backend.models.enums.PerfumeType;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Perfume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String brand;

    @Enumerated(EnumType.STRING)
    private PerfumeType type;

    private String description;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<String> notes;

    private int size;

    private int price;

    @Enumerated(EnumType.STRING)
    private PerfumeGender gender;

    private int quantity;

    private boolean isAvailable;

    private String imageUrl;

    // Because it makes an infinite loop after each creation of perfume
    @JsonIgnore
    @ManyToOne
    private Wishlist wishlist;

    @OneToMany(mappedBy = "perfume", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    List<PerfumeRating> ratings;

    public Perfume (
            String name,
            String brand,
            PerfumeType type,
            String description,
            List<String> notes,
            int size,
            int price,
            PerfumeGender gender,
            int quantity,
            boolean isAvailable,
            String imageUrl
    ) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.description = description;
        this.notes = notes;
        this.size = size;
        this.price = price;
        this.gender = gender;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
        this.imageUrl = imageUrl;
    }
}
