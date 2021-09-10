import React, {Component} from 'react';
import Header from "./Header";
import {getPage, renderLayouts} from "../helpers/wp";
import '../App.css';
import '../index.css';

class Page extends Component {
    constructor() {
        super();
        this.state = { data: [], loaded: false };
    }

    componentDidMount() {
        getPage(this.props.pageID)
            .then(json => this.setState({ data: json, loaded: true }));
    }

    render() {
        if (!this.state.loaded) {
            return (
                <div>Loading</div>
            );
        }

        return (
            <div>

                <br/>
                <h1 className="text-xl">{this.state.data.title}</h1>

                {
                    this.state.data.acf.layouts.map( (layout, i) => {
                        return renderLayouts(layout);
                    })
                }
            </div>
        );
    }
}

export default Page;

