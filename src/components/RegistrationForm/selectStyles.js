export const selectStyles = transactionType => {
  return {
    control: provided => ({
      ...provided,

      border: 'none',
      borderRadius: 0,
      background: 'transparent',
      width: 'auto',
      boxShadow: 'none',
      '&:hover': {},
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    valueContainer: provided => ({
      ...provided,
      height: '100',
      padding: 0,
      margin: 0,
    }),
    input: provided => ({
      ...provided,
      padding: 0,
      margin: 0,
      // alignItems: 'flex-start',
    }),
    placeholder: provided => ({
      ...provided,
      color: 'rgba(17, 17, 17, 0.6)',
      testContent: 'City',
      margin: 0,
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
    }),
    singleValue: provided => ({
      ...provided,
      color: '#000000',
      testContent: 'City',
      margin: 0,
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
    }),

    dropdownIndicator: provided => ({
      ...provided,
      display: 'none',
      color: '#000000',
      alignItems: 'flex-start',
      '&:hover': {
        color: '#000000',
      },

      '&>svg': {
        with: 18,
        height: 9,
      },
    }),

    menu: provided => ({
      ...provided,
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',

      borderRadius: 20,
      overflow: 'hidden',
    }),

    menuList: provided => ({
      ...provided,
      background: 'transparent',
      borderRadius: 20,
      cursor: 'pointer',
      backdropFilter: 'blur(20px)',
    }),

    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      background: isFocused || isSelected ? '#ffffff' : 'transparent',
      color: isFocused || isSelected ? 'rgba(17, 17, 17, 0.6)' : '#000000',
      cursor: 'pointer',
      testContent: 'City',
      margin: 0,
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
    }),
  };
};
