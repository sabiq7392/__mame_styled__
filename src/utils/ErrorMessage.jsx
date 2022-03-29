import { Span, P } from '../../styles/MameStyled/core/HtmlTag.styled';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function ErrorMessage({ props, component, type, typeShouldBe, description, propName, isRequired }) {
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
          <Span>{description}</Span>
          <Span css={{ display: 'grid', gap: 5 }}>
            <ListInfoError title="Component" value={component} />
            <ListInfoError title="Prop Name" value={propName} />
            { props ? <ListInfoError title="Props" value={JSON.stringify(props)} /> : null }
            { type ? <ListInfoError title="Type" value={type} /> : null }
            { typeShouldBe ? <ListInfoError title="Type Should Be" value={typeShouldBe} /> : null }
            { isRequired ? <ListInfoError title="Is Required" value={isRequired} /> : null }
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

ListInfoError.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.any.isRequired
};


