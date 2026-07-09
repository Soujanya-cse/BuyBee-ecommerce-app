package com.buybee.backend.service;

import com.buybee.backend.model.CartItem;
import com.buybee.backend.model.Product;
import com.buybee.backend.model.User;
import com.buybee.backend.repository.CartItemRepository;
import com.buybee.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;

    public List<CartItem> getCart(User user) {
        return cartItemRepository.findByUser(user);
    }

    public CartItem addToCart(User user, Long productId) {
        Optional<CartItem> existing = cartItemRepository.findByUserAndProductId(user, productId);
        if (existing.isPresent()) {
            CartItem item = existing.get();
            item.setQuantity(item.getQuantity() + 1);
            return cartItemRepository.save(item);
        }

        Product product = productRepository.findById(productId).orElseThrow();
        CartItem item = new CartItem();
        item.setUser(user);
        item.setProduct(product);
        item.setQuantity(1);
        return cartItemRepository.save(item);
    }

    public void removeFromCart(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }
}
