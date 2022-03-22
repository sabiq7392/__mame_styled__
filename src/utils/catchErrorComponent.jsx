import { Div, Span, H1 } from '../../styles/MameStyled/core/HtmlTag.styled';
import ReactDOM from 'react-dom';

const catchErrorComponent = ({props, component}) => {
  if (Object.keys(props).length !== 0) {
    ReactDOM.render(
    <Div>
      <H1 debug css={{ color: 'white', display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
        There was an unexpected props on tag 
        <Span css={{ color: 'red' }}>{component}: {JSON.stringify(props)}</Span>
        </H1>
    </Div>, 
    document.querySelector('body'));
  }
}

export default catchErrorComponent;