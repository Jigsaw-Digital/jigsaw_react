import {getPage, getSlugs, getWork} from "../../utils/wp";
import Layout from "../../components/layout";
import LayoutRenderer from "../../components/layoutRenderer";
import Link from "next/link";
import {abs_url} from "../../utils/utls";
import Image from "next/image";
import React from "react";

export default function Portfolio({post, menuItems}) {
    return (
        <Layout menuItems={menuItems} backgroundColour={post.acf.work_colour}>
            <div className="relative bg-shark-900">
                <div
                    key={post.id}
                    className="absolute top-0 w-full h-full left-0 z-0" style={{
                    'background-color': post.acf.work_colour
                }}
                >
                </div>
                <div
                    className="flex py-10 max-w-7xl mx-auto z-10">
                    <div className="overflow-hidden w-1/3 z-10 pt-36">
                        <h4
                            className="my-2 text-shark-900 dark:text-white  font-bold text-3xl">{post.title.rendered}</h4>
                        <p className="text-shark-700 dark:text-white text-md ">flex
                            flex-1 flex-col
                            z-1 transition-all ease-in-out hover:scale-105 px-5 py-10 ease-in-out
                            hover:scale-105.</p>
                        <a className="mt-6 inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] w-36 text-center text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-shark-700 dark:text-white hover:border-gray-400 hidden lg:block"
                           href="#">Visit Site</a>
                    </div>
                    <div className="overflow-hidden w-2/3 z-10">
                        <Image
                            src={post.fimg_url.url}
                            layout={"responsive"}
                            height={post.fimg_url.height}
                            width={post.fimg_url.width}
                            quality={100}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <LayoutRenderer blocks={post.blocks}/>
        </Layout>
    );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
    const paths = await getSlugs("work");
    return {
        paths,
        fallback: "blocking",
    };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({params}) {
    const post = await getWork(params.slug);

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
