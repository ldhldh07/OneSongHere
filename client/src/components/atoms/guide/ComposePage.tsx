import ComposeImg from './ComposeImg';
import './ComposePage.scss';

const ComposePage = () => {
  return (
    <div className="compose-page">
      <p className="compose-page__title">작곡</p>
      <ComposeImg />
      <p className="compose-page__content">
        작곡 페이지는 1. 참여중인 프로젝트와 참여할 수 있는 다양한 프로젝트를
        보여줍니다. 여기에서 2. &apos;생성하기&apos; 버튼을 통해 자신만의 새로운
        스튜디오를 생성할 수 있습니다.
      </p>
      <p className="compose-page__list">
        3. 페이지 내 태그 버튼이나 검색어를 통해 원하는 프로젝트를 쉽게 찾을 수
        있는 필터링 기능을 제공합니다.
      </p>
      <p className="compose-page__list">
        스튜디오 생성 시 제목, 장르, 참여 인원 제한, 한 명당 작곡 가능한 길이
        등을 조절할 수 있습니다.
      </p>
      <hr className="compose-page--hr" />
    </div>
  );
};

export default ComposePage;
