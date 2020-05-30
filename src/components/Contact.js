import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
class Contact extends Component {

  constructor(props) {
    super(props);
       this.state = {
          isShowMsg: false,
          isSending: false,
       }
  }

  onSubmit = (values,  { resetForm }) => {
    this.setState({
      isSending: true
    })
    axios.post(
    "https://formcarry.com/s/rZ4YS2BUOtwz", 
    values, 
    {headers: {"Accept": "application/json"}}
    )
    .then((response) => {
      if(response.data.status === "success"){
        this.setState({ isSending: false, isShowMsg: true })
          resetForm();
      }
    })
    .catch((error) => {
      console.log(error);
    });

    
  }

	render() {
  const {  isSending, isShowMsg } = this.state;

	return(
    <section className="kelo-section" id="contact">
    <div className="container">          
        <h1 className="kelo-heading"> Contact </h1>
        <Formik
          className="kelo-form"
          initialValues={{
            name: '',
            email: '',
            message: ''
          }}
          validate={values => {
            let errors = {};
            if(!values.name) {
              errors.name = 'Please enter your name';
            }
            if (!values.email) {
              errors.email = 'Please enter your Email';
            }
            if (!values.message) {
              errors.message = 'Please enter your message';
            }
            return errors; 
          }}          
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            message: Yup.string().required()
          })}
          onSubmit={this.onSubmit}
          render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
           <Fragment>
            <form className="kelo-form" onSubmit={ handleSubmit }>
              {
                isShowMsg && <div class="alert alert-success">Thank you for sending me a message!</div>  
              }
                  
              <div className="row">
                <div className="col-8"> 
                  <div className="kelo-form__form-group"> 
                     <label htmlFor="input-name" className="kelo-form__label"> Name </label>
                     <input type="text" name="name"  onBlur={handleBlur} onChange={ handleChange } className={`kelo-form__input ${  errors.name && touched.name ? 'kelo-form__input-error' : '' }`} id="input-name" value={ values.name } />
                      { 
                        errors.name && touched.name &&  
                        <div className="kelo-form__error"> { errors.name } </div>
                      } 
                  </div> 
                </div>
              </div>  
              <div className="row">
                <div className="col-8"> 
                  <div className="kelo-form__form-group"> 
                     <label htmlFor="input-email" className="kelo-form__label"> Email </label>
                     <input type="email" name="email" onChange={ handleChange } className={`kelo-form__input ${  errors.email && touched.email ? 'kelo-form__input-error' : '' }`}  id="input-email" value={ values.email }/>
                      { 
                        errors.email && touched.email &&  
                        <div className="kelo-form__error"> { errors.email } </div>
                      } 
                  </div> 
                </div>
              </div>
            <div className="row"> 
              <div className="col-12">
                <div className="kelo-form__form-group"> 
                   <label htmlFor="input-message" className="kelo-form__label"> Message </label>
                   <textarea type="text" name="message" onChange={ handleChange } className={`kelo-form__textarea ${  errors.message && touched.message ? 'kelo-form__input-error' : '' }`} rows="8" id="input-message" value={ values.message } />
                      { 
                        errors.message && touched.message &&  
                        <div className="kelo-form__error"> { errors.message } </div>
                      }
                </div>                
              </div>
            </div>              
            <div className="kelo-form__action"> 
              <button 
              type="submit" 
              className="btn btn-primary btn-lg btn-radius" 
              disabled={ isSending }> 
               {
                isSending ? <span className="loading-icon"> </span> : 'Send'
              }  
              </button>
            </div>          
            </form>
          </Fragment>      
          )}
        />       
     </div> 
    </section>
			)
	}

}

export default Contact;