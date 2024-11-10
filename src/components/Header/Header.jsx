import "./Header.css"
import { Component } from "react"
import Logo from "../../assets/Logo.png"
import Menu from "../../assets/Menu.svg"
import Close from "../../assets/Close.svg"
import React from "react";

export default class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }); 
    }

    render(){
        const { clicked } = this.state;
        return(
            <header>
            <a href="./" className="Logo">
                <img src={Logo} alt="лого" />
            </a>
            <nav>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="./">Главная</a></li>
                    <li><a href="./about">Контакты</a></li>
                    <li><a href="./pricelist">Прайс-лист</a></li>
                    <li><a href="./catalog">Каталог</a></li>
                </ul>
                <div id="mobile" onClick={this.handleClick}>
                    <img src={clicked ? Close:Menu} alt="" />
                </div>
            </nav>
            </header>
            )
    }
    
    
}