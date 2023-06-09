import { React } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function Footer({ email, insta, github, linkedin }) {


    return (
        <div className="footer">
            <a className='footer-el' href='mailto:reycano@alum.mit.edu'><EmailIcon className='footer-el'/></a>
            <a className='footer-el' href='https://www.instagram.com/reycano96/'><InstagramIcon className='footer-el'/></a>
            <a className='footer-el' href='https://github.com/wat96'><GitHubIcon className='footer-el'/></a>
            <a className='footer-el' href='https://www.linkedin.com/in/reymundo-cano-jr/'><LinkedInIcon className='footer-el'/></a>
        </div>
    );
}

export default Footer;
