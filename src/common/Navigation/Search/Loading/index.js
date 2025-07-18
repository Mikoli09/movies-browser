import { Wrapper, Title, SpinnerWrapper } from "./styled";
import { ReactComponent as SpinnerIcon } from "./spinnerIcon.svg";

const Loading = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Title>{searchTerm}</Title>
      <SpinnerWrapper>
        <SpinnerIcon />
      </SpinnerWrapper>
    </Wrapper>
  );
};

export default Loading;
