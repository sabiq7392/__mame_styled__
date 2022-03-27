import { Span,  P } from '../../styles/MameStyled/core/HtmlTag.styled';
import ReactDOM from 'react-dom';

export default function catchErrorPropsComponent ({ props, component, type }) {
  if (Object.keys(props).length !== 0) {
    ReactDOM.hydrate(
      <ErrorMessage props={props} component={component} type={type} />, 
      document.querySelector('body'),
    );
  } 
};

function ErrorMessage({ props, component, type }) {
  const css = { 
    color: 'white', 
    display: 'flex',  
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    height: '100vh',
  };

  return (
    <>
      <P debug css={css}>
        <Span>
          <Span>There was an unexpected props on: </Span>
          <Span css={{ display: 'grid', gap: 5 }}>
            <ListInfoError title="Tag" value={component} />
            <ListInfoError title="Props" value={JSON.stringify(props)} />
            <ListInfoError title="Type" value={type} />
          </Span>
        </Span>
      </P>
    </>
  );
}

function ListInfoError({ title, value }) {
  return (
    <Span>
      <Span css={{ color: 'red' }}>{title}: </Span><Span>{value}</Span>
    </Span>
  );
}
