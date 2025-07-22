package mk.com.fraglify.backend.service.application;

import mk.com.fraglify.backend.dto.perfume.CreatePerfumeDto;
import mk.com.fraglify.backend.dto.perfume.DisplayPerfumeDto;

import java.util.List;
import java.util.Optional;

public interface PerfumeApplicationService {

    DisplayPerfumeDto create(CreatePerfumeDto perfume);

    List<DisplayPerfumeDto> getAll();

    DisplayPerfumeDto getById(Long id);

    Optional<DisplayPerfumeDto> update(Long id, CreatePerfumeDto perfume);

    void delete(Long id);

    List<DisplayPerfumeDto> getPerfumesByNote(String note);

}
