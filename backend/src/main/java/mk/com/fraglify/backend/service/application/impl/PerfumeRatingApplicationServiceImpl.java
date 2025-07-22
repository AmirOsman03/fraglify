package mk.com.fraglify.backend.service.application.impl;

import mk.com.fraglify.backend.dto.rating.CreatePerfumeRatingDto;
import mk.com.fraglify.backend.dto.rating.DisplayPerfumeRatingDto;
import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.service.application.PerfumeRatingApplicationService;
import mk.com.fraglify.backend.service.domain.PerfumeRatingService;
import mk.com.fraglify.backend.service.domain.PerfumeService;
import org.springframework.stereotype.Service;

@Service
public class PerfumeRatingApplicationServiceImpl implements PerfumeRatingApplicationService {

    private final PerfumeService perfumeService;
    private final PerfumeRatingService perfumeRatingService;

    public PerfumeRatingApplicationServiceImpl(PerfumeService perfumeService, PerfumeRatingService perfumeRatingService) {
        this.perfumeService = perfumeService;
        this.perfumeRatingService = perfumeRatingService;
    }

    @Override
    public DisplayPerfumeRatingDto createRating(Long id, CreatePerfumeRatingDto perfumeRating) {
        Perfume perfume = perfumeService.getById(id);
        return DisplayPerfumeRatingDto.from(perfumeRatingService.createRating(perfumeRating.toPerfumeRating(perfume)));
    }
}
