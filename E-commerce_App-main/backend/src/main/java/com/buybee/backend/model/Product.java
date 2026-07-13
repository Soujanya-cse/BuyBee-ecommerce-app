package com.buybee.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String brand;
    private String category;
    @Column(length = 1000)
    private String description;
    private BigDecimal price;
    private BigDecimal discount = BigDecimal.ZERO;
    private Double rating = 0.0;
    private Integer reviewCount = 0;
    private Integer stock = 0;

    @ElementCollection
    private List<String> images = new ArrayList<>();

    @ElementCollection
    private List<String> colors = new ArrayList<>();

    @ElementCollection
    private List<String> features = new ArrayList<>();

    @ElementCollection
    private List<String> tags = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> cartItems = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();
}
