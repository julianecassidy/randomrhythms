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
    console.debug("Footer")

    return (
        <div className="Footer">
            <Link to="/privacy-policy">Privacy Policy </Link>
            &#x2022;
            <Link to="/terms-and-conditions"> Terms and Conditions</Link>
            <p>
                &#169; 2024 Random Rhythms
                &#x2022;
                <Link to="https://julianecassidy.com/"> Juliane Cassidy
                </Link>, Software Engineer
            </p>
        </div>
    )
}

export default Footer;