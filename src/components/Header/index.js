import {NavLink} from "react-router-dom";
import '../../index.css';

export default function Header() {
    return (
        <div>
            {
                window.site_navigation.map((value, i) => {

                    return <div>

                        <NavLink
                            key={value.title}
                            activeClassName='font-bold'
                            exact={true}
                            to={{
                                pathname: `${value.url.replace('https://neatsmith.jdsx.app', '')}`,
                            }}
                        >{value.title}</NavLink>

                        <div>

                            {
                                ( value.children ? value.children.map((child, i) => {
                                    console.log(child);
                                    return <div className="ml-5">
                                        <NavLink
                                            key={child.title}
                                            activeClassName='font-bold'
                                            exact={true}
                                            to={{
                                                pathname: `${child.url.replace('https://neatsmith.jdsx.app', '')}`,
                                            }}
                                        > - {child.title}</NavLink></div>
                                }) : '')

                            }
                        </div>

                        <br/>
                    </div>;


                })

            }
        </div>
    );
}


