import ErrorMessage from './ErrorMessage';
import ReactDOM from 'react-dom';

export const mustBeString = (props, propName, componentName) => {
  checkPropTypes({ 
    type: 'string', props, propName, componentName,
  });
};

export const mustBeStringRequired = (props, propName, componentName) => {
  checkPropTypes({ 
    type: 'string', isRequired: true, props, propName, componentName
  });
}

export const mustBeNumber = (props, propName, componentName) => {
  checkPropTypes({ 
    type: 'number', props, propName, componentName
  });
};

function checkPropTypes({ type, isRequired, props, propName, componentName }) {
  componentName = componentName || 'Anonymous';

  if (isRequired) {
    if (!props[propName]) {
      ReactDOM.hydrate(
        <ErrorMessage 
          description="Type prop error: is required" 
          component={componentName} 
          propName={propName}
          isRequired={'true'}
        />, 
        document.querySelector('body')
      );
    }
  } else {
    if (props[propName]) {
      let value = props[propName];
  
      if (typeof value === type) {
        return;
      }
  
      ReactDOM.hydrate(
        <ErrorMessage 
          description="Type prop error" 
          component={componentName} 
          propName={propName}
          type={typeof value} 
          typeShouldBe={type} 
        />, 
        document.querySelector('body')
      );
    }
  }
}

