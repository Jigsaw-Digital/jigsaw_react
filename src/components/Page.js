import React, {Component} from 'react';
import {getPage, renderLayouts} from "../helpers/wp";
import '../App.css';
import '../index.css';
import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: AnnotationIcon,
    },
    { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const navigation = [
    { name: 'Pricing', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Company', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

class Page extends Component {
    constructor() {
        super();
        this.state = { data: [], loaded: false };
    }

    componentDidMount() {
        getPage(this.props.pageID)
            .then(json => this.setState({ data: [json], loaded: true }));
    }

    render() {
        if (!this.state.loaded) {
            return (
                <div>Loading</div>
            );
        }

        return (
            <div>
                {
                    (this.state.data[0].blocks && this.state.data[0].blocks ? this.state.data[0].blocks.map( (layout, i) => {
                        return renderLayouts(layout);
                    }) : '')
                }
                <h1 className="text-xl">{this.state.data.title}</h1>
            </div>
        );
    }
}

export default Page;

