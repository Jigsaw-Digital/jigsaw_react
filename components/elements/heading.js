const colors = {
  white: "bg-gray-100 text-black",
  gray: "bg-gray-100 text-black",
};

const size = {};

export default function Heading(props) {
  let data = props.block.attrs.data;

  let bg_class = colors[data.jd_section_options_background_colour];

  return <h1 className="mx-auto max-w-3xl">{props.children}</h1>;
}
