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
import Footer from "./components/Footer";


const siteURL = 'https://jigsaw-frontend.test';


const identifyComponent = (page) => {
    return Page;
}

class AppInit {
    buildApp() {
        async function buildRoutes() {
            var pageList = [];
            var postTypes = [
                'pages',
                'projects'
            ];

            postTypes.map(async (postType, i) => {
                pageList[postType] = await getPages(postType);
            });

            console.log(pageList);


            let navigation = await getNavigation('main-menu');
            let footer_navigation_1 = await getNavigation('footer-menu-1');
            let footer_navigation_2 = await getNavigation('footer-menu-2');
            let footer_navigation_3 = await getNavigation('footer-menu-3');
            let footer_navigation_4 = await getNavigation('footer-menu-4');

            render(
                <Router>
                    <div>
                        <Header/>

                        <Switch>
                            {postTypes.map((post_type, i2) => {
                                return pageList[post_type].map((page, i) => {
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
                                })
                            })}
                            {/*<Route component={NotFound} />*/}
                        </Switch>

                        <Footer/>
                    </div>
                </Router>

                , document.getElementById('root')
            )
        }

        buildRoutes();
    }

    /*
     * Run the App
     */
    run() {
        this.buildApp();
    }
}

new

AppInit().run();