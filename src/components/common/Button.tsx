import { twMerge } from "tailwind-merge";

type TButtonProps = React.ComponentPropsWithoutRef<"button">;
const Button = (props: TButtonProps) => {
  const { children, className, ...reset } = props;
  return (
    <>
      <button
        className={twMerge(`py-[14px] w-full flex justify-center items-center`, className)}
        {...reset}
      >
        {children}
      </button>
    </>
  );
}
export default Button