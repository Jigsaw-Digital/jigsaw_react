export default function LayoutDebug({ block }) {
  return (
    <pre style={{ outline: "1px solid yellow" }}>
      {JSON.stringify(block, null, 2)}
    </pre>
  );
}
