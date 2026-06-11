package com.ltr.controller;
import com.ltr.entity.orders.Orders;
import com.ltr.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/order")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/place")
    public ResponseEntity<?> placeOrder(@RequestBody Orders order){
        System.out.println(order.getTotalAmount());
        return ResponseEntity.ok(Map.of("message" ,orderService.saveOrder(order)));
    }
}
