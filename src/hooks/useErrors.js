import { useCallback, useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const removeError = useCallback((fieldName) => {
    setErrors((prev) => prev.filter((error) => error.field !== fieldName));
  }, []);

  const addError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) removeError(field);

    setErrors((prev) => [...prev, { field, message }]);
  }, [errors, removeError]);

  const getErrorMessageByFieldName = useCallback(
    (fieldName) => errors.find((error) => error.field === fieldName)?.message,
    [errors],
  );

  const isValidToSubmit = useCallback(() => errors.length === 0, [errors]);

  return {
    removeError, addError, getErrorMessageByFieldName, isValidToSubmit,
  };
}
