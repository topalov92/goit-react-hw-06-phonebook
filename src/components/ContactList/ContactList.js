import React from "react";
import PropTypes from "prop-types";

import {
  ContactListStyled,
  ContactItemStyled,
  RemoveBtnStyled,
} from "./ContactList.styles";

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          {name} : {number}
          <RemoveBtnStyled type="button" onClick={() => onRemoveContact(id)}>
            Remove
          </RemoveBtnStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
