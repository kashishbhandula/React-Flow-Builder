import Editor from "./editor";
import Header from "./header";
import SettingsPanel from "./settingsPanel";
import { createContext, useState } from "react";

export const FlowBuilderContext = createContext();

export default function FlowBuilder() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNodeData, setSelectedNodeData] = useState();

  return (
    <FlowBuilderContext.Provider value={{ selectedNodeData, setSelectedNodeData }}>
      <div className="flow_builder">
        <Header nodes={nodes} setNodes={setNodes} edges={edges} />
        <div className="flow_builder_body">
          <Editor
            nodes={nodes}
            setNodes={setNodes}
            edges={edges}
            setEdges={setEdges}
          />
          <SettingsPanel nodes={nodes} setNodes={setNodes} />
        </div>
      </div>
    </FlowBuilderContext.Provider>
  );
}
