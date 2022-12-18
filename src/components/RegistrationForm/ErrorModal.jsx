
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import { Div, Text } from './ErrorModal.styled';

const ErrorModal = () => {
    const errorDB = useSelector(selectError);
    
    
  return (
    <Div>
      <Text>{String(errorDB)}</Text>
    </Div>
  );
};

export default ErrorModal;
