import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer>
                <div className="footer-area-three">
                    <div className="container">
                        <div className="footer-top-three">
                            <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">how to creates</h4>
                                        <div className="footer-link-three">
                                            <ul className="list-wrap">
                                                <li><Link href="/contact">Animation Videos</Link></li>
                                                <li><Link href="/contact">Video Games</Link></li>
                                                <li><Link href="/contact">IVR Voices</Link></li>
                                                <li><Link href="/contact">Spotify Ads</Link></li>
                                                <li><Link href="/contact">Advertisements</Link></li>
                                                <li><Link href="/contact">Youtube Videos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">resources</h4>
                                        <div className="footer-link-three">
                                            <ul className="list-wrap">
                                                <li><Link href="/contact">Transcription</Link></li>
                                                <li><Link href="/contact">Text to Speech</Link></li>
                                                <li><Link href="/contact">Smart Guide</Link></li>
                                                <li><Link href="/contact">Voicer (TS) API</Link></li>
                                                <li><Link href="/contact">(TS) for Web</Link></li>
                                                <li><Link href="/contact">Partnership Program</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Important Links</h4>
                                        <div className="footer-link-three">
                                            <ul className="list-wrap">
                                                <li><Link href="/contact">Explore Voices</Link></li>
                                                <li><Link href="/contact">Sample Videos</Link></li>
                                                <li><Link href="/faq">F.A.Q.</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/help">Data Protection</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">download app</h4>
                                        <div className="app-download">
                                            <Link href="#"><img src="/assets/img/images/appstore.png" alt="" /></Link>
                                            <Link href="#"><img src="/assets/img/images/googleplay.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-social-three">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-8">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">keep up to date</h4>
                                        <div className="footer-newsletter-two">
                                            <p>Join our community! <br /> Subscribe to the free newsletter</p>
                                            <form action="#">
                                                <input type="text" placeholder="Your email address" />
                                                <button type="submit" className="gradient-btn gradient-btn-four">sign in</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-three">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="copyright-text">
                                        <p>Copyright © {new Date().getFullYear()} DEX.AI All rights reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/contact">Terms  Conditions</Link></li>
                                            <li><Link href="/contact">Refund Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
