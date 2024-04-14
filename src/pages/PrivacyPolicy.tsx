const WEBSITE = import.meta.env.VITE_WEBSITE;

/** Component for PrivacyPolicy
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * RoutesList -> PrivacyPolicy
 */
function PrivacyPolicy() {
    console.debug("PrivacyPolicy");

    return (
        <main id="main-content">
            <div className="PrivacyPolicy mx-16 my-8">
                <h1>Privacy Policy</h1>

                <h2>Who we are</h2>

                <p>
                    Our website address is: <a href={WEBSITE}
                    >{WEBSITE}</a>.
                </p>

                <h2>What personal data we collect and why we collect it</h2>

                <h3>Comments</h3>

                <p>
                    When visitors leave comments on the site we collect the data shown in
                    the comments form, and also the visitor’s IP address and browser user
                    agent string to help spam detection.
                </p>

                <h3>Media</h3>

                <p>
                    If you upload images to the website, you should avoid uploading images
                    with embedded location data (EXIF GPS) included. Visitors to the website
                    can download and extract any location data from images on the website.
                </p>

                <h3>Contact forms</h3>

                <p>
                    If you submit your email address through the newsletter submission, you
                    address will be saved in MailChimp for the purpose of newsletter
                    mailing.
                </p>

                <p>
                    If you submit a comment through the contact form, your name and email
                    will be included. This makes it possible to receive a response.
                </p>

                <h3>Cookies</h3>

                <p>
                    If you leave a comment on our site you may opt-in to saving your name,
                    email address and website in cookies. These are for your convenience so
                    that you do not have to fill in your details again when you leave
                    another comment. These cookies will last for one year.
                </p>

                <p>
                    If you visit our login page, we will set a temporary cookie to determine
                    if your browser accepts cookies. This cookie contains no personal data
                    and is discarded when you close your browser.
                </p>

                <p>
                    When you log in, we will also set up several cookies to save your login
                    information and your screen display choices. Login cookies last for two
                    days, and screen options cookies last for a year. If you select
                    &#8220;Remember Me&#8221;, your login will persist for two weeks. If you
                    log out of your account, the login cookies will be removed.
                </p>

                <p>
                    If you edit or publish an article, an additional cookie will be saved in
                    your browser. This cookie includes no personal data and simply indicates
                    the post ID of the article you just edited. It expires after 1 day.
                </p>

                <h3>Embedded content from other websites</h3>

                <p>
                    Articles on this site may include embedded content (e.g. videos, images,
                    articles, etc.). Embedded content from other websites behaves in the
                    exact same way as if the visitor has visited the other website.
                </p>

                <p>
                    These websites may collect data about you, use cookies, embed additional
                    third-party tracking, and monitor your interaction with that embedded
                    content, including tracking your interaction with the embedded content
                    if you have an account and are logged in to that website.
                </p>

                <h3>Analytics</h3>

                <p>Google Analytics is integrated on this website.</p>

                <p>
                    Google Analytics is a web analytics service. Web analysis is the
                    gathering, collection and analysis of data about the behavior of
                    visitors to websites. Among other things, a web analysis service
                    collects data on which website a data subject has come to a website from
                    (so-called referrers), which subpages of the website were accessed or
                    how often and for which period of time a subpage was viewed. A web
                    analysis is mainly used to optimize a website and for the cost-benefit
                    analysis of Internet advertising.
                </p>

                <p>
                    The operator of the Google Analytics component is Google Inc., 1600
                    Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.
                </p>

                <p>
                    Google Analytics uses cookies. The information generated by the cookie
                    about your use of this website is usually transmitted to a Google server
                    in the USA and stored there. Google might transfer the personal
                    information collected via this technical procedure to third parties.
                </p>

                <p>
                    As IP anonymization is activated on our website, your IP address will be
                    shortened by Google within Member States of the European Union or other
                    states in agreement with the European Economic Area. Only in exceptional
                    cases, the full IP address is sent to and shortened by a Google server
                    in the USA. On behalf of the operator of the website, Google will use
                    this information to evaluate your use of the website, compile reports on
                    website activity and to provide further services related to website and
                    internet use to us. The IP address transferred through your browser to
                    Google Analytics will not be combined with other data held by Google.
                </p>

                <p>
                    In addition, this website uses the Analytics feature UserID to track
                    interaction data. This User ID will be additionally anonymized and
                    encrypted and will not be linked with other data.
                </p>

                <p>
                    In addition, a cookie already set by Google Analytics can be deleted at
                    any time via the Internet browser or other software programs.
                </p>

                <p>
                    Further information and Google&#8217;s applicable privacy regulations
                    can be found at&nbsp;<a
                        target="_blank"
                        href="https://policies.google.com/privacy?hl=en"
                        rel="noreferrer noopener"
                    ><u>https://policies.google.com/privacy?hl=en</u>
                    </a>&nbsp;and&nbsp;<a
                        target="_blank"
                        href="https://marketingplatform.google.com/about/"
                        rel="noreferrer noopener"
                    ><u>https://marketingplatform.google.com/about/</u>
                    </a>&nbsp;The following link provides a further explanation of Google
                    Analytics&nbsp;<a
                        target="_blank"
                        href="https://marketingplatform.google.com/about/"
                        rel="noreferrer noopener"
                    ><u>https://marketingplatform.google.com/about/</u>
                    </a>.
                </p>

                <h2>How long we retain your data</h2>

                <p>
                    If you leave a comment, the comment and its metadata are retained
                    indefinitely. This is so we can recognize and approve any follow-up
                    comments automatically instead of holding them in a moderation queue.
                </p>

                <p>
                    For users that register on our website (if any), we also store the
                    personal information they provide in their user profile. All users can
                    see, edit, or delete their personal information at any time (except they
                    cannot change their username). Website administrators can also see and
                    edit that information.
                </p>

                <h2>What rights you have over your data</h2>

                <p>
                    If you have an account on this site, or have left comments, you can
                    request to receive an exported file of the personal data we hold about
                    you, including any data you have provided to us. You can also request
                    that we erase any personal data we hold about you. This does not include
                    any data we are obliged to keep for administrative, legal, or security
                    purposes. To make a data change request, please contact the
                    administrator through the contact form on this site.
                </p>

                <h2>Where we send your data</h2>

                <p>
                    Visitor comments may be checked through an automated spam detection
                    service.
                </p>

                <h3>Changes to This Privacy Policy</h3>

                <p>
                    This privacy policy&nbsp;may be updated at any time. A notice about such
                    changes will be&nbsp;posted on this site. You acknowledge and agree that
                    it is your responsibility to review this Privacy Policy periodically and
                    become aware of modifications.
                </p>

                <h2>Your contact information</h2>

                <p>
                    If you have any questions about this Privacy Policy or anything else
                    on&nbsp;<a href={WEBSITE}
                    >{WEBSITE}</a
                    >, please contact the administrator through the <a
                        href={WEBSITE}>contact form</a
                    >.
                </p>
            </div>
        </main>
    );

}

export default PrivacyPolicy;