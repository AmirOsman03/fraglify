package mk.com.fraglify.backend.service.application.impl;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import mk.com.fraglify.backend.dto.stripe.StripeRequestDto;
import mk.com.fraglify.backend.dto.stripe.StripeResponseDto;
import mk.com.fraglify.backend.service.application.StripeService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeServiceImpl implements StripeService {

    @Value("${stripe.secret.key}")
    private String stripeSecretKey;

    @Override
    public StripeResponseDto createStripeSession(StripeRequestDto requestDto) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/success")
                .setCancelUrl("http://localhost:3000/cancel")
                .addLineItem(
                        SessionCreateParams.LineItem.builder()
                                .setQuantity(requestDto.quantity())
                                .setPriceData(
                                        SessionCreateParams.LineItem.PriceData.builder()
                                                .setCurrency(requestDto.currency())
                                                .setUnitAmount(requestDto.id())
                                                .setProductData(
                                                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                .setName(requestDto.name())
                                                                .build()
                                                ).setUnitAmount(1000L).build()
                                ).build()
                ).build();
        Session session = Session.create(params);

        return new StripeResponseDto(
                "success",
                "Stripe session created",
                session.getId(),
                session.getUrl()
        );
    }
}
