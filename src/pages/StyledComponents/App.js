import { ThemeProvider } from 'styled-components';
import { Title, Container, Article, ArticleBox, SubTitle } from './Styled.js';
import './App.css';
const theme = {
  color: { primary: '#789987', seconary: '#000' },
  size: { Title: '2.5rem' },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Title className='my-1'>CSS Styled Components</Title>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Container className='mx-auto p-1'>
          <ArticleBox className='my-1 mx-1'>
            <Article color='red'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, repellendus? Architecto,
              expedita repellendus, vel iusto nihil dignissimos voluptatibus consectetur, doloribus
              temporibus quasi perspiciatis aspernatur assumenda nostrum rerum sapiente earum
              ducimus. Quaerat excepturi, fuga harum error perferendis possimus in iusto? Error
              dolore mollitia quas quisquam, veritatis tenetur deleniti dolores blanditiis
              exercitationem debitis laudantium dignissimos dolorum nam, ipsa molestias unde vitae
              repellendus? Vitae, quidem?
            </Article>
          </ArticleBox>
          <ArticleBox className='my-1 mx-1'>
            <Article color='green' hover>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, repellendus? Architecto,
              expedita repellendus, vel iusto nihil dignissimos voluptatibus consectetur, doloribus
              temporibus quasi perspiciatis aspernatur assumenda nostrum rerum sapiente earum
              ducimus. Quaerat excepturi, fuga harum error perferendis possimus in iusto? Error
              dolore mollitia quas quisquam, veritatis tenetur deleniti dolores blanditiis
              exercitationem debitis laudantium dignissimos dolorum nam, ipsa molestias unde vitae
              repellendus? Vitae, quidem? Repellat placeat, laboriosam pariatur perferendis hic
              impedit ex nobis deleniti labore totam esse sit, qui, iste dolore! Laborum molestiae
              impedit magni nemo veniam
            </Article>
          </ArticleBox>
          <ArticleBox className='my-1 mx-1'>
            <Article color='yellow'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, repellendus? Architecto,
              expedita repellendus, vel iusto nihil dignissimos voluptatibus consectetur, doloribus
              temporibus quasi perspiciatis aspernatur assumenda nostrum rerum sapiente earum
              ducimus. Quaerat excepturi, fuga harum error perferendis possimus in iusto? Error
              dolore mollitia quas quisquam, veritatis tenetur deleniti dolores blanditiis
              exercitationem debitis laudantium dignissimos dolorum nam, ipsa molestias unde vitae
              repellendus? Vitae, quidem? Repellat placeat, laboriosam pariatur perferendis hic
              impedit ex nobis deleniti labore totam esse sit, qui, iste dolore! Laborum molestiae
              impedit magni nemo veniam
            </Article>
          </ArticleBox>
        </Container>
        <Container className='mx-auto p-1 my-1'>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente illum odio vitae
            repellendus suscipit nihil ut magnam exercitationem, voluptate tenetur id architecto
            aspernatur distinctio quo totam inventore corporis quis. Neque?
          </SubTitle>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente illum odio vitae
            repellendus suscipit nihil ut magnam exercitationem, voluptate tenetur id architecto
            aspernatur distinctio quo totam inventore corporis quis. Neque?
          </SubTitle>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente illum odio vitae
            repellendus suscipit nihil ut magnam exercitationem, voluptate tenetur id architecto
            aspernatur distinctio quo totam inventore corporis quis. Neque?
          </SubTitle>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
