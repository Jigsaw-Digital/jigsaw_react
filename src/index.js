import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// Some of our example components
import Page from './components/Page';
import {getNavigation, getPages} from "./helpers/wp";
import Header from "./components/Header";


const siteURL = 'https://neatsmith.jdsx.app';


const identifyComponent = (page) => {
    // this is where you map your template names to a component
    // const components = {
    //     // 'home': Home,
    //     // 'about': About
    // }
// check the template from the response
    if (page.template !== 'default' && page.template) {
        return Page;
    } else {
        return Page;
    }
}

class AppInit {
    buildApp() {
        async function buildRoutes() {
            let pageList = await getPages();
            let navigation = await getNavigation();

            render(
                <div className="test">
                    <Router>
                        <div>

                            <Header/>

                            <Switch>

                                {pageList.map((page, i) => {
                                    let Template = identifyComponent(page)
                                    let pageID = page.id;
                                    let parent = page.parent;
                                    return (

                                        <Route
                                            key={pageID}
                                            path={`${parent ? '/' + parent : ''}/${page.slug}`}
                                            render={(props) => <Template pageID={pageID}
                                                                         siteURL={siteURL} {...props} />}
                                            exact
                                        />
                                    )
                                })}
                                {/*<Route component={NotFound} />*/}
                                    </Switch>
                                    </div>
                                    </Router>

                                    </div>
                                    , document.getElementById('root')
                                    )
                                }

                                buildRoutes();
                                }

        /*
         * Run the App
         */
        run()
        {
            this.buildApp();
        }
    }

    new

    AppInit()

.

    run();