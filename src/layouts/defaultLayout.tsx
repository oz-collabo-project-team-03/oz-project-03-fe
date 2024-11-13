import { Outlet } from "react-router";
import { chatBubbleIcon } from "../assets/assets";
import Header from "../components/common/Header";
import StudentNavBar from "../components/common/StudentNavBar";
import TeacherNavBar from "../components/common/TeacherNavBar";

const DefaultLayout = () => {

  return (
    <div className="flex justify-center items-center bg-slate-50 font-pre">
      <div className="lg:w-[425px] md:w-[425px] w-full h-screen bg-white">
        <Header title="경원핑의 어쩌고" rightElement={<img src={chatBubbleIcon} />} />
        <StudentNavBar />
        <TeacherNavBar />
        <Outlet />
      </div>
    </div>
  );
}
export default DefaultLayout