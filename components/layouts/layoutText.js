import Section from "../section";
import Image from "next/image";

export default function LayoutText({ block }) {
  let data = block.attrs.data;

  return (
    <Section block={block}>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
      {/*<pre style={{ outline: "1px solid yellow" }}>*/}
      {/*  {JSON.stringify(block, null, 2)}*/}
      {/*</pre>*/}
    </Section>
  );
}
