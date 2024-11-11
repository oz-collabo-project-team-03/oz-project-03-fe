import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="flex justify-center items-center bg-slate-50 font-pre">
      <div className="lg:w-[425px] md:w-[425px] w-full h-screen bg-white">
        <header>헤더</header>
        <h1>이거 공통레이아웃ㅇ비니다</h1>
        <Outlet />
      </div>

    </div>
  );
}
export default DefaultLayout