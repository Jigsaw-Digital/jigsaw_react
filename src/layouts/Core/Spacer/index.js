import React from 'react';

export default function SpacerLayout(layout) {
    console.log(layout);

    return (
        <div style={{height: layout.attrs.height + 'px'}} aria-hidden="true">

        </div>
    );
}

