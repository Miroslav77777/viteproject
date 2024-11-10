import React from "react";
import Catalogue from "../../components/Catalogue/Catalogue";
import Header from '../../components/Header/Header';
import Discount from '../../components/Discount/Discount';
import Footer from '../../components/Footer/Footer';

export default function Catalog(){
    return(
        <>
            <Discount />
            <Header />
            <Catalogue />
            <Footer />
        </>
        
    )
}