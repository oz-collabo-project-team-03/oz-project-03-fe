import { useNavigate } from 'react-router-dom';

type UseValidationCheckProps = {
  showToast: (message: string) => void;
  validationMessage: string;
  nextRoute: string;
  validationFunction: () => boolean;
};

export const useValidationCheck = ({
  showToast,
  validationMessage,
  nextRoute,
  validationFunction,
}: UseValidationCheckProps) => {
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!validationFunction()) {
      showToast(validationMessage);
    } else {
      navigate(nextRoute);
    }
  };

  return { handleProceed };
};
