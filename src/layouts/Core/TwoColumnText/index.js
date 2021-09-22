import React from 'react';
import {SectionBackgroundOverwrite} from "../../../helpers/SectionBackgroundOverwrite";

export default function TwoColumnTextLayout(layout) {
    console.log(layout);

    return (
        <SectionBackgroundOverwrite layout={layout}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="jd-text-content" dangerouslySetInnerHTML={{__html: layout.attrs.text_column_1}}>
                </div>

                <div className="jd-text-content" dangerouslySetInnerHTML={{__html: layout.attrs.text_column_1}}>
                </div>
            </div>
        </SectionBackgroundOverwrite>
    );
}

