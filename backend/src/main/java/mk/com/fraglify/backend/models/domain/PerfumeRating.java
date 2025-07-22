package mk.com.fraglify.backend.models.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class PerfumeRating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int rating;

    private String comment;

    @ManyToOne
    private Perfume perfume;

    public PerfumeRating(
            int rating,
            String comment,
            Perfume perfume
    ) {
        this.rating = rating;
        this.comment = comment;
        this.perfume = perfume;
    }

}
