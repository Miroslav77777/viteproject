import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Contacts.css'; // Стили для Яндекс.Карты

export default function Contacts() {
  return (
    <section className='contacts'>
        <h1>Контакты</h1>
        <div className="map-container">
        <YMaps
            apiKey = {import.meta.env.VITE_YANDEX_API}
            query={{
                ns: "use-load-option",
                load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            }}
            >
            <Map
                defaultState={{
                center: [45.067054, 38.960302],
                zoom: 17,
                controls: ["zoomControl", "fullscreenControl"],
                }}
                style={{ height: '100%', width: '100%' }}
            >
                <Placemark
                defaultGeometry={[45.067054, 38.960302]}
                properties={{
                    balloonContentBody:
                    "This is balloon loaded by the Yandex.Maps API module system",
                }}
                />
            </Map>
        </YMaps>;
        </div>
        <div className="contacts-info">
            <div className="contact">
                <h2>Телефон</h2>
                <p>Telegram, WhatsApp</p>
                <a href="tel:+79628606995">+7 962 860-69-95</a>
                <a href="tel:+79530825614">+7 953 082-56-14</a>
            </div>
            <div className="contact">
                <h2>E-mail</h2>
                <a href="mailto:krasulya.74@mail.ru&body=привет?subject=вопрос">krasulya.74@mail.ru</a>
            </div>
            <div className="contact">
                <h2>Адрес</h2>
                <a href="https://yandex.ru/maps/-/CDdGB4KG">проспект Константина Образцова, 27/1, Краснодар</a>
            </div>
        </div>  
    </section>
  );
}