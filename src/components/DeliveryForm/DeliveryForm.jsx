import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import './DeliveryForm.scss';

const DeliveryForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register('Firstname', {
          required: 'This input is required.',
          minLength: { value: 3, message: 'This input exceed 3 more characters' },
          maxLength: 80,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Firstname"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            : null;
        }}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register('Lastname', {
          required: 'This input is required.',
          minLength: { value: 3, message: 'This input exceed 3 more characters' },
          maxLength: 100,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Lastname"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            : null;
        }}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', {
          required: 'This input is required.',
          pattern: { value: /^\S+@\S+$/i, message: 'Email is not correct' },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Email"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            : null;
        }}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register('Mobilenumber', {
          required: 'This input is required.',
          pattern: {
            value: /\d+/,
            message: 'This input is number only.',
          },
          minLength: 6,
          maxLength: 12,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="Mobilenumber"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            : null;
        }}
      />
      <input
        type="text"
        placeholder="Delivery adress"
        {...register('adress', {
          required: true,
          minLength: { value: 5, message: 'This input exceed 5 more characters' },
          maxLength: 80,
        })}
      />

      <input type="submit" className="button form__submit" />
    </form>
  );
};

export default DeliveryForm;
