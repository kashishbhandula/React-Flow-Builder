import { useContext } from "react";
import { Handle, Position } from "reactflow";
import { FlowBuilderContext } from "./flowBuilder";

export default function CustomNode({ data, isConnectable }) {
  const { setSelectedNodeData } = useContext(FlowBuilderContext);
  const textChangeHandler = () => {
    setSelectedNodeData(data);
  };
  return (
    <div className="custom_node" onClick={textChangeHandler}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <span className="label">SendMessage:</span>
        <span className="text_msg">{data?.text_msg}</span>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}
