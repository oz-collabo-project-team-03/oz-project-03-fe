import { useNavigate } from "react-router-dom";
import { backIcon } from "../../assets/assets";

type HeaderProps = {
  title: string;
  rightElement?: React.ReactNode;
  preventBack?: boolean; // 특별한 경우 뒤로가기를 막아야 할 때 사용
};

const Header = ({
  title,
  rightElement,
  preventBack = false
}: HeaderProps) => {

  const navigate = useNavigate();

  const handleBack = () => {
    if (!preventBack) {
      navigate(-1);
    }
  };
  return (
    <header className="flex items-center justify-between py-6 px-2 bg-white">
      <div className="flex items-center">
        <button
          onClick={handleBack}
          className="mr-2"
        >
          <img src={backIcon} alt="" />
        </button>

        <h1 className="text-xl font-medium">
          {title}
        </h1>
      </div>

      {/* 오른쪽 영역: rightElement가 있으면 표시, 없으면 빈 공간 */}
      <div className="w-6 cursor-pointer">
        {rightElement}
      </div>
    </header>
  );
}
export default Header