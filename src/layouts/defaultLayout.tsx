import { Outlet } from 'react-router';

const DefaultLayout = () => {
  return (
    <div className='flex items-center justify-center bg-slate-50 font-pre'>
      <div className='h-screen w-full bg-white md:w-[425px] lg:w-[425px]'>
        <Outlet />
      </div>
    </div>
  );
};
export default DefaultLayout;
