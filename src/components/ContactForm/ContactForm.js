import React, { useState } from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import { Input } from '../Input/Input';
import { FormStyled, SubmitButtonStyled } from './ContactForm.styles';

export const ContactForm = ({onSubmit}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputValues = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }

    setId(uuidv4())
  };

  const resetForm = () => {
    setId('');
    setName('');
    setNumber('');
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit({id, name, number});
    resetForm();
  };

  return (
    <FormStyled onSubmit={submitForm}>
      <Input
        id={uuidv4()}
        type={'text'}
        label={'Name'}
        name={'name'}
        placeholder={'Jason Born'}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={handleInputValues}
        title={
          "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        }
        required={true}
      />

      <Input
        id={uuidv4()}
        type={'tel'}
        label={'Number'}
        name={'number'}
        placeholder={'+44-787-123-45-67'}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={number}
        onChange={handleInputValues}
        title={
          'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
        }
        required={true}
      />

      <SubmitButtonStyled type="submit">Add contact</SubmitButtonStyled>
    </FormStyled>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};