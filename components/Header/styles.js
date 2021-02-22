import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const IconsStyles = css`
    font-size: 30px;
    color: #6930c3;
    margin-left: 10px;
    margin-right: 10px;
    &:hover{
        color: #5390d9;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    padding: 10px 100px;
`;
export const ContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ContentIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const TitleMainName = styled(motion.h1)`
    font-size: 42px;
    text-align: center;
    font-weight: bold;  
    font-style: italic;
    color: #000;
`;
export const TitleName = styled.h3`
    font-size: 20px;
    text-align: center;
    font-weight: bold;  
    font-style: italic;
    color: #000;
`;
export const Link = styled.a`
    &:hover{
        cursor: pointer;
    }
`;
export const InstagramIcon = styled(FaInstagram)`${IconsStyles}`;
export const EmailIcon = styled(AiOutlineMail)`${IconsStyles}`;
export const LinkedinIcon = styled(AiFillLinkedin)`${IconsStyles}`;
export const TwitterIcon = styled(AiOutlineTwitter)`${IconsStyles}`;