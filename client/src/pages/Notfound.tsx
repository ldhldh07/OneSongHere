import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <>
      <div>지정되어 있지 않은 경로입니다!</div>
      <div>메인페이지로 돌아가주세요</div>
      <Link to="/">메인 페이지</Link>
    </>
  );
}
