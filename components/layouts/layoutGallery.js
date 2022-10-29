import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { abs_url } from "../../utils/utls";
import React from "react";

export default function LayoutImage({ block }) {
  let data = block.attrs.data;

  return (
    <Section block={block}>
      <div className="mx-auto max-w-7xl mt-16 px-8">
        <div className="lg:grid lg:gap-x-8 lg:gap-y-20" style={{
          "grid-template-columns": `repeat(${data.gallery}, minmax(0, 1fr))`
        }}>
          {[...Array(data.gallery)].map((x, i) => (
            <div className="drop-shadow-md">
              <Image
                src={data[`gallery_${i}_image`].url}
                layout={"responsive"}
                height={data[`gallery_${i}_image`].height}
                width={data[`gallery_${i}_image`].width}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
