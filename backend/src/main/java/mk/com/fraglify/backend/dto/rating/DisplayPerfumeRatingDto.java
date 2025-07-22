package mk.com.fraglify.backend.dto.rating;

import mk.com.fraglify.backend.models.domain.PerfumeRating;

public record DisplayPerfumeRatingDto(
        int rating,
        String comment
) {
    public static DisplayPerfumeRatingDto from(PerfumeRating rating) {
        return new DisplayPerfumeRatingDto(
                rating.getRating(),
                rating.getComment()
        );
    }
}
