import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function removeError(fieldName) {
    setErrors((prev) => prev.filter((error) => error.field !== fieldName));
  }

  function addError({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) removeError(field);

    setErrors((prev) => [...prev, { field, message }]);
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return { removeError, addError, getErrorMessageByFieldName };
}
