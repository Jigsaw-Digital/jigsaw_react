import Section from "../section";
import Image from "next/image";

export default function LayoutText({ block }) {
  let data = block.attrs.data;

  return (
    <Section block={block}>
      <div
        className="content text-shark-900 dark:text-white text-lg w-2/3 max-w-[800px] mx-auto mt-16"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
    </Section>
  );
}
