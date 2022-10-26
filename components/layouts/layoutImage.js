import Section from "../section";
import Image from "next/image";

export default function LayoutImage({ block }) {
  let data = block.attrs.data;

  return (
    <Section block={block}>
      <Image
        src={data.image.url}
        layout={"responsive"}
        height={data.image.height}
        width={data.image.width}
        quality={100}
      />
      {/*<pre style={{ outline: "1px solid yellow" }}>*/}
      {/*  {JSON.stringify(block, null, 2)}*/}
      {/*</pre>*/}
    </Section>
  );
}
