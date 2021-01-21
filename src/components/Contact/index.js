import React from 'react'
// import './form.scss'

const Contact = () => (
  <section className="contact">
    <form className="form">
      <div className="form__input-container">
        <label className="form__label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="form__input"
          type="text"
          id="last_name"
          name="last_name"
          required
        />
      </div>
      <div className="form__input-container">
        <label className="form__label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="form__input"
          type="text"
          id="first_name"
          name="first_name"
          required
        />
      </div>
      <div className="form__input-container">
        <label className="form__label" htmlFor="society">
          Society
        </label>
        <input
          className="form__input"
          type="text"
          id="society"
          name="society"
        />
      </div>
      <div className="form__input-container">
        <label className="form__label" htmlFor="object">
          Object
        </label>
        <input
          className="form__input"
          type="text"
          id="object"
          name="object"
          required
        />
      </div>
      <div className="form__container">
        <label className="form__label" htmlFor="first_name">
          Message
        </label>
        <textarea 
            className="form__textarea" 
            id="message" 
            name="message" 
        />
      </div>
      <button type="button" className="form__send">
        Send
      </button>
    </form>
    
  </section>
)

export default Contact
