import React from "react";
import TiltedCard from "../Introduction/TiltedCard";
import IntroductionCard from "../Introduction/IntroductionCard";
import Quote from "../Introduction/Quote";

function IntroductionSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-between md:p-20 max-md:p-8 max-md:items-start max-md:flex-col gap-8">
      <IntroductionCard />

      <div className="max-md:hidden cursor-target">
        <TiltedCardSnippet size="300px" />
      </div>

      <div className="md:hidden cursor-target">
        <TiltedCardSnippet size="250px" />
      </div>

      <Quote />
    </div>
  );
}

function TiltedCardSnippet({ size }) {
  return (
    <TiltedCard
      imageSrc="/personal_photo.jpeg"
      altText="Osama Akila - Personal Picture"
      captionText="Osama Akila"
      containerHeight={size}
      containerWidth={size}
      imageHeight={size}
      imageWidth={size}
      rotateAmplitude={12}
      scaleOnHover={1.1}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={false}
      overlayContent={
        <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
      }
    />
  );
}

export default IntroductionSection;
