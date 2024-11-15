import { motion } from 'framer-motion';
import { thumbsUPIcon } from '../../assets/assets';
import Button from '../../components/common/Button';
import Celebration from '../../components/common/ConfettiCelebration';

const SignupCompletePage = () => {
  // 애니메이션을 위한 초기 상태 및 변형 설정
  const imageVariants = {
    hidden: { opacity: 0, rotate: 0, x: -50 },
    visible: {
      opacity: 1,
      rotate: [0, -10, 10, 0], // 좌우로 흔들리는 애니메이션
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='flex h-svh flex-col items-center justify-center px-[28px] py-[30px]'>
      <Celebration />
      <motion.div variants={imageVariants} initial='hidden' animate='visible'>
        <img src={thumbsUPIcon} alt='thumbs up icon' />
      </motion.div>

      <motion.div
        className='mb-7 mt-2 flex flex-col items-center justify-center gap-2 text-textMainColor'
        variants={textVariants}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <p>수행쌤초보님</p>
        <p>회원 가입이 완료되었습니다!</p>
        <p className='text-sm text-captionColor'>
          새로운 학습 여정을 함께 시작해 볼까요?
        </p>
      </motion.div>

      <Button variant='active'>수행평가 보러가기</Button>
    </div>
  );
};

export default SignupCompletePage;
