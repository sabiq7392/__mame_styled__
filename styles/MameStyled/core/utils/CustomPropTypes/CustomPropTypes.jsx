export function requiredIf(
  { 
    notExistProps, 
    shouldType,
    isRequired,
  }, 
  props, 
  propName, 
  // eslint-disable-next-line no-unused-vars
  componentName, 
) {
  Object.keys(props).forEach((key) => {
    notExistProps.forEach((_notExistProp) => {
      if (key === _notExistProp) {
        console.error(`Cannot combined with props: ${_notExistProp}`);
      }
    });
  });

  if (typeof props[propName] !== shouldType) {
    console.error(`Must be ${shouldType}`);
  }
}
