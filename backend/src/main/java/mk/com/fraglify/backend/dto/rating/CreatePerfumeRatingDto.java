package mk.com.fraglify.backend.dto.rating;

import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.domain.PerfumeRating;

public record CreatePerfumeRatingDto(
        int rating,
        String comment
) {
    public static CreatePerfumeRatingDto from(PerfumeRating perfumeRating) {
        return new CreatePerfumeRatingDto(
                perfumeRating.getRating(),
                perfumeRating.getComment()
        );
    }

    public PerfumeRating toPerfumeRating(Perfume perfume) {
        return new PerfumeRating(
                rating,
                comment,
                perfume
        );
    }
}
