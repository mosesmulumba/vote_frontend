import React from "react";
import styles from "./candidate.module.css";

function Candidate({ imageUrl, name, post }) {
    
  const handleOnClick=()=>{
    
  };

  return (
    <>
      <div className={`${styles.Candidates}`}>
        <div className={`${styles.CandidateContainer}`}>
          <img src={imageUrl} alt="candidate-dp" />
          <h3>{name}</h3>
          <h4>{post}</h4>
          <button type="submit" value="Vote" onClick={handleOnClick()}>
            Vote
          </button>
        </div>
      </div>
    </>
  );
}

export default Candidate;
