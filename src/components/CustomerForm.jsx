import React, { memo } from 'react';
import Input from './Input';
import Button from './Button';

const CustomerForm = memo(({ customer, onInputChange, onSubmit, buttonText, errors }) => {
  const { name, email, phone } = customer;

  return (
    <form onSubmit={onSubmit}>
      <Input label="Name:" name="name" value={name} onChange={onInputChange} />
      {errors.name && <p style={{ color: 'red' }}>{errors.name[0]}</p>}

      <Input label="Email:" name="email" value={email} onChange={onInputChange} type="email" />
      {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}

      <Input label="Phone:" name="phone" value={phone} onChange={onInputChange} />
      {errors.phone && <p style={{ color: 'red' }}>{errors.phone[0]}</p>}

      <Button label={buttonText} type="submit" />
    </form>
  );
});

export default CustomerForm;
