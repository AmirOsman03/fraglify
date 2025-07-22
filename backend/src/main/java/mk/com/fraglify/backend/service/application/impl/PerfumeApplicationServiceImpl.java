package mk.com.fraglify.backend.service.application.impl;

import mk.com.fraglify.backend.dto.perfume.CreatePerfumeDto;
import mk.com.fraglify.backend.dto.perfume.DisplayPerfumeDto;
import mk.com.fraglify.backend.service.application.PerfumeApplicationService;
import mk.com.fraglify.backend.service.domain.PerfumeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerfumeApplicationServiceImpl implements PerfumeApplicationService {

    private final PerfumeService perfumeService;

    public PerfumeApplicationServiceImpl(PerfumeService perfumeService) {
        this.perfumeService = perfumeService;
    }

    @Override
    public DisplayPerfumeDto create(CreatePerfumeDto perfume) {
        return DisplayPerfumeDto.from(perfumeService.create(perfume.toPerfume()));
    }

    @Override
    public List<DisplayPerfumeDto> getAll() {
        return DisplayPerfumeDto.from(perfumeService.getAll());
    }

    @Override
    public DisplayPerfumeDto getById(Long id) {
        return DisplayPerfumeDto.from(perfumeService.getById(id));
    }

    @Override
    public Optional<DisplayPerfumeDto> update(Long id, CreatePerfumeDto perfume) {
        return perfumeService.update(id, perfume.toPerfume())
                .map(DisplayPerfumeDto::from);
    }

    @Override
    public void delete(Long id) {
        perfumeService.delete(id);
    }

    @Override
    public List<DisplayPerfumeDto> getPerfumesByNote(String note) {
        return DisplayPerfumeDto.from(perfumeService.getPerfumesByNote(note));
    }

}
