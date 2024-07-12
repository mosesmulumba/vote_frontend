import React from "react";
import Header from "../../../src/components/header";
import logo5 from "../../assets/logo5.png";
import styles from "./landingPage.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Blog from '../../components/blogComponent';
import secure from '../../assets/secure.jpg';
import accessible from '../../assets/accessible.jpg';
import convenient from '../../assets/convenient.webp';

function LandingPage() {
  const logoUrl = logo5;
  const siteName = "UMU E-Vote System";

  const blogs = [
    {blogUrl: secure , title: "Secure" , description: "State-of-the-art security ensures your vote is safe and confidential."},
    {blogUrl: accessible , title: "Convenient" , description: "Vote from anywhere at any time during the voting period."},
    {blogUrl: convenient , title: "Accessible" , description: "Easy to use interface for all students and staff."},
  ]

  return (
    <>
      <Header logoUrl={logoUrl} siteName={siteName} />
      <div className={`${styles.LandingPageMainContainer}`}>
        <div className={styles.LandingPageMainContent}>
          <div className={styles.LandingPageMainContentInfo}>
            <div className={styles.LandingPageMainContentTitle}>
              Discover the Next Generation of Voting
            </div>
            <div className={styles.LandingParagraph}>
              Discover the next generation of voting with our revolutionary
              e-voting system, designed for a seamless, transparent, and secure
              experience. Leveraging cutting-edge technology, our user-centric
              platform ensures a smooth process with real-time results, enhanced
              security protocols, and global accessibility. Built to be
              inclusive, environmentally friendly, and informative, our system
              accommodates all voters, providing clear instructions,
              multilingual support, and features for those with disabilities.
              Participate confidently from anywhere in the world, knowing your
              vote is protected and impactful, as we modernize and simplify the
              democratic process.
            </div>
            <Link to="/register">
              <button className={`${styles.GetStartedButton}`}>
                <div>Get Started</div>
              </button>
            </Link>
          </div>
          <div className={styles.LandingPageMainContentImg}>
            <div className={styles.LandingPageInfrastructurePic}>
              <img alt="e-vote" src={require("../../../src/assets/vote.jpg")} />
            </div>
          </div>
        </div>
        <div className={`${styles.LandingPageWhySectionWithBanner}`}>
          <div className={styles.LandingPageWhySection}>
            <div className={styles.LandingPageWhySectionTitle}>
              <h2>Why E-Voting</h2>
            </div>
            <div className={styles.WhySectionContent}>
              <div className={styles.DataCenterImage}>
                <img
                  alt="e-vote"
                  src={require("../../../src/assets/e-vote.jpg")}
                />
              </div>

              <div className={styles.WhySectionChildContainer}>
                <div className={styles.WhySectionItem}>
                  <div className={styles.WhySectionCardTitle}>
                    Seamless Process
                  </div>
                  <div>
                    {" "}
                    Say goodbye to long queues and cumbersome paper ballots. Our
                    user-friendly interface guides you through each step of the
                    voting process, making it accessible and straightforward for
                    everyone. Whether you're at home or on the go, casting your
                    vote is just a few clicks away.
                  </div>
                </div>
                <div className={styles.WhySectionItem}>
                  <div className={styles.WhySectionCardTitle}>
                    Transparency You Can Trust
                  </div>
                  <div>
                    We prioritize transparency at every level. Our system
                    provides real-time tracking of votes and generates instant,
                    verifiable results. Voters can independently verify that
                    their vote has been recorded and counted accurately,
                    fostering trust and confidence in the electoral process.
                  </div>
                </div>
                <div className={styles.WhySectionItem}>
                  <div className={styles.WhySectionCardTitle}>
                    Unmatched Security
                  </div>
                  <div>
                    Security is at the heart of our e-voting system. Utilizing
                    advanced encryption methods, multi-factor authentication,
                    and blockchain technology, we ensure that every vote is
                    protected from tampering and fraud. Your personal
                    information and voting preferences remain confidential,
                    safeguarded by cutting-edge security protocols.
                  </div>
                </div>
                <div className={styles.WhySectionItem}>
                  <div className={styles.WhySectionCardTitle}>
                    Accessibility for All
                  </div>
                  <div>
                    Our platform is designed to be inclusive, accommodating
                    voters with diverse needs. Features like adjustable text
                    sizes, screen reader compatibility, and multilingual support
                    ensure that everyone can participate in the democratic
                    process without barriers.
                  </div>
                </div>
                <div className={styles.WhySectionItem}>
                  <div className={styles.WhySectionCardTitle}>
                    Sustainable and Cost-Effective:
                  </div>
                  <div>
                    Embrace a greener, more cost-efficient way to vote. By
                    eliminating paper ballots and reducing the need for physical
                    polling stations, our e-voting system not only cuts costs
                    but also contributes to environmental sustainability.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.PageBannerSection}>
            <div className={styles.LeftPageBannerSection}>
              <div className={styles.LeftPageBannerInner}>
                <h2>Future of Voting</h2>
                <p className={styles.BannerParagraph}>
                  Join us in embracing the future of voting. Experience a
                  seamless, transparent, and secure process that empowers you to
                  make your voice heard with confidence and ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.blogContainerLanding}`}>
          <div>
          {blogs.map((blog)=>(
            <Blog blogUrl={blog.blogUrl} title={blog.title} description={blog.description} />
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
