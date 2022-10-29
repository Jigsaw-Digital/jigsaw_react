import LayoutSpacing from "./layouts/layoutSpacing";
import LayoutSmallHero from "./layouts/layoutSmallHero";
import LayoutHero from "./layouts/layoutHero";
import LayoutDebug from "./layouts/layoutDebug";
import LayoutImage from "./layouts/layoutImage";
import LayoutText from "./layouts/layoutText";
import LayoutPortfolio from "./layouts/layoutPortfolio";
import LayoutGallery from "./layouts/LayoutGallery";

const components = {
  "acf/layout-hero": LayoutHero,
  "acf/layout-small-hero": LayoutSmallHero,
  "acf/layout-spacing": LayoutSpacing,
  "acf/layout-image": LayoutImage,
  "acf/layout-text": LayoutText,
  "acf/layout-portfolio": LayoutPortfolio,
  "acf/layout-gallery": LayoutGallery,
};

export default function LayoutRenderer({ blocks }) {
  return (
    <>
      {[...blocks].map((block, index) => {
        if (components.hasOwnProperty(block.blockName)) {
          let LayoutComponent = components[block.blockName];
          return (
            <LayoutComponent
              block={block}
              key={LayoutComponent + index}
            ></LayoutComponent>
          );
        } else {
          if (block.blockName) {
            return (
              <LayoutDebug block={block} key={"Debug" + index}></LayoutDebug>
            );
          }
        }
      })}
    </>
  );

  return <pre>{JSON.stringify(blocks, null, 2)}</pre>;
}
