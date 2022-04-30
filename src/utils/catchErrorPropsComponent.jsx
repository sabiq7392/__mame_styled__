import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

export default function CatchErrorPropsComponent({ props, component, type }) {
  useEffect(() => {
    if (Object.keys(props).length !== 0) {
      ReactDOM.hydrate(
        <ErrorMessage description="There was an unexpected props on: " props={props} component={component} type={type} />, 
        document.querySelector('body'),
      );
    } 
  })
}
