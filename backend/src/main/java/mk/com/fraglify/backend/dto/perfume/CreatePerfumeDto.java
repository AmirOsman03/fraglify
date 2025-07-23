package mk.com.fraglify.backend.dto.perfume;

import mk.com.fraglify.backend.models.domain.Perfume;
import mk.com.fraglify.backend.models.enums.PerfumeGender;
import mk.com.fraglify.backend.models.enums.PerfumeType;

import java.util.List;

public record CreatePerfumeDto(
        String name,
        String brand,
        PerfumeType type,
        String description,
        List<String> notes,
        int size,
        int price,
        PerfumeGender gender,
        int quantity,
        boolean isAvailable,
        String imageUrl
) {
    public static CreatePerfumeDto from(Perfume perfume) {
        return new CreatePerfumeDto(
                perfume.getName(),
                perfume.getBrand(),
                perfume.getType(),
                perfume.getDescription(),
                perfume.getNotes(),
                perfume.getSize(),
                perfume.getPrice(),
                perfume.getGender(),
                perfume.getQuantity(),
                perfume.isAvailable(),
                perfume.getImageUrl()
        );
    }

    public Perfume toPerfume() {
        return new Perfume(
                name,
                brand,
                type,
                description,
                notes,
                size,
                price,
                gender,
                quantity,
                isAvailable,
                imageUrl
        );
    }
}
