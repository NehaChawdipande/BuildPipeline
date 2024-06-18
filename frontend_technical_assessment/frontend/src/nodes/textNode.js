// textNode.js

import { useState } from 'react';
import Node from './Node';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <Node id={id} type="Text" targetHandles={0} sourceHandles={1}>
    <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
  </Node>
  );
}
