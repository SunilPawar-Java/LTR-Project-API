package com.ltr.service;

import com.ltr.entity.orders.Orders;
import com.ltr.exception.classes.ProductNotFoundException;
import com.ltr.repository.order.repository.OrdersRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderService {
    private final ProductsService productsService;
    private final OrdersRepository ordersRepository;

    public OrderService(ProductsService productsService, OrdersRepository ordersRepository) {
        this.productsService = productsService;
        this.ordersRepository = ordersRepository;
    }

    @Transactional
    public String saveOrder(Orders order){
        order.setPlacedDate(LocalDateTime.now());
        order.setStatus("Placed");
        if (!productsService.isProductExistById(order.getProduct().getId()))
            throw new ProductNotFoundException("Fail to place order because product is not available for id " + order.getProduct().getId());
        ordersRepository.save(order);
        return "Order Placed...";
    }
}
