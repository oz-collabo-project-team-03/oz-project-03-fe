import { useId } from 'react';

type TCheckBoxProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'type' | 'id'
> & {
  type: 'checkbox';
};

const CheckBox = (props: TCheckBoxProps) => {
  const uid = useId();
  const { children, ...rest } = props;
  return (
    <div className='flex items-center'>
      <input
        id={uid}
        className='size-4 rounded border-[#DEDEDE] text-primaryHoverColor focus:ring-transparent'
        {...rest}
      />
      <label
        htmlFor={uid}
        className='ml-[10px] min-w-0 flex-1 text-textMainColor'
      >
        {children}
      </label>
    </div>
  );
};
export default CheckBox;
