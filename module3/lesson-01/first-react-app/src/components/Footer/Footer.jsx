import './Footer.css';

function Footer(){
    const testVar = false;

    return (
        <footer>
            {testVar ? 'Made by Lloyd' : 'Made by Ironhack'}
        </footer>
    )
}

export default Footer;