package mk.com.fraglify.backend.repository;

import mk.com.fraglify.backend.models.domain.Perfume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerfumeRepository extends JpaRepository<Perfume, Long> {

    @Query("SELECT p FROM Perfume p JOIN p.notes n WHERE LOWER(n) = LOWER(:note)")
    List<Perfume> findByNote(@Param("note") String note);

}
