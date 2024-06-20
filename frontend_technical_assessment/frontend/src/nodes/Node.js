import React from 'react';
import { Handle, Position } from 'reactflow';
// import { useStore } from '../store';
// import { shallow } from 'zustand/shallow';
import './Node.scss';

/**\
 * @function Node 
 * @argument id unique id of the node - number
 * @argument type type of the node - string
 * @argument targetHandles target handles to render - array of string labels
 * @argument sourceHandles source handles to render - array of string labels
 * @argument children to be rendered. - JSX - custom field and functionality
 */

function Node({ id, type, targetHandles, sourceHandles, children }) {
    const handles = [];
    // const selector = (state) => ({
    //     edges: state.edges,
    //     onEdgeChange: state.onEdgeChange
    // });
    // const {
    //     edges
    // } = useStore(selector, shallow);


    for (let i = 1; i <= targetHandles.length; i++) {
        handles.push(
            <Handle
                type="target"
                position={Position.Left}
                id={`${id}-${type}-${i}-output`}
                style={{ top: `${100 * (i) / (targetHandles.length + 1)}%`, backgroundColor: 'white' }}
            >
                <div className="handletext">{targetHandles[i-1]}</div>
            </Handle>
        );
        //update edge label
        // edges.map((item)=>{
        //     if(item.targetHandle === `${id}-${type}-${i}-output`){
        //         item.data = {
        //             endLabel: targetHandles[i]
        //         }
        //     }
        //     return item;
        // })
        // applyEdgeChanges(edges, edges)

    }
    for (let i = 1; i <= sourceHandles.length; i++) {
        handles.push(

                <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-${type}-${i}-value`}
                    style={{ top: `${100 * (i) / (sourceHandles.length + 1)}%`, backgroundColor: 'white' }}
                >
                    <div className="handletext">{sourceHandles[i-1]}</div>
                </Handle>

        );
        //update edge label
        //  edges.map((item)=>{
        //     if(item.sourceHandle === `${id}-${type}-${i}-output`){
        //         item.data = {
        //             startLabel: sourceHandles[i]
        //         }
        //     }
        //     return item;
        // })
        // applyEdgeChanges(edges, edges)

    }

    return (
        <div className={`node node-${type}`}>
            <div className='header'>{type}</div>
            <hr />
            <div className='children'>{children}</div>
            {handles}
        </div>
    );
}

export default Node;