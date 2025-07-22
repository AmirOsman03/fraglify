package mk.com.fraglify.backend.service.application;

import com.stripe.exception.StripeException;
import mk.com.fraglify.backend.dto.stripe.StripeRequestDto;
import mk.com.fraglify.backend.dto.stripe.StripeResponseDto;

public interface StripeService {

    StripeResponseDto createStripeSession(StripeRequestDto requestDto) throws StripeException;

}
