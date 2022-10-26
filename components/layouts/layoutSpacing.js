import Section from "../section";

export default function LayoutSpacing({ block }) {
  let data = block.attrs.data;

  return (
    <div style={{ height: data.height + "px", backgroundColor: "green" }}></div>
  );
}
