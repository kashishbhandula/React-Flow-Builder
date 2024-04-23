import { useContext, useState } from "react";
import { FlowBuilderContext } from "./flowBuilder";

export default function Header({ edges, nodes, setNodes }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { selectedNodeData, setSelectedNodeData } = useContext(FlowBuilderContext);

  const saveHandler = () => {
    let sourceNodeIds = new Set();
    for (let i = 0; i < edges.length; i++) {
      sourceNodeIds.add(edges[i].source);
    }
    if (nodes.length - sourceNodeIds.size > 1) {
      setErrorMessage("Cannot save Flow");
    } else {
      setErrorMessage(null);
    }

    if (!selectedNodeData) return;
    const updatedNodes = nodes.map((node) =>
      node.id === selectedNodeData.id ? { ...node, data: selectedNodeData } : node
    );
    setNodes(updatedNodes);
    setSelectedNodeData(null);
  };

  return (
    <div className="header">
      <div className="error_message_container">
        {errorMessage && <div className="error_message">{errorMessage}</div>}
      </div>
      <div className="save_btn_container">
        <button className="save_btn" onClick={saveHandler}>
          Save changes
        </button>
      </div>
    </div>
  );
}
