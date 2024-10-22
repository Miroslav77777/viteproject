import "./Header.css"
import { Component } from "react"
import Logo from "../../assets/Logo.png"
import Menu from "../../assets/Menu.svg"
import Close from "../../assets/Close.svg"

export default class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }); 
    }

    handleDownload = () => {
      // Создайте объект URL для вашего PDF-файла
      const fileUrl = '/catalogue/Ersag_catalog.pdf'; // Абсолютный путь к файлу в public

      // Создайте ссылку
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'Ersag_catalog.pdf'); // Задайте имя файла для загрузки

      // Запустите загрузку
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
                    <li><a href="/about">Контакты</a></li>
                    <li><a href="/pricelist">Прайс-лист</a></li>
                    <li><a href="#" onClick={this.handleDownload}>Каталог</a></li> {/* Используйте обработчик клика */}
                </ul>
                <div id="mobile" onClick={this.handleClick}>
                    <img src={clicked ? Close:Menu} alt="" />
                </div>
            </nav>
            </header>
            )
    }
    
    
}