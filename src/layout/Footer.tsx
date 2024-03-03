import { Link } from 'react-router-dom';

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
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <p>
                Random Rhythms &#169; 2024
                &#x2022;
                Built by <Link to="https://julianecassidy.com/">Juliane Cassidy</Link>
            </p>
        </div>
    )
}

export default Footer;