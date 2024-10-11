import "./Welcome.css"
import Attention from "../../assets/Attention.svg"
import First from "../../assets/First.png"

export default function Welcome(){
    return(
        <>
            <section>
                <div className="info">
                    <div className="annotation">
                        <img src={Attention} alt="" />
                        <p>САЙТ ПАРТНЕРА КОМПАНИИ ERSAG</p>
                    </div>
                    <div className="main-info">
                        <h1>Хотите стать частью волшебного мира Красоты и Здоровья Эрсаг?</h1>
                        <p>Станьте Архитектором своего Счастья!
                        <br/>Присоединяйтесь к Сообществу Эрсаг и узнайте секреты красоты и здоровья! <br/>А также улучшите своё благополучие вместе с нами!</p>
                        <button>Записаться на мероприятие</button>
                    </div>
                </div>
                <div className="inner-section">
                    <div className="image-container">
                    <div className="frame"></div>
                    <img src={First} alt="Woman with flowers" />
                    </div>
                </div>   
            </section>
        </>
    )
}