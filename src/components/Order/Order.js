import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actionType from "../../Store/actionCreators/userActions";
import "./Order.css";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.telephone) {
    errors.telephone = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
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

const OrderForm = (props) => {
  const dispatch = useDispatch();

  
  const onSubmit = (formData) => {
    dispatch(actionType.userData(formData));
    props.history.push('/checkout')
  };
  const { handleSubmit, submitting } = props;
  return (
    <form className="form__details" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__input">
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
      </div>

      <div className="form__input">
        <Field
          name="telephone"
          type="number"
          component={renderField}
          label="Tel No"
        />
      </div>

      <div className="form__input">
        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
        />
      </div>
      <div>
        <Button color="primary" variant="outlined" type="submit" disabled={submitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "OrderForm",
  validate,
})(OrderForm);
