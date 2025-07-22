package mk.com.fraglify.backend.service.domain;

import mk.com.fraglify.backend.models.domain.Perfume;

import java.util.List;
import java.util.Optional;

public interface PerfumeService {

    Perfume create(Perfume perfume);

    List<Perfume> getAll();

    Perfume getById(Long id);

    Optional<Perfume> update(Long id, Perfume perfume);

    void delete(Long id);

    List<Perfume> getPerfumesByNote(String note);

}
