import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import CheckBox from '../../components/common/CheckBox';
import Terms from '../../components/terms/Terms';
import { useToast } from '../../context/ToastContextProvider';
import { privacyTerms, thirdPartyTerms } from '../../mocks/termsData';
// 이용약관 페이지라는 뜻
const TermsOfService = () => {
  const [showPrivacyTerms, setShowPrivacyTerms] = useState(false);
  const [showThirdPartyTerms, setShowThirdPartyTerms] = useState(false);
  //동의 상태
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isThirdPartyChecked, setIsThirdPartyChecked] = useState(false);

  const { showToast } = useToast();

  const navigate = useNavigate();

  const togglePrivacyTerms = () => {
    setShowPrivacyTerms((prev) => !prev);
  };

  const toggleThirdPartyTerms = () => {
    setShowThirdPartyTerms((prev) => !prev);
  };

  const handleAllCheck = () => {
    const newChecked = !isAllChecked;
    setIsAllChecked(newChecked);
    setIsPrivacyChecked(newChecked);
    setIsThirdPartyChecked(newChecked);
  };

  const handlePrivacyCheck = (checked: boolean) => {
    setIsPrivacyChecked(checked);
    setIsAllChecked(checked && isThirdPartyChecked);
  };

  const handleThirdPartyCheck = (checked: boolean) => {
    setIsThirdPartyChecked(checked);
    setIsAllChecked(isPrivacyChecked && checked);
  };

  const handleNext = () => {
    if (!isAllChecked && !isPrivacyChecked && !isThirdPartyChecked) {
      showToast('필수 이용약관에 동의해주세요');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className='flex h-lvh w-full flex-col items-center px-[28px] pb-[30px] pt-[119px] text-textMainColor'>
      <div className='flex-grow'>
        <div className='flex flex-col justify-start py-[25px]'>
          <div className='mb-1 text-2xl font-semibold'>수행쌤</div>
          <div className='text-2xl font-semibold'>이용약관 동의</div>
          <p className='text-sm text-captionColor'>
            원활한 서비스 제공을 위해 약관 동의가 필요합니다.
          </p>
        </div>

        <div className='flex flex-col'>
          <CheckBox
            type='checkbox'
            checked={isAllChecked}
            onChange={handleAllCheck}
          >
            전체 동의합니다
          </CheckBox>
          <div className='ml-[26px] pb-[30px] text-sm text-captionColor'>
            <p>선택 시, 아래의 모든 필수 및 선택 항목에 동의가 적용됩니다. </p>
            <p>또는 필수 항목은 개별적으로도 동의할 수 있습니다. </p>
          </div>

          <div className='mb-[38px] flex flex-col gap-[30px] border-t border-captionColor pt-[30px]'>
            <div className='flex flex-col gap-3'>
              <div className='flex'>
                <CheckBox
                  type='checkbox'
                  checked={isPrivacyChecked}
                  onChange={(e) => handlePrivacyCheck(e.target.checked)}
                >
                  [필수] 개인정보 수집 및 이용동의
                </CheckBox>
                <button
                  className='ml-2 text-sm text-captionColor'
                  onClick={togglePrivacyTerms}
                >
                  {showPrivacyTerms ? '간략히' : '더보기'}
                </button>
              </div>
              <div className={`${showPrivacyTerms ? '' : 'hidden'}`}>
                <div
                  className={`h-[126px] overflow-hidden rounded-[5px] border border-unFocusColor p-[14px] ${showPrivacyTerms ? 'overflow-scroll' : ''}`}
                >
                  <Terms
                    title={privacyTerms.title}
                    description={privacyTerms.description}
                    sections={privacyTerms.sections.map((section) => ({
                      title: section.title,
                      description: section.description,
                      numberedPoints: section.numberedPoints || [],
                      // bulletPoints: section.bulletPoints,
                    }))}
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='flex'>
                <CheckBox
                  type='checkbox'
                  checked={isThirdPartyChecked}
                  onChange={(e) => handleThirdPartyCheck(e.target.checked)}
                >
                  [필수] 개인정보 제3자 제공에 동의
                </CheckBox>
                <button
                  className='ml-2 text-sm text-captionColor'
                  onClick={toggleThirdPartyTerms}
                >
                  {showThirdPartyTerms ? '간략히' : '더보기'}
                </button>
              </div>
              <div className={`${showThirdPartyTerms ? '' : 'hidden'}`}>
                <div
                  className={`h-[126px] w-full overflow-scroll rounded-[5px] border border-unFocusColor p-[14px] ${showThirdPartyTerms ? '' : 'hidden'}`}
                >
                  <Terms
                    title={thirdPartyTerms.title}
                    description={thirdPartyTerms.description}
                    sections={thirdPartyTerms.sections.map((section) => ({
                      title: section.title,
                      description: section.description,
                      bulletPoints: section.bulletPoints,
                      // numberedPoints: section.numberedPoints || [],
                    }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button variant='active' onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};
export default TermsOfService;
