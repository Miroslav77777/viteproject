import React from 'react'
import Discount from '../../components/Discount/Discount'
import Header from '../../components/Header/Header'
import Welcome from '../../components/Welcome/Welcome'
import About from '../../components/About/About'
import Marketing from '../../components/Marketing/Marketing'
import MarketRows from '../../components/MarketRows/MarketRows'
import Footer from '../../components/Footer/Footer'



export default function Home() {
  const leftHeaders = ["Международная компания", "Эко продукция", "Карьера в Эрсаг", "Премия", "Наша Команда"]
  const rightHeaders = [
    "Международная компания с международным маркетингом", 
    "Собственное производство, широкий ассортимент продукции и ее репотребляемость", 
    "Неснижаемый статус карьеры и отсуствие ЛТО", 
    "Стабильные выплаты только деньгами", 
    "Сетевой = команда"
  ]
  const paragraphs = [
    ["Компания Эрсаг на рынке уже более 19 лет. Активно развивается не только в Турции, но и в ЕС и странах СНГ. Это значит, что вы можете развивать (не только в России) свой бизнес, который передается по наследству. В России компания представлена с 2019 года."],
    [
      "Эрсаг имеет собственное современное производство в Турции. Это значит, что компания может влиять на контроль за качеством продукции, быстро выводить на рынок новую продукцию, контролировать ценообразование и делать щедрые подарки.", 
      "Широкий ассортимент эко продукции: Бады, витамины, средства личной гигиены, моющие и чистящие средства, косметика и парфюмерия. Продукция — бесфосфатная, гипоаллергенная и натуральная. Тебе есть с чем работать и что предлагать!", 
      "Репотребляемость продукции обеспечит тебе хороший товарооборот твоей структуры и отличную премию."
    ], 
    ["В компании Эрсаг ты никогда не утратишь достигнутый уровень карьеры. Нет обязательных закупок (личного товарооборота ЛТО). Покупай для себя только то, что действительно необходимо."], 
    ["Это всегда живые деньги, подарки и скидки в зависимости от карьеры."], 
    [
      "Сетевой бизнес — это командный вид спорта. Без системы командной поддержки и обучения очень трудно развиваться и продвигаться. Ты об этом знаешь.", 
      "Наша команда — сообщество профессионалов. Мы действительно заинтересованы в твоём успехе. Мы поможем тебе с обучением и продвижением бесплатно."
    ]
  ]

  return (
    <>
      <Discount />
      <Header />
      <Welcome />
      <About />
      <Marketing />
      <MarketRows 
        hL={leftHeaders} 
        hR={rightHeaders} 
        pA={paragraphs} 
      />
      <Footer />
    </>
  );
}