// textNode.js

import { useState } from 'react';
import Node from './Node';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const textbox = document.getElementById("expandableTextBox");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    textbox.style.height = "auto";
    textbox.style.height = textbox.scrollHeight + "px";
  };

  return (
    <Node id={id} type="Text" targetHandles={0} sourceHandles={1}>
      <textarea name="text" id="expandableTextBox" rows="1" cols="30"  type="text"
        className='textBox'
        value={currText}
        placeholder='Start typing..'
        onChange={handleTextChange}>
      </textarea>
    </Node>
  );
}
