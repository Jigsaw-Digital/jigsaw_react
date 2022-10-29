import Section from "../section";
import React, {useState, useEffect} from "react";
import {getPortfolio} from "../../utils/wp";
import Image from "next/image";
import {abs_url} from "../../utils/utls";
import Link from "next/link";

export default function LayoutPortfolio({block}) {
    let data = block.attrs.data;
    const [work, setWork] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getPortfolio();
                setWork(res);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
        <Section block={block}>
            <div className=" bg-white dark:bg-shark-900 max-w-7xl mx-auto">
                <div className="container mx-auto">
                    <div role="list" className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 px-8">
                        {work.map((w) => (
                            <div
                                key={w.id}
                                className="col-span-1 flex flex-col rounded-lg text-center cursor-pointer">
                                <div className="relative">
                                    <div
                                        key={w.id}
                                        className="absolute top-0 w-full h-full left-0" style={{
                                        'background-color': w.acf.work_colour
                                    }}
                                    >
                                    </div>
                                    <div
                                        className="flex flex-1 flex-col z-1 transition-all ease-in-out hover:scale-105 py-10">
                                        <Link href={abs_url(w.link)}>
                                            <div>
                                                <div className="overflow-hidden px-6">
                                                    <Image
                                                        src={w.fimg_url.url}
                                                        layout={"responsive"}
                                                        height={w.fimg_url.height}
                                                        width={w.fimg_url.width}
                                                        quality={100}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-left max-w-[75%]">

                                    <h4
                                        className="my-2 text-shark-900 dark:text-white font-bold text-3xl">{w.title.rendered}</h4>
                                    <p className="text-shark-900 dark:text-white text-md ">flex
                                        flex-1 flex-col
                                        z-1 transition-all ease-in-out hover:scale-105 px-5 py-10 ease-in-out
                                        hover:scale-105.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
