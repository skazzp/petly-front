import { useFormik } from 'formik';

const UserData = () => {
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
  return (
    <form onSubmit={formik.handleSubmit}>
      <label name="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </label>
      <button type="submit">Submit</button>
      <label name="email">
        Email
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <button type="submit">Submit</button>
      <label name="birthday">
        Birthday
        <input
          id="birthday"
          name="birthday"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
      </label>
      <button type="submit">Submit</button>
      <label name="phone">
        Phone
        <input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </label>
      <button type="submit">Submit</button>
      <label name="city">
        City
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserData;
