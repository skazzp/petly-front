import { useFormik } from 'formik';
import { useState } from 'react';
import { Form } from './UserData.styled';

const UserData = () => {
  const INITIAL_DISABLED = {
    name: true,
    email: true,
    birthday: true,
    city: true,
    phone: true,
  };
  const [disabled, setDisabled] = useState(INITIAL_DISABLED);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthday: '',
      city: '',
      phone: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleEditInput = e => {
    console.dir(e.target);
    console.log(e.target.parentNode.htmlFor);
    setDisabled({ ...INITIAL_DISABLED, [e.target.parentNode.htmlFor]: false });
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label name="name" htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          disabled={disabled.name}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEditInput}>
          edit
        </button>
      </label>
      <label name="email" htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="text"
          disabled={disabled.email}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEditInput}>
          edit
        </button>
      </label>
      <label htmlFor="birthday">
        Birthday
        <input
          id="birthday"
          name="birthday"
          type="date"
          disabled={disabled.birthday}
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEditInput}>
          edit
        </button>
      </label>
      <label htmlFor="phone">
        Phone
        <input
          id="phone"
          name="phone"
          type="tel"
          disabled={disabled.phone}
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEditInput}>
          edit
        </button>
      </label>
      <label htmlFor="city">
        City
        <input
          id="city"
          name="city"
          type="text"
          disabled={disabled.city}
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEditInput}>
          edit
        </button>
      </label>
    </Form>
  );
};

export default UserData;
