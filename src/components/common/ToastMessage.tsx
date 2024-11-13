import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  duration?: number; // 토스트 메시지가 표시되는 시간 (ms)
  onClose?: () => void;
};

const ToastMessage = ({
  message,
  duration = 3000, // 기본 3초
  onClose
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="px-[14px] py-1 bg-commuBgColor text-textMainColor text-sm rounded ">
        {message}
      </div>
    </div>
  );
}
export default ToastMessage