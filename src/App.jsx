 import React, { useState } from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'
import productsData from './data/products'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...new Set(productsData.map(product => product.category))]
  
  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory)
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Cart cartItems={cartItems} />
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList 
        products={filteredProducts}
        onAddToCart={addToCart}
      />
    </div>
  )
}

export default App