import styles from "../styles/section.module.css";
const Section = ({children}) => {
return (
    <div className={`${styles["section"]}`}>
       <div className={`${styles["section-content"]}`}>
        {children}
       </div>
    </div>
)
}

export default Section;
