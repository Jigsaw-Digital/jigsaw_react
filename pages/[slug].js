import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { getPage, getSlugs } from "../utils/wp";
import Layout from "../components/layout";
import LayoutRenderer from "../components/layoutRenderer";

export default function Page({ post, menuItems }) {
  return (
    <Layout menuItems={menuItems}>
      <LayoutRenderer blocks={post.blocks} />
    </Layout>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("pages");
  return {
    paths,
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPage(params.slug);

  console.log(post);

  if (post === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
