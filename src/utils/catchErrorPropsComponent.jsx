import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';

export default function catchErrorPropsComponent ({ props, component, type }) {
  if (Object.keys(props).length !== 0) {
    ReactDOM.hydrate(
      <ErrorMessage description="There was an unexpected props on: " props={props} component={component} type={type} />, 
      document.querySelector('body'),
    );
  } 
}
