export const selectStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: '0.875rem',
      color: 'hsl(var(--text-foreground))',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
      paddingBottom: 12,
      cursor: 'pointer',
      borderBottom: '1px solid #E5E7EB',
      backgroundColor: state.isSelected
        ? 'hsl(var(--muted))'
        : state.isFocused
        ? 'hsl(var(--muted))'
        : 'hsl(var(--background))',
    }),
    control: (_: any, state: any) => ({
      display: 'flex',
      alignItems: 'center',
      // minHeight: 50,
      backgroundColor: state?.isDisabled ? 'hsl(var(--muted))' : 'hsl(var(--background))',
      borderRadius: 5,
      border: '1px solid #D1D5DB',
      borderColor: state?.isDisabled ? '#D4D8DD' : state.isFocused ? 'hsl(var(--primary))' : '#D1D5DB',
      boxShadow:
        state.menuIsOpen &&
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? '#9CA3AF' : '#cccccc',
      '&:hover': {
        color: '#9CA3AF',
      },
    }),
    clearIndicator: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused ? '#9CA3AF' : '#cccccc',
      padding: 0,
      cursor: 'pointer',
  
      '&:hover': {
        color: '#9CA3AF',
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: 5,
      border: '1px solid #E5E7EB',
      backgroundColor: 'hsl(var(--background))',
      boxShadow:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    }),
    valueContainer: (provided: any, _: any) => ({
      ...provided,
      paddingLeft: 16,
    }),
    singleValue: (provided: any, _: any) => ({
      ...provided,
      fontSize: '0.875rem',
      color: 'hsl(var(--text-foreground))',
    }),
    multiValue: (provided: any, _: any) => ({
      ...provided,
      backgroundColor: 'hsl(var(--primary))',
      borderRadius: 9999,
      overflow: 'hidden',
      color: '#000',
      boxShadow:
        '0 0px 3px 0 rgba(0, 0, 0, 0.1), 0 0px 2px 0 rgba(0, 0, 0, 0.06)',
    }),
    multiValueLabel: (provided: any, state: any) => ({
      ...provided,
      paddingLeft: state.isRtl ? 0 : 12,
      paddingRight: state.isRtl ? 12 : 0,
      fontSize: '0.875rem',
      color: '#ffffff',
    }),
    multiValueRemove: (provided: any, _: any) => ({
      ...provided,
      paddingLeft: 6,
      paddingRight: 6,
      color: '#ffffff',
      cursor: 'pointer',
  
      '&:hover': {
        backgroundColor: 'hsl(var(--primary))',
        color: '#F3F4F6',
      },
    }),
    placeholder: (provided: any, _: any) => ({
      ...provided,
      fontSize: '0.875rem',
      color: 'rgba(107, 114, 128, 0.7)',
    }),
    noOptionsMessage: (provided: any, _: any) => ({
      ...provided,
      fontSize: '0.875rem',
      color: 'rgba(107, 114, 128, 0.7)',
    }),
  };
  