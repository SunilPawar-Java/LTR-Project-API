package com.ltr.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDao {

    private Long id;
    private String paymentStatus;
    private Double amount;
    private Double amountPaid;
}
