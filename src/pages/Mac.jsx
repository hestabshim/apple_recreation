import NavMacFamily from "../components/nav_macfamily";
import Section from "../components/section";
import "../styles/mac.css";
import medium_2x from "../assets/medium_2x.mp4";
const Mac = () => {
  return (
    <>
      <NavMacFamily />
      <Section>
        <div className="text-container">
          <h1>Mac</h1>
          <p>
            If you can dream it,
            <br />
            Mac can do it.
          </p>
        </div>
        <div className="video-container">
          <video src={medium_2x} autoPlay muted loop controls />
        </div>
      </Section>
    </>
  );
};

export default Mac;
