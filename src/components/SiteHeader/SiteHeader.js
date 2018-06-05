import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import Headroom from 'react-headroom';
import { slide as Menu } from 'react-burger-menu'
import { colorScheme, fontScheme } from '../../helpers/styleSettings';
import sportsFixLogo from '../../assets/img/home/logo.png';



const Header = styled.header`
    width: 100%;
    height: 44px;
    z-index: 901;
    display: flex;
    align-items: center;    
    margin: 0 auto;
    padding: 0 1em;    
    transition: transform 0.4s ease;
    transform: translateY(0);

    @media (min-width: 768px) {
        padding: 0 2em;
        height: 60px;
    }
`;

const headroomStyles = css`
    width: 100vw;
    
    .headroom {
        transition: all 0.3s ease;
        background: transparent;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top,transparent 0,rgba(0,0,0,0.5) 100%);
            z-index: -1;
            transition: all 0.3s ease;
            opacity: 0;
        }
        &--unpinned {
            transform: translateY(-100%);
            background: transparent;
            &::before {
                opacity: 0;
            }
        }

        &--scrolled {
            &.headroom--pinned {
                background: ${colorScheme.support};
                &::before {
                    opacity: 0;
                }
            }

            a {
                color: ${colorScheme.text};
            }
        }
    }
`;

const SiteNav = styled.nav`
    font-family: ${fontScheme.headings};
    font-weight: 700;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    font-size: 1.125em;
    margin-left: auto;

    & ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    a {
        text-decoration: none;
        margin-left: 20px;
    }
`;

const Logo = styled(Link)`
    width: 80px;
    display: block;
    height: auto;
    @media (min-width: 768px) {
        width: 90px;
    }

    & img {
        display: block;
        width: 100%;
    }
`;

const navItem = css`
    text-decoration: none;
    color: ${colorScheme.text};
    transition: color 0.3s ease-out;

    &:hover {
        color: ${colorScheme.support};
    }
`;

const activeNavItem = css`
    color: ${colorScheme.support};
`;


const SpacerMed = styled.div`
    width: 25px;
    height: 25px;  
`;

export default class SiteHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        // const headroom = new Headroom(document.querySelector('header'));
        // headroom.init();
    }

    render() {
        return (
            <Headroom pinStart={0} wrapperStyle={{ position: 'fixed', zIndex: 501 }} className={headroomStyles}>
                <Header>
                    <img src={sportsFixLogo} />
                    <SiteNav>
                        <ul>
                            <li>
                                <a href="#problem" className={navItem} activeClassName={activeNavItem}>PROBLEM</a>
                            </li>
                            <li>
                                <a href="#solution" className={navItem} activeClassName={activeNavItem}>SOLUTION</a>
                            </li>
                            <li>
                                <a href="#digital-stadium" className={navItem} activeClassName={activeNavItem}>DIGITAL STADIUM</a>
                            </li>
                            <li>
                                <a href="#team" className={navItem} activeClassName={activeNavItem}>TEAM</a>
                            </li>
                            <li>
                                <a href="#product-roadmap" className={navItem} activeClassName={activeNavItem}>PRODUCT ROADMAP</a>
                            </li>

                            <li>
                                <Link className={navItem} activeClassName={activeNavItem} to="/posts/">BLOG</Link>
                            </li>
                            <SpacerMed/>
                        </ul>
                    </SiteNav>
                </Header>
            </Headroom>
        );
    }
}
