import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as userActionType from "../Store/actionCreators/userActions";
import { auth } from "../auth/firebase";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <div className="form__error">{error}</div>}
  </div>
);

const Auth = (props) => {
  const { handleSubmit, submitting } = props;
  const userDispatch = useDispatch();
  const [page, setPage] = useState('LOGIN')

  const onSubmit = (formData) => {
    const email = formData.email;
    const password = formData.password;
    if(page === 'SIGNUP'){
        auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {

        userDispatch(userActionType.userData({ email }));
        if(props.history.action === 'POP'){
          props.history.push('/')
        }else{
          props.history.goBack()
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }else{
        auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        userDispatch(userActionType.userData({ email }));
        if(props.history.action === 'POP'){
          props.history.push('/')
        }else{
          props.history.goBack()
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
    
  };

  return (
    <div className="auth">
      <form className="form__details" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input">
          <Field
            name="email"
            type="text"
            component={renderField}
            label="Email"
          />
        </div>
        <div className="form__input">
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
        </div>

        <Button
          color="primary"
          variant="outlined"
          type="submit"
          disabled={submitting}
        >
        
          {page}
        </Button>
        {page === 'LOGIN' ?
        <Button onClick={()=>setPage('SIGNUP')}
         color="primary"> Create New Account </Button> 
        :  <Button onClick={()=>setPage('LOGIN')}
         color="primary"> Already a Member </Button> 

     }
      </form>
    </div>
  );
};

export default reduxForm({
  form: "Auth",
  validate,
})(Auth);
