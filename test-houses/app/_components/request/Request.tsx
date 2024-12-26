"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./request.module.scss";
import { useMask } from '@react-input/mask';

const token = '7523702642:AAEVUQjlHKcdGZY5Yss14HTsGXeJEEMIRmM'

const Request = () => {
  const [tel, setTel] = useState({number: '', comments: '', check: false})
  const inputRef = useMask({
    mask: '+375 (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  async function handleSubmit(e) {
    e.preventDefault()
    if(tel.number.length == 20 && tel.check) {
      const text = `Пришла заявка \nНомер телефона: ${tel.number}\nКомментарий: ${tel.comments}`
      try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: '@TestBotHouses',
            text,
          })
        })
        setTel({...tel, number: '', comments: '', check: false})
        e.target.form.reset()
      } catch (error) {

      }
    }
  }

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
              <input ref={inputRef} className="text-field-b" id='request-tel' type="text" placeholder='+375 (99) 999-99-99' onChange={(e)=> setTel({...tel, number: e.target.value})}/>
            </div>
            <div className="form-container">
              <label htmlFor='request-text' className="h6 form-text">Ваш комментарий</label>
              <textarea className="text-field-b" id='request-text' placeholder='Ваш комментарий' onChange={(e)=> setTel({...tel, comments: e.target.value})}/>
            </div>
            <div className="form-end">
              <label className="form-checkbox">
                <div className="form-checkbox__box">
                  <input type="checkbox" checked={tel.check} onChange={(e)=>setTel({...tel,check: !tel.check})}/>
                  <div></div>
                </div>
                <span className="text3">Согласие на обработку персональных данных</span>
              </label>
              <button className="btn-normal" onClick={handleSubmit}>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export {Request}