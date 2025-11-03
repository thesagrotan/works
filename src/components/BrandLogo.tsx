import svgPaths from '../imports/svg-hero-paths';
import { imgGroup14 } from "../imports/svg-logo-paths";

// AI_GOOD: Extracted without behavior changes; DOM structure, classes, and SVG paths are identical to the inline version in HomePage.
function LogoCirclesOverlay() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[64px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16px_0px] mask-size-[32px_64px] ml-[16px] mt-0 relative w-[32px]" style={{ maskImage: `url('${imgGroup14}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 64">
          <g id="Group 14">
            {/* AI_GOOD: SVG path data references are exactly the same as before; no reordering or styling changes. */}
            <path d={svgPaths.p1d34c480} id="Ellipse 65" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p2646ea00} id="Ellipse 66" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p1d76dc60} id="Ellipse 67" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p350a7680} id="Ellipse 68" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p2f4d2600} id="Ellipse 69" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p171c1700} id="Ellipse 70" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p37f60000} id="Ellipse 71" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p26c95400} id="Ellipse 72" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p21da900} id="Ellipse 73" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p3451a000} id="Ellipse 74" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p2c665800} id="Ellipse 75" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ConcentricCircles() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 13">
          {/* AI_GOOD: Circle radii and stroke attributes preserved exactly. */}
          <circle cx="32" cy="32" id="Ellipse 65" r="31" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 66" r="26.2" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 67" r="21.4" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 68" r="16.6" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 69" r="11.8" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 70" r="7" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 71" r="10.2" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 72" r="15" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 73" r="19.8" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 74" r="24.6" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 75" r="29.4" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function BrandLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-w-[424px] w-full">
      <ConcentricCircles />
      <LogoCirclesOverlay />
    </div>
  );
}
