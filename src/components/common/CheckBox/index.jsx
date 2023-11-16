import React from "react";
import BasicText from "../BasicText";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

function CheckBox({ checked, onChange, text, color }) {
  return (
    <Container>
      <StyledInput checked={checked} type="checkbox" onChange={onChange} />
      {text ? <BasicText text={text} color={color} /> : <></>}
    </Container>
  );
}

export default CheckBox;
