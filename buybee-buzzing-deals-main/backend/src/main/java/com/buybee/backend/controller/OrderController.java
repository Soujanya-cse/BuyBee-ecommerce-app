package com.buybee.backend.controller;

import com.buybee.backend.model.Order;
import com.buybee.backend.model.User;
import com.buybee.backend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/checkout/{userId}")
    public Order checkout(@PathVariable Long userId) {
        User user = new User();
        user.setId(userId);
        return orderService.checkout(user);
    }

    @GetMapping("/{userId}")
    public List<Order> getOrders(@PathVariable Long userId) {
        User user = new User();
        user.setId(userId);
        return orderService.getOrders(user);
    }
}
