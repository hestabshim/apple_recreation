import React from "react";
import BigCard from "../components/bigcard";
import hero_macbook_air_announce__dqw53b1i7j6u_large_2x from "../assets/hero_macbook_air_announce__dqw53b1i7j6u_large_2x.jpg";
import hero_ipad_air_preorder__ftn4a0m2i0uq_large_2x from "../assets/hero_ipad_air_preorder__ftn4a0m2i0uq_large_2x.jpg";
import hero_iphone_family__fuz5j2v5xx6y_large_2x from "../assets/hero_iphone_family__fuz5j2v5xx6y_large_2x.jpg";
import promo_airpods_pro_2_avail__vkitqi3okwie_medium_2x from "../assets/promo_airpods_pro_2_avail__vkitqi3okwie_medium_2x.jpg";    
import promo_apple_card__5cm7draujpey_medium_2x from "../assets/promo_apple_card__5cm7draujpey_medium_2x.jpg";
import GridItem from "../components/GridItem";
import GridContainer from "../components/GridContainer";
const HomePage = () => {
  return (
    <>
      <BigCard
        image={hero_macbook_air_announce__dqw53b1i7j6u_large_2x}
        title="Macbook Air"
        subtitle="Sky blue color. Sky high performance."
        cta={{ link1: "Learn more", link2: "Pre-order." }}
      />
      <BigCard
        image={hero_ipad_air_preorder__ftn4a0m2i0uq_large_2x}
        title="iPad Air"
        subtitle="Now supercharged by the M3 chip."
        cta={{ link1: "Learn more", link2: "Pre-order." }}
      />
      <BigCard
        image={hero_iphone_family__fuz5j2v5xx6y_large_2x}
        title="iPhone"
        subtitle="Meet the new iPhone 16 family."
        cta={{ link1: "Learn more", link2: "Learn more." }}
      />
      {/* <GridContainer>
      <GridItem image={promo_airpods_pro_2_avail__vkitqi3okwie_medium_2x} />
      <GridItem image={promo_apple_card__5cm7draujpey_medium_2x}/>
      <GridItem image={promo_apple_card__5cm7draujpey_medium_2x}/>
      <GridItem image={promo_apple_card__5cm7draujpey_medium_2x}/>
      </GridContainer> */}
      
        
    </>
  );
};

export default HomePage;
