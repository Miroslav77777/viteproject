import React, { useState, useEffect } from 'react';
import './Table.css';


const ProductTable = () => {
  const [tableData, setTableData] = useState([]);
  const head_names = [
    'Бады и витамины',
    'Уход за волосами',
    'Личная гигиена',
    'Уход за лицом и телом',
    'Для дома',
    'Косметика',
    'Парфюмерия',
    'Детская линия'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Загрузка данных для каждой категории
        const tableDataByCategory = await Promise.all(
          head_names.map(async (name, index) => {
            try {
              const response = await fetch(`./jsons/data${index + 1}.json`);
              if (!response.ok) {
                throw new Error(`Ошибка при загрузке данных из: ${index + 1}`);
              }
              const data = await response.json();
              console.log('Запрос отправлен:', response.url); // Проверяем путь
              console.log('Данные:', data); 
              return data; // Возвращаем данные
            } catch (error) {
              console.error(`Ошибка при загрузке данных из: ${index + 1}`, error); 
            }
          })
        );
        setTableData(tableDataByCategory); // Добавлен этот код
      } catch (error) {
        console.error('Ошибка при загрузке данных из: ', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='price-table'>
      {tableData.map((categoryData, categoryIndex) => (
        <div className="table-container">
          <table key={categoryIndex} className="product-table">
            <thead>
              <tr>
                <th>Код</th>
                <th>{head_names[categoryIndex]}</th>
                <th>Количество-объем</th>
                <th>Цена без регистрации</th>
                <th>Цена после регистрации</th>
                <th>Балл</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((product, productIndex) => (
                <tr key={productIndex}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price_no_discount}</td>
                  <td>{product.price_discount}</td>
                  <td>{product.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  
      ))}
    </div>
  );
};

export default ProductTable;