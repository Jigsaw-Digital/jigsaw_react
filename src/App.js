import './App.css';
import React, {Component} from 'react';
import $ from 'jquery';
import './packages/pagepiling/pagepiling';
import './packages/pagepiling/pagepiling.css';
import './index.css';
import Wp, {getPages} from "./helpers/wp";

class App extends Component {

    componentDidMount(){
        $(document).ready(function() {
            $('#pagepiling').pagepiling({
                navigation: {
                    'textColor': '#fff',
                    'bulletsColor': '#fff',
                    'position': 'right',
                    'tooltips': ['sec1', 'sec2','sec3', 'sec4']
                }
            })
        })
    }

    async render()
    {
        var pageList = await getPages();

        return (
            <div>
                {pageList.map( (page, i) => {
                    let parent = page.parent;

                    <a href={`${parent ? '/'+ parent :''}/${page.slug}`}>{page.title}</a>
                })}
            </div>
            // <div id="pagepiling">
            //     <div className="section sec1">Section one</div>
            //     <div className="section sec2">Section two</div>
            //     <div className="section sec3">Section three</div>
            //     <div className="section sec4">Section four</div>
            // </div>
        );
    }
}

export default App;