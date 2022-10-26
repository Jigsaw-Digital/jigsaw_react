import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";
import Head from "next/head";
import {AnimatePresence, motion} from 'framer-motion'

export default function Layout({children, menuItems, backgroundColour = false}) {
    return (
        <>
            <Meta/>
            <Head>
                <title>Jigsaw Digital</title>
                <link rel="icon" href="/favicon.ico"/>
                <link type="text/css" href="../styles/app.css"/>
            </Head>
            <Navbar menuItems={menuItems} backgroundColour={backgroundColour}/>
            <div>
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 450)}
                >
                    <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5}}>

                        <main class="mt-[88px]">{children}</main>
                    </motion.div>
                </AnimatePresence>
            </div>
            <Footer/>
        </>
    );
}
