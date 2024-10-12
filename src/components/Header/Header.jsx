import "./Header.css"
import { Component } from "react"
import Logo from "../../assets/Logo.png"
import Call from "../../assets/Call.svg"
import Menu from "../../assets/Menu.svg"
import Close from "../../assets/Close.svg"

export default class Header extends Component{
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }); // Исправлено
    }
    render(){
        const { clicked } = this.state;
        return(
            <header>
            <a href="/" className="Logo">
                <img src={Logo} alt="лого" />
                <h1>Клуб красоты и здоровья</h1>
            </a>
            <nav>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="/">Главная</a></li>
                    <li><a href="./about">О нас</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <div id="mobile" onClick={this.handleClick}>
                    <img src={clicked ? Close:Menu} alt="" />
                </div>
            </nav>
            </header>
            )
    }
    
    
}