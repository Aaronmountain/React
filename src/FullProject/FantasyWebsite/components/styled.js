import styled from 'styled-components';

export const Nav = styled.header`
  background-color: #262626;
  .container {
    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    border-radius: 50%;
  }
  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  a {
    color: var(--text-white);
  }
  a:hover {
    color: #61dafb;
  }
`;
