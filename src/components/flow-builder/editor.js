import { useCallback } from "react";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./customNode";

const nodeTypes = {
  textUpdater: CustomNode,
};

export default function Editor({ nodes, setNodes, edges, setEdges }) {
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onConnect = useCallback(
    ({ source, target }) => {
      const newEdge = {
        id: `${source}-${target}`,
        source,
        target,
        type: "smoothstep",
      };
      setEdges((currentEdges) => [...currentEdges, newEdge]);
    },
    [setEdges]
  );

  return (
    <ReactFlow
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    />
  );
}
