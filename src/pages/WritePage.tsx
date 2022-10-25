import WriteContainer from "@/containers/write/WriteContainer";
import PageTemplate from "@/templates/PageTemplate";

const MainPage = () => {
  //TODO : Strict Mode 의 useEffect Rendering과정에 따른 api 호출 이중방지 모듈 개발필요

  return (
    <PageTemplate>
      <WriteContainer />
    </PageTemplate>
  );
};
export default MainPage;
