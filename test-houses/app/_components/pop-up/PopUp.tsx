'use client'
import React, { useEffect } from "react";
import "./popup.scss";
import Image from "next/image";
import { log } from "node:console";

function PopUp () {
  
  useEffect(() => {
    document.addEventListener('click', OpenPopup);
  }, []);

  const OpenPopup = (e) => {
    if (e.target.hasAttribute('open-modal')) {
      e.preventDefault();
      document.querySelector(`[id-popup=${e.target.getAttribute('open-modal')}]`).classList.add("active")
      document.querySelector('body').classList.add("modal")
    }
  };
  const ClosePopup = (e) => {
    e.preventDefault();
    document.querySelector('.popup.active').classList.remove("active")
    document.querySelector('body').classList.remove("modal")
  };

  return (
    <div className="popup" id-popup='popup-call'>
      <div className="popup-back"></div>
      <div className="popup-wrapper">
        <div className="popup-exit" onClick={ClosePopup}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="19" fill="#114142" fillOpacity="0.6"/>
            <path d="M25 13L13 25" stroke="#FBFDFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 13L25 25" stroke="#FBFDFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="popup-content">
          <div className="popup-img">
            <Image
              src="/popup-img.png"
              alt="logo"
              width={660}
              height={198}/>
          </div>
          <div className="popup-container">
            <div className="popup-text">
              <div className="h4">Обратный звонок</div>
              <div className="text3">Заполните форму ниже, и наш специалист свяжется <br className="desktop"/> с вами в ближайшее время.</div>
            </div>
            <form className="form" onSubmit={ClosePopup}>
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
      </div>
	  </div>
  )
}

export {PopUp}