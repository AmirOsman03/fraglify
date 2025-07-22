package mk.com.fraglify.backend.web.controllers;

import com.stripe.exception.StripeException;
import mk.com.fraglify.backend.dto.stripe.StripeRequestDto;
import mk.com.fraglify.backend.dto.stripe.StripeResponseDto;
import mk.com.fraglify.backend.service.application.StripeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stripe")
public class StripeController {

    private final StripeService stripeService;

    public StripeController(StripeService stripeService) {
        this.stripeService = stripeService;
    }

    @PostMapping("/create-checkout")
    public ResponseEntity<StripeResponseDto> createCheckoutSession(@RequestBody StripeRequestDto requestDto) {
        try {
            StripeResponseDto response = stripeService.createStripeSession(requestDto);
            return ResponseEntity.ok(response);
        } catch (StripeException e) {
            return ResponseEntity.status(500).body(new StripeResponseDto(
                    "error",
                    e.getMessage(),
                    null,
                    null
            ));
        }
    }

}
