/* eslint-disable no-return-assign,no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import styled, { css } from 'react-emotion';
import '../../../static/css-modules/aos.css';
import { zIndexCtx, fontScheme } from '../../helpers/styleSettings';
import heroVid from '../../assets/img/home/hero-vid-compressed.mp4';
import videoLaunchImg from '../../assets/img/home/video-start-area.png';

/**
 *


 typeof window !== 'undefined' && window.whaterver-you-need

 let video = document.querySelector('video');

 const setVideoDimensions = () => {
  if (window.innerWidth / window.innerHeight > 16 / 9) {
    video.style.width = '100vw';
    video.style.height = 'calc(100vw * 9 / 16)';
  } else {
    video.style.width = 'calc(00vh * 16 / 9)';
    video.style.height = '100vh';
  }
};

 window.onresize = setVideoDimensions;
 setVideoDimensions();



 *
 * */

export const flex = {
    rowCenter: css`
    justify-content: center;
    align-items: center;
    display: flex;
    `,
    colCenter: css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`
};

const VIDEO_VIEWPORT_HEIGHT = '95vh';

const HeroContainer = styled.div`
    position: relative;
    width: 100vw;
    z-index: ${zIndexCtx.heroContainer};
    height: ${VIDEO_VIEWPORT_HEIGHT};
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${VIDEO_VIEWPORT_HEIGHT};
    width: 100vw;
    bottom: ${VIDEO_VIEWPORT_HEIGHT};
    z-index: ${zIndexCtx.heroContent};
    
`;

const CountdownWrapper = styled.div`
    display: inline-flex;
    color: #ffffff;
    font-family: ${fontScheme.din};
    border-radius: 2px;
    letter-spacing: 7px;
    font-weight: 100;
    font-size: 30px;
    padding: 17px 25px 13px;
    border: 1px solid rgba(255,255,255,.7);
     @media (min-width: 768px) {
        font-size: 70px;
    }
`;

const CountdownLabel = styled.div`
    color: #ffffff;
    font-family: ${fontScheme.headings};
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 10px;
     @media (min-width: 768px) {
        font-size: 25px;
    }
`;

const SpacerLg = styled.div`
    width: 75px;
    height: 50px;  
`;

class Hero extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        this._heroVideo.play();
    }

    render () {

        return (
            <div>
                <HeroContainer className={flex.colCenter}>
                    <ContentContainer className={flex.rowCenter}>
                        <div>
                            <CountdownLabel>
                                TOKEN SALE COUNTDOWN
                            </CountdownLabel>
                            <CountdownWrapper>
                                <Countdown date={'Fri, 1 July 2018 01:02:03'}/>
                            </CountdownWrapper>
                        </div>
                        <SpacerLg/>
                        <img src={videoLaunchImg}/>

                    </ContentContainer>
                    <video
                        autoPlay
                        muted
                        loop
                        style={{
                            position: 'absolute',
                            top:0,
                            left:0,
                            right:0,
                            objectFit: 'cover',
                            width: '100vw',
                            height: VIDEO_VIEWPORT_HEIGHT,
                            zIndex: zIndexCtx.heroContainer,
                        }}
                        ref={(c) => this._heroVideo = c}
                        src={heroVid}/>
                </HeroContainer>
            </div>
        );
    }

}

export default Hero;
// Problem Solution Digital Stadium SFT Team Product Roadmap

// <HomeBackground src={background.node.sizes.tracedSVG}/>
// <Img className={HomeImg} outerWrapperClassName={HomeImg} src={background.node.tracedSVG} />

// <HomeContent>
//                 <div>
//                     <h1>Arden de Raaij</h1>
//                     <h2>Front-end Web Developer</h2>
//                     <div>
//                         <p>
//                             Hi, I'm Arden. I'm a web developer based in Lisbon,
//                             Portugal. I create awesome websites/web-apps which
//                             are enjoyable and fun to use. You can find some of
//                             my code on{' '}
//                             <a
//                                 href="https://github.com/aderaaij/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Github
//                             </a>, see my experiments on{' '}
//                             <a
//                                 href="https://codepen.io/aderaaij/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Codepen
//                             </a>, and view my CV/experience on{' '}
//                             <a
//                                 href="https://www.linkedin.com/in/ardenderaaij/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 LinkedIn
//                             </a>.
//                         </p>
//                         <p>
//                             I love photography and traveling, the combination of
//                             which you can find on my{' '}
//                             <a
//                                 href="http://instagram.com/ardennl"
//                                 target="_blank noreferrer"
//                                 title="Arden de Raaij on Instagram"
//                                 rel="noopener"
//                             >
//                                 Instagram
//                             </a>. You can follow me on{' '}
//                             <a
//                                 href="http://twitter.com/ardennl"
//                                 target="_blank noreferrer"
//                                 rel="noopener"
//                             >
//                                 Twitter
//                             </a>{' '}
//                             for random shower thoughts.
//                         </p>{' '}
//                         <p>
//                             Feel free to{' '}
//                             <a
//                                 href="mailto:a.de.raaij@gmail.com"
//                                 target="_blank noreferrer"
//                                 title="Send an e-mail to Arden de Raaij"
//                                 rel="noopener"
//                             >
//                                 contact me
//                             </a>{' '}
//                             about all the things web related!
//                         </p>
//                     </div>
//                 </div>
//             </HomeContent>

// export const query = graphql`
//     query IndexQuery {
//         allImageSharp(filter: { id: { regex: "/assets/img/" } }) {
//             edges {
//                 node {
//                     id
//                     sizes(
//                         maxWidth: 1600
//                         traceSVG: { color: "#37474F", blackOnWhite: true }
//                     ) {
//                         tracedSVG
//                         src
//                         srcSet
//                         srcWebp
//                         srcSetWebp
//                         sizes
//                         originalImg
//                         originalName
//                     }
//                 }
//             }
//         }
//     }
// `;

/*
*
const
    HomeWrap = styled.div`
    ${GridBase};
    padding-top: 60px;
`;

const
    HomeContent = styled.div`
    z-index: 501;
    position: relative;
    height: 100%;
    min-height: calc(100vh - 60px);
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${colorScheme.text};
    ${ContentLimit};

    > div {
        max-width: 70ch;
    }

    h1 {
        color: ${colorScheme.support};
        font-size: 2em;
        font-weight: 900;
        margin: 0;
        @media (min-width: 768px) {
            font-size: 4em;
        }
    }

    h2 {
        font-size: 1.75em;
        margin: 0;
        @media (min-width: 768px) {
            font-size: 3em;
        }
    }

    p {
        line-height: 1.55;
        font-size: 1.125em;
        @media (min-width: 768px) {
            font-size: 1.25em;
        }
    }

    a {
        text-decoration: none;
        color: ${colorScheme.supportLight};
        &:hover {
            text-decoration: underline;
        }
    }
`;

const
    HomeBackground = styled.img`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`;

const
    HomeImg = css`
    width: 100%;
    height: 100%;
    position: fixed !important;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;

    img:nth-child(2) {
        opacity: 1 !important;
    }

    img:last-child {
        opacity: 0 !important;
    }
`;
* */
