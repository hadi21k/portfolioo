const BlurryBg = () => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 800 450"
      opacity="0.83"
      className="absolute inset-0 -left-[15%] h-full opacity-60 dark:opacity-40 max-md:-left-1/2"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="68"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="90"
          ry="90"
          cx="378.42814497514206"
          cy="149.70056013627487"
          fill="#ec4899"
        ></ellipse>
        <ellipse
          rx="90"
          ry="90"
          cx="466.81811523437494"
          cy="275.5440368652344"
          fill="#ef4444"
        ></ellipse>
        <ellipse
          rx="90"
          ry="90"
          cx="283.26440984552556"
          cy="284.1713340065696"
          fill="#eab308"
        ></ellipse>
      </g>
    </svg>
  );
};

export default BlurryBg;
