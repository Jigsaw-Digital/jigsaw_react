import React from 'react';
import $ from 'jquery';
import '../../packages/pagepiling/pagepiling';
import '../../packages/pagepiling/pagepiling.css';
import '../../index.css';
import {NavLink} from "react-router-dom";
import {renderLayouts} from "../../helpers/wp";
import {SectionBackgroundOverwrite} from "../../helpers/SectionBackgroundOverwrite";


export default function ImageLayout(layout) {
    console.log(layout);

    return (
        <SectionBackgroundOverwrite layout={layout}>
            <img src={layout.attrs.image} width="100%"/>
        </SectionBackgroundOverwrite>
    );
}

