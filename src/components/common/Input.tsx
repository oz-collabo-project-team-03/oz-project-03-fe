type TInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
};

const Input = (props: TInputProps) => {
  const { ...rest } = props;
  return (
    <>
      <input
        className='w-full rounded-[10px] border-0 px-5 py-[18px] outline-none ring-1 ring-inset ring-inputBorderColor placeholder:text-inputBorderColor focus:ring-2 focus:ring-inset focus:ring-inputFocusColor'
        {...rest}
      ></input>
    </>
  );
};
export default Input;
