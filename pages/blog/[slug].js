import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { getPost, getSlugs } from "../../utils/wp";
import Layout from "../../components/layout";

export default function Post({ post, menuItems }) {
  if (!post) {
    return {
      notFound: true,
    };
  }
  return (
    <Layout menuItems={menuItems}>
      <div className="container pt-5">
        <h1 className="pb-5 text-center">{post.title.rendered}</h1>
        <div
          className="card-text pb-5"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
        <Link href="/">
          <a className="btn btn-primary">Back to Home</a>
        </Link>
      </div>
    </Layout>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");
  return {
    paths,
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

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
