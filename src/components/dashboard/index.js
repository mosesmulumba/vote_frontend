import React from "react";
import Header from "../header";
import Footer from "../footer";
import dp from "../../assets/pre11.png";
import logo5 from "../../assets/logo5.png";
import Candidate from "../candidate";
import styles from './dashboard.module.css';

function Dashboard() {
  const logoUrl = logo5;
  const siteName = "UMU E-Vote System";

  const candidates = [
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
    { imageUrl: dp, name: "Moses Mulumba", post: "President" },
  ];

  return (
    <>
      <Header logoUrl={logoUrl} siteName={siteName} />
      <div>
        <div>Contesting Union President</div>
        <div className={`${styles.dashboardCandidates}`}>
          {candidates.map((candidate) => (
            <div>
                <Candidate
                imageUrl={candidate.imageUrl}
                name={candidate.name}
                post={candidate.post}
                />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
