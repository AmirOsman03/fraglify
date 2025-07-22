package mk.com.fraglify.backend.dto.stripe;

public record StripeRequestDto(
        Long id,
        Long quantity,
        String name,
        String currency
) {
}
