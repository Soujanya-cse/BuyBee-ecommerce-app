package com.buybee.backend.config;

import com.buybee.backend.model.Product;
import com.buybee.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {
    private final ProductRepository productRepository;

    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {
            Product p1 = new Product();
            p1.setName("Wireless Earbuds Pro");
            p1.setBrand("Sonique");
            p1.setCategory("electronics");
            p1.setDescription("Noise-cancelling earbuds with 30 hours of battery life.");
            p1.setPrice(new BigDecimal("149.99"));
            p1.setDiscount(new BigDecimal("10"));
            p1.setRating(4.7);
            p1.setReviewCount(128);
            p1.setStock(45);
            p1.setImages(List.of("https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=800&q=80"));
            p1.setColors(List.of("Midnight", "Silver"));
            p1.setFeatures(List.of("Active noise cancellation", "Water resistant", "Fast charging"));
            p1.setTags(List.of("trending", "new"));

            Product p2 = new Product();
            p2.setName("Merino Overshirt");
            p2.setBrand("NorthKnit");
            p2.setCategory("fashion");
            p2.setDescription("Soft merino wool overshirt for comfort and style.");
            p2.setPrice(new BigDecimal("89.50"));
            p2.setDiscount(new BigDecimal("15"));
            p2.setRating(4.4);
            p2.setReviewCount(87);
            p2.setStock(20);
            p2.setImages(List.of("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"));
            p2.setColors(List.of("Sage", "Charcoal"));
            p2.setFeatures(List.of("Premium merino", "Relaxed fit", "Breathable"));
            p2.setTags(List.of("best"));

            productRepository.saveAll(List.of(p1, p2));
        }
    }
}
