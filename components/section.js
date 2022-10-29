import { SectionColours } from "../constants/colours";

const size = {
  full: "w-full",
  container: "container",
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "1/4": "w-1/4",
};

export default function Section(props) {
  console.log(props.block.attrs.data);
  let data = props.block.attrs.data;

  let size_class = size[data.jd_section_options_section_width];

  return (
    <section className={`relative mx-auto overflow-hidden ${size_class}`}>
      <div className={`mx-auto `}>
        <div className="bg-primary_silver justify-center overflow-hidden">
          {props.children}
        </div>
      </div>
    </section>
  );
}
