import { Button, Svg } from './IconButton.styled';
export const IconButton = ({ iconRoute, handlerFunction, color }) => {
  return (
    <Button onClick={handlerFunction} color={color}>
      <Svg>
        <use href={iconRoute}></use>
      </Svg>
    </Button>
  );
};
