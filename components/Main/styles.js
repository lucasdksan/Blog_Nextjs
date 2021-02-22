import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 5px 50px;
`;
export const Title = styled.h1`
    font-size: 30px;
    color: #6c757d;
    text-align: left;
    font-weight: 700;
    font-family: 'Times New Roman', Times, serif;  
`;
export const Text = styled.h4`
    font-size: 20px;
    color: #6c757d;
    text-align: justify;
    font-weight: 700;
    font-family: 'Times New Roman', Times, serif;  
`;