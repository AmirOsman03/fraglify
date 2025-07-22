package mk.com.fraglify.backend.repository;

import mk.com.fraglify.backend.models.domain.PerfumeRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfumeRatingRepository extends JpaRepository<PerfumeRating, Long> {

}
