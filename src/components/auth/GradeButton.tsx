import { motion } from 'framer-motion';
import { useState } from 'react';
type GradeButtonProps = {
  grade: number;
  isSelected: boolean;
  onClick: () => void;
};

const GradeButton = ({ grade, isSelected, onClick }: GradeButtonProps) => (
  <motion.button
    className={`rounded-[10px] px-[34px] py-2 ${
      isSelected ? 'bg-white text-textMainColor' : 'text-textMainColor'
    }`}
    type='button'
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {grade}학년
  </motion.button>
);

export const GradeSelector = () => {
  const [selectedGrade, setSelectedGrade] = useState(1);

  return (
    <div className='relative h-12 w-full rounded-[10px] bg-unFocusColor/50 p-1'>
      <motion.div
        className='absolute bottom-1 top-1 rounded-[10px] bg-white'
        initial={false}
        animate={{
          x: (selectedGrade - 1) * 138 + 3, // 조정된 이동 거리
          width: 80, // 줄어든 너비
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <div className='relative z-10 flex justify-between px-2'>
        {[1, 2, 3].map((grade) => (
          <GradeButton
            key={grade}
            grade={grade}
            isSelected={selectedGrade === grade}
            onClick={() => setSelectedGrade(grade)}
          />
        ))}
      </div>
    </div>
  );
};
