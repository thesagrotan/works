import { brandLogoEllipses, getBrandLogoMaskUri } from '../lib/logoComponents';
import { COLORS } from '../config/tokens';

const svgPaths = brandLogoEllipses;
const imgGroup14 = getBrandLogoMaskUri();

// AI_GOOD: Extracted without behavior changes; DOM structure, classes, and SVG paths are identical to the inline version in HomePage.
function LogoCirclesOverlay() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[64px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16px_0px] mask-size-[32px_64px] ml-[16px] mt-0 relative w-[32px]" style={{ maskImage: `url('${imgGroup14}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 64">
          <g id="Group 14">
            {/* AI_GOOD: SVG path data references are exactly the same as before; no reordering or styling changes. */}
            <path d={svgPaths.ellipse65} id="Ellipse 65" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
            <path d={svgPaths.ellipse66} id="Ellipse 66" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
            <path d={svgPaths.ellipse67} id="Ellipse 67" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
            <path d={svgPaths.ellipse68} id="Ellipse 68" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
            <path d={svgPaths.ellipse69} id="Ellipse 69" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
            <path d={svgPaths.ellipse70} id="Ellipse 70" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
            <path d={svgPaths.ellipse71} id="Ellipse 71" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
            <path d={svgPaths.ellipse72} id="Ellipse 72" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
            <path d={svgPaths.ellipse73} id="Ellipse 73" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
            <path d={svgPaths.ellipse74} id="Ellipse 74" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
            <path d={svgPaths.ellipse75} id="Ellipse 75" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
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
          <circle cx="32" cy="32" id="Ellipse 65" r="31" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 66" r="26.2" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 67" r="21.4" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 68" r="16.6" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 69" r="11.8" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 70" r="7" stroke={`var(--stroke-0, ${COLORS.primary})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 71" r="10.2" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 72" r="15" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 73" r="19.8" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 74" r="24.6" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 75" r="29.4" stroke={`var(--stroke-0, ${COLORS.background})`} strokeWidth="2" />
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
