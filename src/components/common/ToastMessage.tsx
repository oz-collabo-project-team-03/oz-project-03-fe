import { useEffect, useState } from 'react';

type ToastProps = {
  message: string;
  duration?: number; // 토스트 메시지가 표시되는 시간 (ms)
  onClose?: () => void;
};

const ToastMessage = ({
  message,
  duration = 3000, // 기본 3초
  onClose,
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
    <div className='animate-fade-in fixed bottom-32 left-1/2 z-50 -translate-x-1/2'>
      <div className='rounded bg-commuBgColor px-[14px] py-1 text-sm text-textMainColor'>
        {message}
      </div>
    </div>
  );
};
export default ToastMessage;
