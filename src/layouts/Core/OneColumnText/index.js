import React from 'react';
import {SectionBackgroundOverwrite} from "../../../helpers/SectionBackgroundOverwrite";

export default function OneColumnTextLayout(layout) {
    console.log(layout);

    return (
        <SectionBackgroundOverwrite layout={layout}>
            <div className="container mx-auto jd-text-content" dangerouslySetInnerHTML={{__html: layout.attrs.text}}>
            </div>
        </SectionBackgroundOverwrite>
    );
}

