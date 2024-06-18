// submit.js
import './submit.scss';

export const SubmitButton = () => {

const submitPipeline = async () => {

  const data = { nodes: "nodes", edges: "edge"};

  const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

//   const response = await fetch('http://127.0.0.1:8000/pipelines/parse');

  console.log(response);
  const responseData = await response.json();
  //Display alert with num_nodes, num_edges, and is_dag
  alert(`Nodes: ${responseData.num_nodes}, Edges: ${responseData.num_edges}, DAG: ${responseData.is_dag}`);
};

    return (
        <div className="submit" style={{}}>
            <button type="submit" onClick={()=>submitPipeline()}>Submit</button>
        </div>
    );
}
