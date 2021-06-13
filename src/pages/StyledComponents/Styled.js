import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.Title};
  color: red;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1220px;
  display: flex;
  justify-content: center;
  border: 1px solid #262626;
`;

const fadeIn = keyframes`
  0%{opacity:0}
  100%{opacity:1}
`;
export const ArticleBox = styled.div`
  width: 28%;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const Article = styled.div`
  color: ${(props) => props.color};
  transition: 0.3s ease-in-out;
  &:hover {
    ${(props) => (props.hover ? 'color:#000;' : '')}
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.primary};
  animation: ${rotate} 3s linear infinite;
`;

export const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    margin:0;
    padding:0;
    list-style:none;
    box-sizing:border-box;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  img{
    max-width:100%;
    object-fit: cover;
  }
`;
