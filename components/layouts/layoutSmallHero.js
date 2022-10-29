import Section from "../section";
import {SectionColours, TextColors} from "../../constants/colours";
import Link from "next/link";
import {abs_url} from "../../utils/utls";
import {TypeAnimation} from "react-type-animation";
import Image from "next/image";
import React from "react";

export default function LayoutSmallHero({block}) {
    let data = block.attrs.data;

    return (
        <Section block={block}>
            <div className={`overflow-hidden pb-12 dark:text-white dark:bg-shark-100 text-shark-900 bg-white`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                        {data.sub_title != '' && <h2 className="text-sm mb-2"> {data?.sub_title}</h2>}
                        <h1 className="text-4xl font-medium "> {data?.title}</h1>
                        {data.description != '' && <p className="mt-6 text-lg"> {data?.description}</p>}
                    </div>
                </div>
            </div>
        </Section>
    );
}
