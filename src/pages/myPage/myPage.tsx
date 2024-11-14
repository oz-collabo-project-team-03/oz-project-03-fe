import { editIcon, stDefaultIcon } from '../../assets/assets';
import postTestImg from '../../../src/assets/profileEdit/postTestImg.png';

const MyPage = () => {
  // 프로필 정보
  const profileInfo = {
    nickName: '닉네임',
    dream: '희망진로, 흥미',
    text: '상태 메세지',
    post: 2,
    like: 10,
    comment: 18,
  };

  // 커뮤니티 정보
  const communityInfo = [
    { label: '게시물', value: profileInfo.post },
    { label: '좋아요', value: profileInfo.like },
    { label: '작성 댓글', value: profileInfo.comment },
  ];

  // 게시글 메인 이미지
  const postImg = [
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
    postTestImg,
  ];

  return (
    <div className='flex w-full justify-center overflow-y-scroll text-textMainColor'>
      <div className='flex flex-col items-center gap-9 py-12'>
        <ul className='flex flex-col gap-2'>
          <li className='relative h-[92px] w-[92px] rounded-full'>
            <img
              src={stDefaultIcon}
              alt='학생 기본 이미지'
              className='h-full w-full'
            />
            <img
              src={editIcon}
              alt='프로필 수정 아이콘'
              className='absolute bottom-0 right-0'
            />
          </li>
          <li className='flex flex-col items-center'>
            <p className='text-xl font-bold text-textMainColor'>
              {profileInfo.nickName}
            </p>
            <p className='mb-2 text-captionColor'>{profileInfo.dream}</p>
            <p className='text-[13px] font-medium text-textMainColor'>
              {profileInfo.text}
            </p>
          </li>
        </ul>
        <ul className='flex items-center gap-4'>
          {communityInfo.map((info, index) => (
            <li
              key={index}
              className='shadow-profileInfoShadow flex h-[50px] w-[83px] flex-col items-center justify-center rounded-[10px]'
            >
              <p className='text-[13px] font-normal text-textMainColor'>
                {info.label}
              </p>
              <p className='text-profilePointTextColor text-[15px] font-bold'>
                {info.value}
              </p>
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-3'>
          <p className='text-left text-xs font-medium text-captionColor'>
            내 게시글
          </p>
          <div className='flex w-[311px] flex-wrap gap-[10px]'>
            {postImg.map((img) => (
              <div
                key={img}
                className='border-postBorderColor h-[97px] w-[97px] overflow-hidden border'
              >
                <img
                  src={img}
                  alt='게시글 이미지'
                  className='h-full w-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
