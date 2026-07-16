package com.ltr.service;

import com.ltr.exception.OrderNotFoundException;
import com.ltr.model.Orders;
import com.ltr.model.Payment;
import com.ltr.model.PaymentStatus;
import com.ltr.repository.OrdersRepository;
import com.ltr.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${razorpay.test-key}")
    private String keyId;
    @Value("${razorpay.secret-key}")
    private String keySecret;
    private final PaymentRepository paymentRepository;
    private final OrdersRepository ordersRepository;

    public PaymentService(PaymentRepository paymentRepository, OrdersRepository ordersRepository) {
        this.paymentRepository = paymentRepository;
        this.ordersRepository = ordersRepository;
    }

    public String createPayment(Long orderId) {
        RazorpayClient client;
        JSONObject JObject;
        Order order = null;
        Orders orders = ordersRepository.findById(orderId).orElseThrow(() ->
                new OrderNotFoundException("CreatePayment--->Order By id Not found"));
        try{

            client  = new RazorpayClient(keyId, keySecret);
            JObject = new JSONObject();
            JObject.put("amount", orders.getTotalAmount() * 100);
            JObject.put("currency", "INR");
            JObject.put("receipt", "order_"+orderId);
            order = client.orders.create(JObject);

        }catch (RazorpayException e){
            System.out.println("Razorpay ----> PaymentService  -----> createPayment()");
            e.printStackTrace();
        }
        Payment payment = new Payment();
        payment.setAmount(orders.getTotalAmount());
        payment.setStatus(PaymentStatus.PAYMENT_PENDING.toString());
        payment.setOrder(orders);
        paymentRepository.save(payment);
        assert order != null;
        return order.toString();
    }

    public String verifyPayment(){

        return "";
    }
}
