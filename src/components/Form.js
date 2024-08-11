import { useState } from 'react';

import Calendar from './Calendar';
import Button from './Button';
import Input from './Input';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  numberOfPeople: ''
};

const Form = () => {
  const [form, setForm] = useState(emptyForm);

  const onFormChange = (event) => {
    const field = event.target.dataset.name;
    const value = event.target.value;

    setForm({ ...form, [field]: value });
  };

  return (
    <form className="form">
      <Input
        onChange={onFormChange}
        value={form.name}
        placeholder="Name"
        label="Name"
        name="name"
      />
      <Input
        onChange={onFormChange}
        value={form.email}
        placeholder="Email"
        label="Email"
        name="email"
      />
      <Input
        onChange={onFormChange}
        value={form.phone}
        placeholder="Phone"
        label="Phone"
        name="phone"
      />
      <Input
        onChange={onFormChange}
        placeholder="Number of people"
        label="Number of people"
        name="numberOfPeople"
        value={form.numberOfPeople}
      />
      <Calendar />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
