import React from 'react'
import ProductCard from './ProductCard'

// Export sample products for testing
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true },
  { id: 3, name: 'Bread', price: '$2.00', category: 'Bakery', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true },
  { id: 5, name: 'Orange Juice', price: '$3.50', category: 'Beverages', inStock: true },
  { id: 6, name: 'Chicken', price: '$5.00', category: 'Meat', inStock: true }
]

const ProductList = ({ products = [], onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available</p>
      </div>
    )
  }
  
  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList 