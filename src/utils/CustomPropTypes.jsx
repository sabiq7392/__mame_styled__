export function requiredIf(props, propName, componentName, { notExistProps, shouldType }) {
  Object.keys(props).forEach((key, index) => {
    notExistProps.forEach((_notExistProp) => {
      if (key === _notExistProp) {
        console.error(`Cannot combined with props: ${_notExistProp}`);
      }
    })
  })
  
  // if (props[notExistProps]) {
  //   return new Error(`Cannot combined with props: ${notExistProps}`)
  // } 
  // if (!(typeof props[propName] === shouldType && props[propName])) {
  //   return new Error("Must be string")
  // }
}

// notExistProps.forEach((_notExistProp) => {
//   console.log(props[_notExistProp])
//   if (props[_notExistProp]) {
//     return new Error(`Cannot combined with props: ${notExistProps}`)
//   } 
//   if (!(typeof props[propName] === shouldType && props[propName])) {
//     return new Error("Must be string")
//   }
// });
