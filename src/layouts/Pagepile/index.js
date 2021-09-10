import React from 'react';
import $ from 'jquery';
import '../../packages/pagepiling/pagepiling';
import '../../packages/pagepiling/pagepiling.css';
import '../../index.css';

export default function PagepileLayout() {
    $(document).ready(function () {
        $('#pagepiling').pagepiling({
            navigation: {
                'textColor': '#fff',
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': ['sec1', 'sec2', 'sec3', 'sec4']
            }
        })
    })


    return (
        <div id="pagepiling">
            <div className="section sec1">Section one</div>
            <div className="section sec2">Section two</div>
            <div className="section sec3">Section three</div>
            <div className="section sec4">Section four</div>
        </div>
    );

}

