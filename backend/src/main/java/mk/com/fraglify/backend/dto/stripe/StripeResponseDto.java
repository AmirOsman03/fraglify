package mk.com.fraglify.backend.dto.stripe;

public record StripeResponseDto(
        String status,
        String message,
        String sessionId,
        String sessionUrl
) {
}
