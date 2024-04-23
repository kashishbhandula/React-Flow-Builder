import { useContext } from "react";
import { FlowBuilderContext } from "./flowBuilder";

export default function NodeMessageEditor() {
  const { selectedNodeData, setSelectedNodeData } =
    useContext(FlowBuilderContext);
  return (
    <div className="node_message_edior">
      <span className="message_editor_label">Message</span>
      <label className="message_editor_text_label">Text</label>
      <input className="message_input"
        onChange={(e) =>
          setSelectedNodeData({
            ...selectedNodeData,
            text_msg: e.target.value,
          })
        }
      ></input>
    </div>
  );
}
