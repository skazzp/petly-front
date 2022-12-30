import { Button, Svg } from './IconButton.styled';
export const IconButton = ({
  iconRoute,
  handlerFunction,
  color,
  size = '30px',
}) => {
  return (
    <Button onClick={handlerFunction} color={color}>
      <Svg size={size}>
        <use href={iconRoute}></use>
      </Svg>
    </Button>
  );
};
