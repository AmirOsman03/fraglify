package mk.com.fraglify.backend.web.controllers;

import mk.com.fraglify.backend.dto.perfume.CreatePerfumeDto;
import mk.com.fraglify.backend.dto.perfume.DisplayPerfumeDto;
import mk.com.fraglify.backend.dto.rating.CreatePerfumeRatingDto;
import mk.com.fraglify.backend.dto.rating.DisplayPerfumeRatingDto;
import mk.com.fraglify.backend.service.application.PerfumeApplicationService;
import mk.com.fraglify.backend.service.application.PerfumeRatingApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perfumes")
public class PerfumeController {

    private final PerfumeApplicationService perfumeApplicationService;
    private final PerfumeRatingApplicationService perfumeRatingApplicationService;

    public PerfumeController(PerfumeApplicationService perfumeApplicationService, PerfumeRatingApplicationService perfumeRatingApplicationService) {
        this.perfumeApplicationService = perfumeApplicationService;
        this.perfumeRatingApplicationService = perfumeRatingApplicationService;
    }

    @PostMapping("/create")
    public ResponseEntity<DisplayPerfumeDto> create(@RequestBody CreatePerfumeDto perfume) {
        return ResponseEntity.ok(perfumeApplicationService.create(perfume));
    }

    @GetMapping
    public ResponseEntity<List<DisplayPerfumeDto>> getAll() {
        return ResponseEntity.ok(perfumeApplicationService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayPerfumeDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(perfumeApplicationService.getById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DisplayPerfumeDto> update(
            @PathVariable Long id,
            @RequestBody CreatePerfumeDto perfume
    ) {
        return perfumeApplicationService.update(id, perfume)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        perfumeApplicationService.delete(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/ratings")
    public ResponseEntity<DisplayPerfumeRatingDto> createRating(
            @PathVariable Long id,
            @RequestBody CreatePerfumeRatingDto perfumeRating
    ) {
        return ResponseEntity.ok(perfumeRatingApplicationService.createRating(id, perfumeRating));
    }

    @GetMapping("/filter-by-note")
    public ResponseEntity<List<DisplayPerfumeDto>> getPerfumesByNote(@RequestParam String note) {
        return ResponseEntity.ok(perfumeApplicationService.getPerfumesByNote(note));
    }

}
