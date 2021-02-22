import styled, { css } from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const linkCss = css`
    color: #808080;
    font-size: 45px;
    margin: 0 20px 0 20px;
    transition: .5s;
    transition-property: color;
    &:hover{
        color: #05a0e7;
    }
`;

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: Consolas;
    width: 100%;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media(max-width: 630px){
        display: none;
    }
`;
export const Text = styled.p`
    color: #000000;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
    width: 80%;
`;
export const Line = styled.span`
    width: 85%;
    border-bottom: 2px solid #6930c3;
    margin-bottom: 15px;
`;
export const ContactFooter = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;
export const Links = styled.a`
    text-decoration: none;
`;
export const InstagramIcon = styled(FaInstagram)`${linkCss}`;
export const EmailIcon = styled(AiOutlineMail)`${linkCss}`;
export const LinkedinIcon = styled(AiFillLinkedin)`${linkCss}`;
export const TwitterIcon = styled(AiOutlineTwitter)`${linkCss}`;