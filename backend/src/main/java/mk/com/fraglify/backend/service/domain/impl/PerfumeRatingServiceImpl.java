package mk.com.fraglify.backend.service.domain.impl;

import mk.com.fraglify.backend.models.domain.PerfumeRating;
import mk.com.fraglify.backend.repository.PerfumeRatingRepository;
import mk.com.fraglify.backend.service.domain.PerfumeRatingService;
import org.springframework.stereotype.Service;

@Service
public class PerfumeRatingServiceImpl implements PerfumeRatingService {

    private final PerfumeRatingRepository perfumeRatingRepository;

    public PerfumeRatingServiceImpl(PerfumeRatingRepository perfumeRatingRepository) {
        this.perfumeRatingRepository = perfumeRatingRepository;
    }

    @Override
    public PerfumeRating createRating(PerfumeRating perfumeRating) {
        return perfumeRatingRepository.save(perfumeRating);
    }

}
