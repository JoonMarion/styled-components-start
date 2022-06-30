import styled from 'styled-components';
import ButtonS from '../ButtonS';

const WrapperS = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    & > ${ButtonS} {
        background-color: #6c5ce7;
    }
`;

export default WrapperS;
