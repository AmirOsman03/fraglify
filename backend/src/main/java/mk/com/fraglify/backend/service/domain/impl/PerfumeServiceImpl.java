package mk.com.fraglify.backend.service.domain.impl;

import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.repository.PerfumeRepository;
import mk.com.fraglify.backend.service.domain.PerfumeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerfumeServiceImpl implements PerfumeService {

    private final PerfumeRepository perfumeRepository;

    public PerfumeServiceImpl(PerfumeRepository perfumeRepository) {
        this.perfumeRepository = perfumeRepository;
    }

    @Override
    public Perfume create(Perfume perfume) {
        return perfumeRepository.save(perfume);
    }

    @Override
    public List<Perfume> getAll() {
        return perfumeRepository.findAll();
    }

    @Override
    public Perfume getById(Long id) {
        return perfumeRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    @Override
    public Optional<Perfume> update(Long id, Perfume perfume) {
        return perfumeRepository.findById(id)
                .map((existingPerfume) -> {
                    existingPerfume.setName(perfume.getName());
                    existingPerfume.setBrand(perfume.getBrand());
                    existingPerfume.setType(perfume.getType());
                    existingPerfume.setDescription(perfume.getDescription());
                    existingPerfume.setNotes(perfume.getNotes());
                    existingPerfume.setSize(perfume.getSize());
                    existingPerfume.setPrice(perfume.getPrice());
                    existingPerfume.setGender(perfume.getGender());
                    existingPerfume.setQuantity(perfume.getQuantity());
                    existingPerfume.setAvailable(perfume.isAvailable());
                    existingPerfume.setImageUrl(perfume.getImageUrl());
                    return perfumeRepository.save(existingPerfume);
                });
    }

    @Override
    public void delete(Long id) {
        this.perfumeRepository.deleteById(id);
    }

    @Override
    public List<Perfume> getPerfumesByNote(String note) {
        return perfumeRepository.findByNote(note);

    }

}
