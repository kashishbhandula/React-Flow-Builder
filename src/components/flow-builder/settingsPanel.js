import React, { useContext } from "react";
import { FlowBuilderContext } from "./flowBuilder";
import NodeMessageEditor from "./nodeMessageEditor";
import NodeGenerator from "./nodeGenerator";

export default function SettingsPanel({ nodes, setNodes }) {
  const { selectedNodeData } = useContext(FlowBuilderContext);
  return (
    <div className="settings_panel">
      {selectedNodeData ? (
        <NodeMessageEditor />
      ) : (
        <NodeGenerator nodes={nodes} setNodes={setNodes} />
      )}
    </div>
  );
}
