# BuyBee Backend

This Spring Boot backend provides a MySQL-backed API for the BuyBee storefront.

## Requirements
- Java 21
- MySQL 8+
- Maven 3.9+

## Database setup
Create a MySQL database named `buybee` and update the credentials in `src/main/resources/application.properties` if needed.

## Run locally
```bash
mvn spring-boot:run
```

## Main endpoints
- `GET /api/products`
- `GET /api/products/category/{category}`
- `GET /api/products/search?q=...`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/cart/{userId}`
- `POST /api/cart/{userId}/add/{productId}`
- `DELETE /api/cart/{cartItemId}`
- `POST /api/orders/checkout/{userId}`
- `GET /api/orders/{userId}`
