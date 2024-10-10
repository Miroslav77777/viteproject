import "./About.css"
import Ersag from "../../assets/download 1.jpg"

export default function About(){
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
                        <button>Подробнее</button>
                    </div>
                </div>
                <img className="ersag" src={Ersag} alt="Woman with flowers" />
            </section>
        </>
    )
}