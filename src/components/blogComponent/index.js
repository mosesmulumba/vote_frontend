import React from "react";
import styles from "./blogComponent.module.css";

function Blog({blogUrl , title , description}){

    return(
        <>
            <div className={`${styles.blogContainer}`}>
                <img src={blogUrl} alt="blog image" className={`${styles.blogImage}`} />
                <h3 className={`${styles.title}`}>{title}</h3>
                <p className={`${styles.description}`}>{description}</p>
            </div>
        </>
    );
};

export default Blog;