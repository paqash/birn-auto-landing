import { dbUrl } from "../../core/constants";
import { MainButtonWrapper } from "../styled-components/app-components";

const MainButton = (props) => {
  const handleOnClick = () => {
    window.open(dbUrl, "_blank");
  };
  return (
    <MainButtonWrapper {...props} onClick={handleOnClick}>
      PRISTUPI BAZI
    </MainButtonWrapper>
  );
};

export default MainButton;
