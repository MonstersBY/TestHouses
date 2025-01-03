import React from "react"
import styles from "./hader.module.scss";
import { Logo } from "../small/small";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_container}`}>
        <Logo/>
        <div className={`desktop ${styles.header_box}`}>
          <div className="">
            <div className="h6">Адрес офиса:</div>
            <div className="text3 text-color-transp">РБ, г. Минск, <br/>ул. Ленина, 1</div>
          </div>
          <div className="">
            <div className="h6">+375 99 999 99 99</div>
            <div className="text3 text-color-transp">пн – пт: с 09:00 до 18:00</div>
            <div className="text3 text-color-transp">сб – вс: с 10:00 до 16:00</div>
          </div>
          <div className="btn-border" open-modal='popup-call'>Узнать стоимость</div>
        </div>
        <div className={`mobile ${styles.header_svg}`}>
          <svg open-modal='popup-call' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3339 22.5605V26.5605C29.3354 26.9318 29.2593 27.2993 29.1106 27.6396C28.9618 27.9798 28.7436 28.2852 28.47 28.5363C28.1964 28.7873 27.8733 28.9784 27.5216 29.0974C27.1698 29.2164 26.7971 29.2605 26.4272 29.2271C22.3243 28.7813 18.3832 27.3793 14.9206 25.1338C11.699 23.0867 8.96768 20.3554 6.92056 17.1338C4.6672 13.6554 3.26489 9.69511 2.82723 5.57379C2.79391 5.20508 2.83773 4.83347 2.9559 4.48262C3.07406 4.13177 3.26399 3.80937 3.51358 3.53595C3.76318 3.26253 4.06697 3.04407 4.40562 2.89448C4.74426 2.7449 5.11035 2.66747 5.48056 2.66712H9.48056C10.1276 2.66075 10.755 2.88989 11.2456 3.31183C11.7362 3.73377 12.0567 4.31972 12.1472 4.96045C12.3161 6.24054 12.6292 7.49742 13.0806 8.70712C13.26 9.18435 13.2988 9.70301 13.1924 10.2016C13.0861 10.7002 12.839 11.1579 12.4806 11.5205L10.7872 13.2138C12.6853 16.5518 15.4492 19.3157 18.7872 21.2138L20.4806 19.5205C20.8431 19.162 21.3008 18.9149 21.7994 18.8086C22.298 18.7022 22.8167 18.7411 23.2939 18.9205C24.5036 19.3719 25.7605 19.685 27.0406 19.8538C27.6883 19.9452 28.2798 20.2714 28.7026 20.7704C29.1254 21.2695 29.3501 21.9066 29.3339 22.5605Z" stroke="#FBFDFD" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
  )
}

export {Header}