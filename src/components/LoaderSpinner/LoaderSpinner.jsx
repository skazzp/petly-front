import { Oval } from 'react-loader-spinner';
export const LoaderSpinner = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#F59256"
      wrapperStyle={{
        position: 'fixed',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#F59256;"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
