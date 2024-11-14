import { googleLogo, kakaoLogo, naverLogo } from '../../assets/assets';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const LoginPage = () => {
  //소셜로그인 버튼
  const socialLogin = [
    { name: 'google', src: googleLogo, url: '/' },
    { name: 'kakao', src: kakaoLogo, url: '/' },
    { name: 'naver', src: naverLogo, url: '/' },
  ];

  return (
    <div className='flex h-lvh w-full items-center px-7 text-textMainColor'>
      <div className='w-full'>
        <div className='mb-[34px] flex flex-col gap-y-[9px]'>
          <h1 className='font-gMarket text-[40px] text-mainLogoTextColor'>
            수행쌤
          </h1>
          <p className='text-sm text-captionColor'>
            활동 주제 선정부터 후속계획까지 코칭하는
          </p>
        </div>
        <div className='mb-[38px] flex flex-col items-center gap-y-[14px]'>
          <Input type='text' placeholder='아이디 입력' />
          <Input type='text' placeholder='비밀번호 입력' />
          <Button variant='active'>로그인</Button>
        </div>
        <div className='mb-[34px] flex items-center justify-center gap-[20px] text-sm text-mainLogoTextColor'>
          <p className='cursor-pointer'>아이디 찾기</p>
          <span className='inline-block h-[14px] w-[1px] bg-inputBorderColor'></span>
          <p className='cursor-pointer'>비밀번호 찾기</p>
          <span className='inline-block h-[14px] w-[1px] bg-inputBorderColor'></span>
          <p className='cursor-pointer'>회원가입</p>
        </div>
        <div className='mt-5 flex flex-row justify-center gap-x-[36px]'>
          {socialLogin.map(({ name, src, url }) => (
            <a
              key={name}
              href={url}
              className='h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-[7px]'
            >
              <img
                src={src}
                alt={name}
                className='h-full w-full object-cover'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
