// llmNode.js

import Node from './Node';
export const LLMNode = ({ id, data }) => {

  return (
    <Node id={id} type="LLM" targetHandles={2} sourceHandles={1}>
      <span>This is a LLM.</span>
    </Node>
  );
}
