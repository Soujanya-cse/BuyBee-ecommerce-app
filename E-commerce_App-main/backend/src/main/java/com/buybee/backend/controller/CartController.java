package com.buybee.backend.controller;

import com.buybee.backend.model.CartItem;
import com.buybee.backend.model.User;
import com.buybee.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @GetMapping("/{userId}")
    public List<CartItem> getCart(@PathVariable Long userId) {
        User user = new User();
        user.setId(userId);
        return cartService.getCart(user);
    }

    @PostMapping("/{userId}/add/{productId}")
    public CartItem addToCart(@PathVariable Long userId, @PathVariable Long productId) {
        User user = new User();
        user.setId(userId);
        return cartService.addToCart(user, productId);
    }

    @DeleteMapping("/{cartItemId}")
    public void removeFromCart(@PathVariable Long cartItemId) {
        cartService.removeFromCart(cartItemId);
    }
}
