import React from "react";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import styled from "styled-components";

const Save = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button className="grey">
          My Saves <ExpandMoreRoundedIcon className="icon" />
        </Button>
        <Button className="red"> Save</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .red {
    background: #e50123;
    color: #fff;
    flex: 0;
  }
  .icon {
    margin-left: auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
  background: #efefef;
  border-radius: 1rem;
  overflow: hidden;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0.6rem 1rem;
  color: #666;
  font-size: 0.8rem;
  flex: 1;
  cursor: pointer;
`;

export default Save;
