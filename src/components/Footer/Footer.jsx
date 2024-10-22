import React from "react";
import "./Footer.css";
import FooterForm from "../FooterForm/FooterForm";

export default function Footer(){
    return(
        <footer>
        <div className="footer-links">
            <h3>© ERSAG CLUB</h3>
            <a href="https://t.me/SvetlanaKrasulya">TELEGRAM</a>
            <a href="#">WHATSAPP</a>
            <a href="tel:+79628606995">+7 962 860-69-95</a>
            <a href="tel:+79530825614">+7 953 082-56-14</a>
            <a href="mailto:krasulya.74@mail.ru&body=привет?subject=вопрос">krasulya.74@mail.ru</a>
            <a href="./">ГЛАВНАЯ</a>
            <a href="./about">КОНТАКТЫ</a>
            <a href="./pricelist">ПРАЙС-ЛИСТ</a>
        </div>
        <div className="footer-form">
            <FooterForm />
        </div>
        </footer>
    )
}