import { Oval } from 'react-loader-spinner';
export const NoPositionSpinner = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#F59256"
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#F59256;"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
