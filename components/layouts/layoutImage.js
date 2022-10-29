import Section from "../section";
import Image from "next/image";

export default function LayoutImage({ block }) {
  let data = block.attrs.data;

  return (
    <Section block={block}>
      <div className="mx-auto max-w-7xl mt-16 px-8">
      <Image
        src={data.image.url}
        layout={"responsive"}
        height={data.image.height}
        width={data.image.width}
        quality={100}
      />
      </div>
    </Section>
  );
}
