import React from "react";
import preloader from "../../../assets/images/preloader-spinner.svg";
import styled from "styled-components";

type PreloaderPropsType = {
  width?: string;
};

const Preloader = ({ width }: PreloaderPropsType) => {
  return (
    <PreloaderWrapper>
      <img src={preloader} alt={"preloader"} width={width || "50px"} />
    </PreloaderWrapper>
  );
};

export default Preloader;

const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
