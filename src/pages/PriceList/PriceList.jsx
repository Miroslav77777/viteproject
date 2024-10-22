import React from 'react';
import Header from '../../components/Header/Header';
import ProductTable from '../../components/Table/Table'
import Discount from '../../components/Discount/Discount';
export default function PriceList() {
  return (
    <>
      <Discount />
      <Header />
      <ProductTable />
    </>
  );
}