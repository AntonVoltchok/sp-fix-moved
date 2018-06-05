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
