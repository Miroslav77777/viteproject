import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Catalogue.module.css';
import catimage from '../../assets/Category.gif';

// Создайте экземпляр axios с базовым URL-адресом для бэкенда с API
const api = axios.create({
  baseURL: 'http://localhost:5000',
});

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [products, setProducts] = useState([]);
  const resetState = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setProducts([]);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const selectedCategoryData = categories.find(
          (category) => category.id === selectedCategory
        );
        if (!selectedCategoryData) return;
        const category = selectedCategoryData.category;
        const params = { category };
        if (selectedSubcategory) {
          const selectedSubcategoryData = selectedCategoryData.subcategories.find(
            (subcat) => subcat.subcategory === selectedSubcategory
          );
          if (selectedSubcategoryData) {
            params.subcategory = selectedSubcategoryData.subcategory;
          }
        }
        console.log(params);
        const response = await api.get('/products', {
          params,
          paramsSerializer: (params) => {
            return Object.keys(params)
              .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
              .join('&');
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (selectedCategory && (selectedSubcategory || !categories.find((category) => category.id === selectedCategory)?.subcategories?.length)) {
      fetchProducts();
    }
  }, [selectedCategory, selectedSubcategory, categories]);

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setSelectedCategory(null);
      setSelectedSubcategory(null);
      setProducts([]);
    } else {
      setExpandedCategory(categoryId);
      setSelectedCategory(categoryId);
      setSelectedSubcategory(null);
      setProducts([]);
    }
  };

  const selectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory
  );

  const items = selectedCategoryData
    ? selectedCategoryData.subcategories.length > 0
      ? selectedSubcategory
        ? products
        : selectedCategoryData.subcategories
      : products
    : categories;

  return (
    <section className={styles.productSection}>
      <div className={styles.sidebar}>
        <h1 className={styles.sidebarHeader} onClick={resetState}>Каталог продукции Ersag</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className={styles.category}>
              <button
                className={styles.categoryButton}
                onClick={() => toggleCategory(category.id)}
              >
                {category.category_ru}
              </button>
              {expandedCategory === category.id && (
                <ul className={styles.subcategories}>
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory.subcategory}
                      className={styles.subcategory}
                      onClick={() => selectSubcategory(subcategory.subcategory)}
                    >
                      {subcategory.subcategory_ru}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {products.length > 0 ? (
        <div className={styles.mainContainer}>
        {products.map((product, index) => (
          <div
            key={`${product.product_code}-${index}`}
            className={styles.productList}
          >
            <img
              className={styles.productImage}
              src={`./images_cards/${product.img_src}`}
              alt={product.product_name}
            />
            <h2 className={styles.productName}>{product.product_name}</h2>
            <p className={styles.productCode}>
              Код товара: {product.product_code}
            </p>
          </div>
        ))}
      </div>
      ):(
        <div className={styles.mainContainer}>
        {items.map((item) => (
          <div
          key={item.id || item.subcategory}
          className={styles.productCard}
          onClick={!item.subcategory ? () => toggleCategory(item.id):() => selectSubcategory(item.subcategory)}
          >
            {item.category_ru || item.subcategory_ru}
            <img src={catimage || `./images_cards/${item.img_src}`} alt={item.subcategory_ru || item.category_ru} />
          </div>
        ))}
      </div>
      )}
      
    </section>
  );
};

export default Categories;