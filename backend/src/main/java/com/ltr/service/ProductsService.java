package com.ltr.service;

import com.ltr.dao.ProductDao;
import com.ltr.mapper.Mapper;
import com.ltr.model.Products;
import com.ltr.exception.ProductNotFoundException;
import com.ltr.repository.ProductsRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ProductsService {
    byte[] b = new byte[0];
    private final ProductsRepository productsRepository;

    public ProductsService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public String addProduct(ProductDao productDao) throws IOException {
        productsRepository.save(Mapper.mapToProducts(productDao));
        return "Product Added Successfully";
    }

    public List<Products> getAllProducts(){
        return productsRepository.findAll()
                .stream().map(products -> {products.setImage(b); return products; }).toList();
    }

    public Products getProductById(Long id) {
        Products products = productsRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product Not Found for id " + id));
        products.setImage(b);
        return products;
    }

    public byte[] getProductImageById(Long id){
        return productsRepository.findById(id)
                .orElseThrow(()-> new ProductNotFoundException("Image Not Found for id "+id)).getImage();
    }

    @Transactional
    public List<ProductDao> getProductsByMainCategory(String category){
        List<Products> products = productsRepository.findAllByMainCategory(category);
        return Mapper.mapToProductDao(products);
    }

    @Transactional
    public List<ProductDao> getProductsBySubCategory(String category){
        List<Products> products = productsRepository.findAllByMainCategory(category);
        return Mapper.mapToProductDao(products);
    }

    @Transactional
    public List<ProductDao> getProductsByItemType(String itemType){
        List<Products> products = productsRepository.findAllByMainCategory(itemType);
        return Mapper.mapToProductDao(products);
    }

    @Transactional
    public List<ProductDao> getProductsByItemName(String itemName){
        List<Products> products = productsRepository.findAllByMainCategory(itemName);
        return Mapper.mapToProductDao(products);
    }

    public String updateProductPartially(Long id, ProductDao productDao) throws IOException {
        Products product = productsRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product Not Found"));
        if(productDao.getMainCategory() != null)
            product.setMainCategory(productDao.getMainCategory());
        if (productDao.getLocationCategory() != null)
            product.setLocationCategory(productDao.getLocationCategory());
        if (productDao.getItemName() != null)
            product.setItemName(productDao.getItemName());
        if (productDao.getItemType() != null)
            product.setItemType(productDao.getItemType());
        if(productDao.getPrice() != null)
            product.setPrice(productDao.getPrice());
        if (productDao.getDescription() != null)
            product.setDescription(productDao.getDescription());
        if(productDao.getImage() != null)
            product.setImage(productDao.getImage().getBytes());
        productsRepository.save(product);
        return "Product Updated Successfully";
    }

    public String updateProductFully(Long id, ProductDao productDao) throws IOException {
        Products product = productsRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product Not Found"));
        product.setMainCategory(productDao.getMainCategory());
        product.setLocationCategory(productDao.getLocationCategory());
        product.setItemType(productDao.getItemType());
        product.setItemName(productDao.getItemName());
        product.setPrice(productDao.getPrice());
        product.setDescription(productDao.getDescription());
        product.setImageName(productDao.getImage().getOriginalFilename());
        product.setImageType(productDao.getImage().getContentType());
        product.setColor(productDao.getColor());
        product.setOccasion(productDao.getOccasion());
        product.setSeason(productDao.getSeason());
        product.setStock(productDao.getStock());
        product.setDiscountPercentage(productDao.getDiscountPercentage());
        product.setFabric(productDao.getFabric());
        product.setLengthType(productDao.getLengthType());
        product.setSleeveType(productDao.getSleeveType());
        product.setSleeveLength(productDao.getSleeveLength());
        product.setNeckline(productDao.getNeckline());
        product.setFitType(productDao.getFitType());
        product.setHemline(productDao.getHemline());
        product.setClosureType(productDao.getClosureType());
        product.setImage(productDao.getImage().getBytes());
        productsRepository.save(product);
        return "Product Updated Successfully";
    }

    @Transactional
    public String deleteProductById(Long id){
        productsRepository.delete(getProductById(id));
        return "Product delete successfully for id "+id;
    }

    @Transactional
    public String deleteAllByMainCategory(String category){
        productsRepository.deleteAll(productsRepository.findAllByMainCategory(category));
        return "All products successfully deleted for category "+category;
    }

    @Transactional
    public String deleteAllBySubCategory(String category){
        productsRepository.deleteAll(productsRepository.findAllByLocationCategory(category));
        return "All products successfully deleted for category "+category;
    }

    @Transactional
    public String deleteAllByItemType(String itemType){
        productsRepository.deleteAll(productsRepository.findAllByItemType(itemType));
        return "All products successfully deleted for category "+itemType;
    }

    @Transactional
    public String deleteAllByItemName(String itemName){
        productsRepository.deleteAll(productsRepository.findAllByItemName(itemName));
        return "All products successfully deleted for category "+itemName;
    }

    public boolean isProductExistById(Long id){
        return productsRepository.existsById(id);
    }
}
