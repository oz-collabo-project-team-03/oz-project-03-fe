type TInputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};

const Input = (props: TInputProps) => {
  const { ...rest } = props;
  return (
    <>
      <input className="w-full rounded-[10px] px-5 py-[18px] focus:ring-inputFocusColor ring-inputBorderColor ring-1 ring-inset focus:ring-2 focus:ring-inset outline-none" {...rest}></input>
    </>
  );
}
export default Input