import React from "react";
import Image from "next/image";
import styles from "./request.module.scss";

const Request = () => {
  return (
    <section >
      <div className={`container ${styles.request_container}`}>
        <div className={styles.request_img}>
          <Image
            src="/request-photo.webp"
            alt="request"
            width={660}
            height={400}/>
        </div>
        <div className={styles.request_box}>
          <div className={styles.request_box_text}>
            <div className="h2">Остались вопросы?</div>
            <div className="text2">Заполните форму ниже, и наш специалист свяжется с вами <br className="desktop"/> в ближайшее время.</div>
          </div>
          <form className="form">
            <div className="form-container">
              <label htmlFor='request-tel' className="h6 form-text">Телефон<span style={{color: 'var(--orange-m)'}}>*</span></label>
              <input className="text-field-b" id='request-tel' type="text" placeholder='+375 (99) 999-99-99'/>
            </div>
            <div className="form-container">
              <label htmlFor='request-text' className="h6 form-text">Ваш комментарий</label>
              <textarea className="text-field-b" id='request-text' placeholder='Ваш комментарий'/>
            </div>
            <div className="form-end">
              <label className="form-checkbox">
                <div className="form-checkbox__box">
                  <input type="checkbox" />
                  <div></div>
                </div>
                <span className="text3">Согласие на обработку персональных данных</span>
              </label>
              <button className="btn-normal">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export {Request}