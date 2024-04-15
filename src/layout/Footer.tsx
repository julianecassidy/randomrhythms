import { Link } from 'react-router-dom';
import "@layout/Footer.css";

/** Component for Footer
 *
 * Props:
 * - None
 *
 * State:
 * - None
 *
 * App -> Footer
 */
function Footer() {
    // // console.debug("Footer")

    return (
        <footer>
            <Link to="/privacy-policy">Privacy Policy </Link>
            &#x2022;
            <Link to="/accessibility-statement"> Accessibility Statement</Link>
            <p>
                &#169; 2024 Random Rhythms /
                <Link to="https://julianecassidy.com/"> Juliane Cassidy</Link>
            </p>
        </footer>
    )
}

export default Footer;