import React from 'react';
import preloader from "../../../assets/images/preloader-spinner.svg";
import styled from "styled-components";

type PreloaderPropsType = {
    width?: string
}

const Preloader = ({width}: PreloaderPropsType) => {
    return (
        <PreloaderWrapper>
            <img src={preloader} alt={'preloader'} width={width || '25px'}/>
        </PreloaderWrapper>
    );
};

export default Preloader;

const PreloaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`