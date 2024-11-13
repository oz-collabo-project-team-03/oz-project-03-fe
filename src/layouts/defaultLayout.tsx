import { Outlet } from 'react-router';
import { chatBubbleIcon } from '../assets/assets';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import StudentNavBar from '../components/common/StudentNavBar';
import TeacherNavBar from '../components/common/TeacherNavBar';
import CheckBox from '../components/common/checkBox';

const DefaultLayout = () => {
  return (
    <div className='flex items-center justify-center bg-slate-50 font-pre'>
      <div className='h-screen w-full bg-white md:w-[425px] lg:w-[425px]'>
        <Header
          title='경원핑의 어쩌고'
          rightElement={<img src={chatBubbleIcon} />}
        />
        <StudentNavBar />
        <TeacherNavBar />
        <Button variant='active'>저장쌈바리</Button>
        <Button variant='cancel'>저장쌈바리</Button>
        <CheckBox type='checkbox'>약관동의</CheckBox>
        <Outlet />
      </div>
    </div>
  );
};
export default DefaultLayout;
