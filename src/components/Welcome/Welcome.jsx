import "./Welcome.css"
import Attention from "../../assets/Attention.svg"
import First from "../../assets/First.png"
import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';

export default function Welcome(){
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleHideModal = () => {
       setShowModal(false); 
    };
    return(
        <>
            <section className="welcome">
                <div className="info">
                    <div className="club">
                        <h1>ERSAG CLUB</h1>
                        <p>Клуб красоты и здоровья</p>
                    </div>
                    <div className="annotation">
                        <img src={Attention} alt="" />
                        <p>САЙТ ПАРТНЕРА КОМПАНИИ ERSAG</p>
                    </div>
                    <div className="main-info">
                        <h1>Хотите стать частью волшебного мира Красоты и Здоровья Эрсаг?</h1>
                        <p>Станьте Архитектором своего Счастья!
                        <br/>Присоединяйтесь к Сообществу Эрсаг и узнайте секреты красоты и здоровья! <br/>А также улучшите своё благополучие вместе с нами!</p>
                        <a href="./salon">
                            <button>УЗНАТЬ БОЛЬШЕ</button>
                        </a>
                    </div>
                </div>
                <div className="inner-section">
                    <div className="image-container">
                    <a href='./salon' className="frame"></a>
                    <a href="./salon"><img src={First} alt="Woman with flowers" /></a>    
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