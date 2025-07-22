package mk.com.fraglify.backend.service.application;

import mk.com.fraglify.backend.dto.rating.CreatePerfumeRatingDto;
import mk.com.fraglify.backend.dto.rating.DisplayPerfumeRatingDto;

public interface PerfumeRatingApplicationService {

    DisplayPerfumeRatingDto createRating(Long id, CreatePerfumeRatingDto perfumeRating);

}
