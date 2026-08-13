package com.example.siteComercio.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import com.example.siteComercio.dto.OrderDto;
import com.example.siteComercio.dto.OrderItemDto;
import com.example.siteComercio.entity.Order;
import com.example.siteComercio.entity.OrderItem;
import com.example.siteComercio.entity.Product;
import com.example.siteComercio.entity.User;
import com.example.siteComercio.execption.OrderNotFound;
import com.example.siteComercio.execption.OutOfStock;
import com.example.siteComercio.execption.ProductNotFound;
import com.example.siteComercio.execption.UserNotFound;
import com.example.siteComercio.mapper.OrderItemMapper;
import com.example.siteComercio.mapper.OrderMapper;
import com.example.siteComercio.repository.OrderRepository;
import com.example.siteComercio.repository.ProductRepository;
import com.example.siteComercio.repository.UserRepository;
import com.example.siteComercio.service.OrderService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService{
    
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public OrderDto createOrder(OrderDto orderDto){

        User user = userRepository.findById(orderDto.getUserId())
                .orElseThrow(() -> new UserNotFound("User not found with id: "+ orderDto.getUserId() ));

        List<OrderItem> items = new ArrayList<>();

        for(OrderItemDto orderItemDto: orderDto.getItems()){
            Product product = productRepository.findById(orderItemDto.getProductId())
                    .orElseThrow(() -> new ProductNotFound("Product not found with id:" + orderItemDto.getProductId()));
            
            if(orderItemDto.getQuantity() > product.getStock()){
                throw new OutOfStock("Quantity is more bigger than Product Stock");
            }

            if (orderItemDto.getQuantity() <= 0) {
                throw new IllegalArgumentException("Quantity must be greater than zero");
            }
                
            
            OrderItem item = OrderItemMapper.mapperToOrderItem(
                orderItemDto,
                product
            );

            Integer newStock = product.getStock() - orderItemDto.getQuantity();
            product.setStock(newStock);
            items.add(item);
         
        }

        BigDecimal total = items.stream()
        .map(item -> item.getSubTotal())
        .reduce(BigDecimal.ZERO, BigDecimal::add);

         orderDto.setTotal(total);

        Order order = OrderMapper.mapperToOrder(
            orderDto,
            user,
            items
    );

        Order savedOrder = orderRepository.save(order);

        return OrderMapper.mapperToDto(savedOrder);

    }

    public List<OrderDto> getAllOrders(){
        List<Order> orders = orderRepository.findAll();

        return orders.stream().map(o -> OrderMapper.mapperToDto(o)).toList();
    }


    public OrderDto getOrderById(Long id){
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new OrderNotFound("Order no found with id: " + id));

        return OrderMapper.mapperToDto(order);
    }


    public OrderDto updateOrder(Long id, OrderDto orderDto){
        Order order = orderRepository.findById(orderDto.getUserId()) 
            .orElseThrow(() -> new OrderNotFound("Order no found with id: " + id));

        User user = userRepository.findById(orderDto.getUserId()).orElseThrow(() ->
                 new UserNotFound("User not found with id: "+ orderDto.getUserId() ));

        List<OrderItem> items = new ArrayList<>();

        for(OrderItemDto orderItemDto: orderDto.getItems()){

            Product product = productRepository.findById(orderItemDto.getProductId())
                    .orElseThrow(() -> new ProductNotFound("Product not found with id:" + orderItemDto.getProductId()));
            
            OrderItem item = OrderItemMapper.mapperToOrderItem(
                orderItemDto,
                product
            );

            items.add(item);

        }

         order.setId(orderDto.getId());
        order.setOrderDate(orderDto.getOrderDate());
        order.setTotal(orderDto.getTotal());
        order.setStatus(orderDto.getStatus());
        order.setUser(user);
        order.setItems(items);

        Order savedOrder = orderRepository.save(order);

        return OrderMapper.mapperToDto(savedOrder);
    }



    public void deleteOrder(Long id){
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new OrderNotFound("Order no found with id:" + id));

        orderRepository.delete(order);
    }
    
        


    
}
