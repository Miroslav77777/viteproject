import "./About.css"
import Ersag from "../../assets/download 1.jpg"
import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';

export default function About(){
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleHideModal = () => {
       setShowModal(false); 
    };
    return(
        <>
            <section className="about">
                <div className="info-about">
                        <div className="annotation">
                            <p>О КОМПАНИИ</p>
                        </div>
                    <div className="main-info">
                        <h1>Эрсаг - турецкая международная компания</h1>
                        <p>Производит абсолютно натуральную, экологическую, гипоаллергенную и профессиональную продукцию: бады, средства личной гигиены, чистящие и моющие средства, натуральную косметику и парфюмерию.
                        Продукция Эрсаг в России официально сертифицирована к применению и продажам.</p>
                        <button onClick={handleShowModal}>Подробнее</button>
                    </div>
                </div>
                <div className="inner-section">
                    <div className="image-container">
                    <div className="frame"></div>
                    <img src={Ersag} alt="Woman with flowers" />
                    </div>
                </div>
            </section>
            {showModal && (
            <div className="modal-container">
                <Backdrop onClick={handleHideModal} />
                <Modal onClose={handleHideModal} />
            </div>
            )}
        </>
    )
}