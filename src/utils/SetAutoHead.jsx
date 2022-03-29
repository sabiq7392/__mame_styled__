import { useEffect, useState } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../../styles/MameStyled/core/HtmlTag.styled';

export default function SetAutoHead(id, ) {
  const [head, setHead] = useState();

  useEffect(() => {
    const listHead = [H1, H2, H3, H4, H5, H6];
    const element = document.getElementById(id);
    const getFirstHeader = element.parentElement.parentElement.firstElementChild.firstElementChild.tagName;
    const firstHeader = element.parentElement.parentElement.firstElementChild.firstElementChild;

    for (let i = 1; i <= 6; i++) {
      if (getFirstHeader.toLowerCase() === `h${i}`) {
        setHead(listHead[i]);
      } 
    }

    console.log({ tagName: getFirstHeader, element: firstHeader, childhead: head });

  }, [id, head]);

  return head;
}
