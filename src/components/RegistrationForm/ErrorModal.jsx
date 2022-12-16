import {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import { Div, Text } from './ErrorModal.styled';

const ErrorModal = () => {
    const errorDB = useSelector(selectError);
    console.log(errorDB);
   
 
  return (
    <Div>
      <Text>{errorDB}</Text>
    </Div>
  );
};

export default ErrorModal;
