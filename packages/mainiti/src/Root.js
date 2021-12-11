import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import Header from "./components/header/header";
import Footer from './components/footer';
import Homepage from './components/homepage';
import Faqs from './components/Faqs';
import Preparation from './components/Preparation';
import About from './components/About';
import Ayahuasca from './components/Ayahuasca';
import Dieta from './components/dieta';
import ContactRegisterForm from './components/ContactRegisterForm';

import ContactFooter from './components/ContactFooter';
import TestimonialPage from './components/TestimonialPage';

/**REACT SPRING IMPORT */
import Switch from "@frontity/components/switch";
import {useTransition, animated} from '@react-spring/web'

const Root = ({state, actions}) => {

    //const data = state.source.get(state.router.link);

    useEffect( () => {
        actions.source.fetch("/home");
        actions.source.fetch("/faqs")
    }, [])


    // Page transitions
    const transitions = useTransition(state.router.link, {
        from: { opacity: 0,},
        enter: { opacity: 1, },
        leave: { opacity: 0, display: "none"},
        config: { duration: 600 },
    });
 
    
    return (
      <>
        <Global
                styles={css`
                    :root {
                        --brand: #4e9968; //#5B3BE8;
                        --black: #000000;
                        --white: #ffffff;
                        --bodycolor: #343434;
                    }
                    
                    body {
                        margin: 0px !important;
                        color:var(--bodycolor);
                        font-family: 'Alegreya Sans', 'B612', sans-serif;
                        font-feature-settings: "kern";
                        -webkit-font-smoothing: antialiased;
                        min-height: -webkit-fill-available;
                    }
                    html {
                        height: -webkit-fill-available;
                    }

         
                    /* * {
                        border: 1px solid #f00 !important;
                    }    */
                    
                `}
            />

            <Head>


                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&family=B612:wght@400;700&family=Dosis:wght@300;400;700&display=swap" rel="stylesheet" />

                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>

        {/** Navbar */}       
        <Header />

        {transitions((props, item) => {
            const dataitem = state.source.get(state.router.link)
                return(
                    <animated.div style={props}>
                        <Switch location={item}>
                            <Homepage when={dataitem.isHomePage} />  
                            {state.router.link === "/faqs/" && <Faqs />}
                            {state.router.link === "/retreats/" && <Retreats />}
                            {state.router.link === "/preparation/" && <Preparation />}
                            {state.router.link === "/about/" && <About />}
                            {state.router.link === "/ayahuasca/" && <Ayahuasca />}
                            {state.router.link === "/plantdieta/" && <Dieta />}
                            {state.router.link === "/testimonials/" && <TestimonialPage />}
                            {state.router.link === "/contact/" && <ContactRegisterForm />}

                        </Switch>
                    </animated.div>

                )   
            }
        )} 
                
        <ContactFooter />
        <Footer title={"Mainiti Healing Center"}/>   
      </>
    );
  };

  export default connect(Root);