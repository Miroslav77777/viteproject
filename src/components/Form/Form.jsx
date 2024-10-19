import React, { useState, useEffect } from "react";
import "./Form.css"
import DiscountImage from '../../assets/Discount.webp';


const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Проверяем localStorage при монтировании компонента
    const storedSuccessMessage = localStorage.getItem("formSubmitted");
    if (storedSuccessMessage === "true") {
      setShowSuccessMessage(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Замените 'YOUR_BOT_TOKEN' на токен вашего бота
      const response = await fetch(
        `https://api.telegram.org/bot8120300559:AAF_64S4zFffpbT6c_pn7ZHDdS8_Q4lhvtA/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "770454790", // Замените на ID чата админа
            text: `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nНаселенный пункт: ${city}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка отправки сообщения в Telegram");
      }

      setIsLoading(false);
      setShowSuccessMessage(true); // Отображаем сообщение об успехе
      localStorage.setItem("formSubmitted", "true");
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };


  return (
    <div>
      {showSuccessMessage ? (
        <p className="success">
          Спасибо! Данные отправлены! Мы свяжемся с вами в ближайшее время!
        </p>
      ) : (
        <>
        <img src={DiscountImage} alt="" className="image" /> 
        <form onSubmit={handleSubmit}>
          <h2>Чтобы получить скидку 20% и подарки, оставьте свои контакты!</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              placeholder="Напишите своё имя"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="city">Населенный пункт</label>
            <input
              type="text"
              placeholder="Москва"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className="send">
            {isLoading ? "Отправка..." : "Отправить"}
          </button>
        </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;