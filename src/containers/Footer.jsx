import React from 'react';
import useDimensions from "react-use-dimensions";

// import Logo from '../img/footer_logo.png'
// import twitter from '../img/twitter-64.png'
import Link from '../component/Link';
import links from '../data/links';

import vars from '../sass/footer/footer.scss';

const Footer = () => {
  const [ref, { width }] = useDimensions();
  const multiLineLinkLimmit = parseInt(vars.totalWidth,10) * links.length * 100 / parseInt(vars.ulWidth,10)

  const lists = links.map(link => (
    <Link 
      key={link.text} 
      to={link.url}
      className='footerLink'
    >{link.text}</Link>
  ));

  const spaces = links.map(link => (
    <div className="filling-empty-space-childs" />
  ))

  return (
    <footer ref={ref}>
      <div className='footerTop'>
        <div className="title"><h2>kefuno.</h2></div>
      </div>
      <div className='footerLinks'>
        <ul>{lists}{width > multiLineLinkLimmit ? null : spaces}</ul>
          {/* <img src={Logo} alt='Mμsicart' size='60%' onClick={() => this.props.linkToPage('Route','/')}/>
          <a href='https://twitter.com/orch_musicart'>
            <img className='twitter' src={twitter} alt='twitter' width='5%'/>
          </a> */}
      </div>
      <div className="copyright">
        <p>Ⓒ 2020 kefuno.</p>
      </div>
    </footer>
  );
}

export default Footer;