import { useState } from 'react';
import {
  roleStudentActive,
  roleStudentUnActive,
  roleTeacherActive,
  roleTeacherUnActive,
} from '../../assets/assets';
import Button from '../../components/common/Button';
import { useToast } from '../../context/ToastContextProvider';
import { useValidationCheck } from '../../hooks/useValidateAndProceed';

type TRole = 'student' | 'teacher' | null;

const RoleSelect = () => {
  const [isStudentHovered, setIsStudentHovered] = useState(false);
  const [isTeacherHovered, setIsTeacherHovered] = useState(false);
  const [selectedRole, setSelectedRole] = useState<TRole>(null);

  const { showToast } = useToast();

  const handleRoleClick = (role: TRole) => {
    setSelectedRole(role);
  };

  const isRoleActive = (role: 'student' | 'teacher'): boolean => {
    return (
      selectedRole === role ||
      (role === 'student' ? isStudentHovered : isTeacherHovered)
    );
  };

  const { handleProceed } = useValidationCheck({
    showToast,
    validationMessage: '역할을 선택해주세요',
    nextRoute: `/signup?role=${selectedRole}`,
    validationFunction: () => selectedRole !== null,
  });

  return (
    <div className='flex h-svh flex-col justify-center px-[28px] py-[30px] pt-[119px]'>
      <div className='flex-grow'>
        <h1 className='mb-1 font-gMarket text-[43px] text-mainLogoTextColor'>
          수행쌤
        </h1>
        <div className='mb-[50px] text-lg text-captionColor'>
          <p>회원가입을 원하는</p>
          <p>사용자 유형을 선택해주세요</p>
        </div>
        <div className='flex gap-2'>
          <div
            className={`flex w-full cursor-pointer flex-col justify-center gap-[22px] rounded-xl px-8 py-5 ${
              isRoleActive('student')
                ? 'bg-primaryColor/15'
                : 'bg-unFocusColor/20'
            }`}
            onMouseEnter={() => setIsStudentHovered(true)}
            onMouseLeave={() => setIsStudentHovered(false)}
            onClick={() => handleRoleClick('student')}
          >
            <img
              src={
                isRoleActive('student')
                  ? roleStudentActive
                  : roleStudentUnActive
              }
              alt='학생 회원'
            />
            <Button
              variant='cancel'
              className={`font-semibold ${
                isRoleActive('student')
                  ? 'bg-primaryHoverColor'
                  : 'hover:bg-primaryHoverColor'
              }`}
            >
              학생 회원
            </Button>
          </div>
          <div
            className={`flex w-full cursor-pointer flex-col justify-center gap-[22px] rounded-xl px-8 py-5 ${
              isRoleActive('teacher')
                ? 'bg-primaryColor/15'
                : 'bg-unFocusColor/20'
            }`}
            onMouseEnter={() => setIsTeacherHovered(true)}
            onMouseLeave={() => setIsTeacherHovered(false)}
            onClick={() => handleRoleClick('teacher')}
          >
            <img
              src={
                isRoleActive('teacher')
                  ? roleTeacherActive
                  : roleTeacherUnActive
              }
              alt='선생님 회원'
            />
            <Button
              variant='cancel'
              className={`font-semibold ${
                isRoleActive('teacher')
                  ? 'bg-primaryHoverColor'
                  : 'hover:bg-primaryHoverColor'
              }`}
            >
              교사 회원
            </Button>
          </div>
        </div>
      </div>
      <Button variant='active' className='mt-auto' onClick={handleProceed}>
        다음
      </Button>
    </div>
  );
};

export default RoleSelect;
