package mk.com.fraglify.backend.dto.perfume;

import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.domain.PerfumeRating;
import mk.com.fraglify.backend.models.enums.PerfumeGender;
import mk.com.fraglify.backend.models.enums.PerfumeType;

import java.util.List;

public record DisplayPerfumeDto(
        Long id,
        String name,
        String brand,
        PerfumeType type,
        String description,
        List<String> notes,
        int size,
        int price,
        PerfumeGender gender,
        boolean isAvailable,
        String imageUrl,
        double averageRating
) {
    public static DisplayPerfumeDto from(Perfume perfume) {

        return new DisplayPerfumeDto(
                perfume.getId(),
                perfume.getName(),
                perfume.getBrand(),
                perfume.getType(),
                perfume.getDescription(),
                perfume.getNotes(),
                perfume.getSize(),
                perfume.getPrice(),
                perfume.getGender(),
                perfume.isAvailable(),
                perfume.getImageUrl(),
                perfume.getRatings() == null || perfume.getRatings().isEmpty()
                        ? 0
                        : perfume.getRatings().stream()
                        .mapToInt(PerfumeRating::getRating)
                        .average()
                        .orElse(0)
        );
    }

    public static List<DisplayPerfumeDto> from(List<Perfume> perfumes) {
        return perfumes.stream().map(DisplayPerfumeDto::from).toList();
    }
}
