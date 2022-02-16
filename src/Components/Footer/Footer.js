import './Footer.css'
import * as TiIcons from 'react-icons/ti'


const Footer = () => {


  
  return (
    <div className="footer-bar">
      <div className="social-icons">
        < a href='https://twitter.com/'><TiIcons.TiSocialTwitter /></a>
        < a href='https://www.instagram.com/'><TiIcons.TiSocialInstagram /></a>
        < a href='https://www.facebook.com/'><TiIcons.TiSocialFacebook/></a>
      </div>
    </div>
  )
}

export default Footer
