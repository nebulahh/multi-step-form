const validate = values => {

  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  .test(values.phone_num)
  ) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.phone_num) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;

};

export default validate