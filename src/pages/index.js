import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Countdown from "react-countdown-now";
import styled, { css } from "react-emotion";
import SEO from "../components/SEO/SEO";
import "../../static/css-modules/aos.css";
import { colorScheme, fontScheme, flex } from "../helpers/styleSettings";
import { GridBase, ContentLimit } from "../helpers/grid";
import heroVid from "../assets/img/home/hero-vid-compressed.mp4";
import leftHero from "../assets/img/home/full-left-hero-block.png";
import videoLaunchImg from "../assets/img/home/video-start-area.png";
import Hero from '../components/Home/Hero';

/**
 *


 typeof window !== 'undefined' && window.whaterver-you-need

 let video = document.querySelector('video');

 const setVideoDimensions = () => {
  if (window.innerWidth / window.innerHeight > 16 / 9) {
    video.style.width = '100vw';
    video.style.height = 'calc(100vw * 9 / 16)';
  } else {
    video.style.width = 'calc(100vh * 16 / 9)';
    video.style.height = '100vh';
  }
};

 window.onresize = setVideoDimensions;
 setVideoDimensions();



 *
 * */

export default class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        const AOS = require("aos");
        this.aos = AOS;
        this.aos.init();

    }

    componentDidUpdate () {
        this.aos.refresh();
    }

    render () {

        return (
            <div>

               <Hero/>

                <a href={"#end"}>
                    <div style={{ color: "#ffffff" }}>CLICK HERE</div>
                    CLICK HERE</a>
                <div style={{ height: "400vh", background: "linear-gradient(#e66465, #9198e5)" }}/>
                <div>


                    <a name="problem"/>
                    <div>
                        What’s the PROBLEM?
                        If you’re like most sports fans, then you know it’s almost impossible to engage with your favorite sports team, let alone watch their live games. WTF???
                        Here’s why

                        Nontransparent and convoluted sports content distribution system
                        Middleman markups and artificial packaging and pricing
                        Collective bargaining & centralized re-distribution system of revenues
                        Displaced fans have limited accessibility to Live content of their favourite teams
                        Clubs have little or no direct fan engagement as a result of traditional linear television

                    </div>
                    <a name="solution"/>
                    <a name="digital-stadium"/>
                    <a name="team"/>
                    <a name="product-roadmap"/>


                </div>
            </div>
        );
    }

}
