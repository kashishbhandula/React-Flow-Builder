export default function NodeGenerator({ node, setNodes }) {
  const addNodeHandler = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        position: { x, y },
        data: {
          id: `${prevNodes.length + 1}`,
          text_msg: "",
        },
        type: "textUpdater",
      },
    ]);
  };
  return (
    <div id="node_generator" onMouseDown={addNodeHandler}>
      Message
    </div>
  );
}
