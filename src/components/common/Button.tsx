import { twMerge } from "tailwind-merge";

type ButtonVariant = 'active' | 'cancel';

type TButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant: ButtonVariant;
};
const Button = (props: TButtonProps) => {
  const { children, className, variant, ...reset } = props;

  const variantStyles = {
    active: "bg-primaryColor text-white hover:bg-primaryHoverColor",
    cancel: "bg-cancelButtonColor text-white"
  };
  return (
    <>
      <button
        className={twMerge(
          `py-3.5 w-full flex justify-center items-center rounded-lg transition-colors`,
          variantStyles[variant],
          className
        )}
        {...reset}
      >
        {children}
      </button>
    </>
  );
}
export default Button