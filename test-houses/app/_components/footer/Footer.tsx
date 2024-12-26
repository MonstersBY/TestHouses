import React from "react";
import { Logo } from "../small/small";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <div className={styles.footer_left}>
          <Logo/>
          <div className="text3">© 2024 ООО “Строительные решения”</div>
        </div>
        <div className={styles.footer_center}>
          <div className="h6">Адрес офиса</div>
          <div className={`text3 ${styles.footer_center_container}`}>
            <div className="text-color-transp">РБ, г. Минск, <br className="desktop"/> ул. Ленина, 1</div>
            <div className="text-color-transp">пн – пт: с 09:00 до 18:00</div>
            <div className="text-color-transp">сб – вс: с 10:00 до 16:00</div>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className="text3 text-color-transp">ООО “Строительные решения” <br/>Юридический адрес: <br/>РБ, г. Минск, ул. Ленина, 1<br/>УНП: 111111111</div>
          <div className="text3">Разработка сайта: <a href="#" className="h6 text-color-link">Web-space.by</a></div>
        </div>
      </div>
    </footer>
  )
}

export {Footer}