import NavMacFamily from "../components/nav_macfamily";
import Section from "../components/section";
import "../styles/mac.css";
import Video from "../components/video";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";

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
        <Video />
        <div className="header-text">
          <h1>Get to know Mac.</h1>
        </div>
        <CardContainer>
          <Card
            image="src/assets/mac_intelligence__esfi0qmvis6e_medium_2x.jpg"
            title="MacBook Air"
            description="M2 chip. Power to go."
          />
          <Card
            image="src/assets/mac_performance__dh5hyac1zf8m_medium_2x.jpg"
            title="MacBook Pro"
            description="Supercharged by M2 Pro and M2 Max."
          />
          <Card
            image="src/assets/mac_iphone__gh1tblkt6bqm_medium_2x.jpg"
            title="iMac"
            description="Say hello to the new iMac."
          />
          <Card
            image="src/assets/mac_compatibility__cu59oukz81ci_medium_2x.jpg"
            title="Mac mini"
            description="More muscle. More hustle."
          />
          <Card
            image="src/assets/mac_security__gfwda10khdym_medium_2x.jpg"
            title="Mac Studio"
            description="Supercharged by M2 Max and M2 Ultra."
          />
          <Card
            image="src/assets/mac_durability__epiwcuk7zkeq_medium_2x.jpg"
            title="Mac Pro"
            description="The most powerful Mac ever."
          />
          <Card
            image="src/assets/mac_values__c9gck9qi4kia_medium_2x.jpg"
            title="Mac Pro"
            description="The most powerful Mac ever."
          />
        </CardContainer>
        <div className="header-text">
          <h1>Help me choose.</h1>
        </div>
        <div className="header-text">
          <h1>Explore the lineup.</h1>
        </div>
        <div className="header-text">
          <h1>Apple Trade In</h1>
        </div>
        <div className="header-text">
          <h1>Why Apple is the best place to buy Mac.</h1>
        </div>
        <div className="header-text">
          <h1>Signifcant others.</h1>
        </div>
        <div className="header-text"><h1>Mac essentials</h1></div>
      </Section>
    </>
  );
};

export default Mac;
