import svgPaths from "./svg-navigation-paths";
import imgAttachment from "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png";
import imgAttachment1 from "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png";
import imgAttachment2 from "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png";

function Frame1000006081() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[28px] not-italic relative shrink-0 text-[24px] text-black tracking-[0.036px] w-[122px]">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 w-full">CredCore</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 w-full">2023-2025</p>
    </div>
  );
}

function Frame1000003440() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px] w-[144px]">UX/UI Design</p>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 9"></g>
        </svg>
      </div>
    </div>
  );
}

function Frame1000003453() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px] w-[144px]">Design Systems</p>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 9"></g>
        </svg>
      </div>
    </div>
  );
}

function Frame1000003454() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px] w-[144px]">Framer</p>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 9"></g>
        </svg>
      </div>
    </div>
  );
}

function Frame1000006065() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1000003440 />
      <Frame1000003453 />
      <Frame1000003454 />
    </div>
  );
}

function Frame1000006067() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame1000006065 />
    </div>
  );
}

function Frame1000006082() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[180px]">
      <Frame1000006081 />
      <Frame1000006067 />
    </div>
  );
}

function Frame1000006068() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="font-['SF_Pro_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#323e45] text-[0px] tracking-[0.036px] w-full">
        <p className="leading-[28px] mb-0 text-[24px]">
          <span>{`I’m Daniel Campagne, `}</span>
          <span className="font-['SF_Pro_Display:Semibold',sans-serif] not-italic">{`a product designer `}</span>who transforms complex systems into intuitive experiences<span>{` while `}</span>helping brands tell their stories effectively.
        </p>
        <p className="leading-[28px] mb-0 text-[24px]">&nbsp;</p>
        <p className="leading-[28px] text-[24px]">
          <span>{`I’m Daniel Campagne, `}</span>
          <span className="font-['SF_Pro_Display:Semibold',sans-serif] not-italic">{`a product designer `}</span>who transforms complex.
        </p>
      </div>
    </div>
  );
}

function Frame1000006069() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full">
      <Frame1000006068 />
    </div>
  );
}

function Frame1000006070() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[399px]">
      <Frame1000006069 />
    </div>
  );
}

function Frame1000006083() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
      <Frame1000006082 />
      <Frame1000006070 />
    </div>
  );
}

function Frame1000003455() {
  return (
    <div className="bg-stone-50 h-[387px] relative rounded-[8px] shrink-0 w-[619px]">
      <div className="content-stretch flex flex-col h-[387px] items-start overflow-clip relative rounded-[inherit] w-[619px]">
        <div className="aspect-[162/105.11] relative shrink-0 w-full" data-name="$attachment">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[170.42%] left-[-9.25%] max-w-none top-[-0.17%] w-[170.12%]" src={imgAttachment} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
    </div>
  );
}

function Frame1000003457() {
  return (
    <div className="bg-stone-50 h-[387px] relative rounded-[8px] shrink-0 w-[400px]">
      <div className="content-stretch flex flex-col h-[387px] items-start overflow-clip relative rounded-[inherit] w-[400px]">
        <div className="aspect-[141.794/92] relative shrink-0 w-full" data-name="$attachment">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[347.31%] left-[-16.64%] max-w-none top-[0.52%] w-[346.68%]" src={imgAttachment1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
    </div>
  );
}

function Frame1000003456() {
  return (
    <div className="bg-stone-50 h-[662px] relative rounded-[8px] shrink-0 w-[1060px]">
      <div className="content-stretch flex flex-col h-[662px] items-start overflow-clip relative rounded-[inherit] w-[1060px]">
        <div className="aspect-[104/67.4783] relative shrink-0 w-full" data-name="$attachment">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[138.3%] left-[0.13%] max-w-none top-[0.12%] w-[138.05%]" src={imgAttachment2} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
    </div>
  );
}

function Frame1000006084() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
      <Frame1000003455 />
      <Frame1000003457 />
      <Frame1000003456 />
    </div>
  );
}

function Frame1000006085() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center left-[calc(8.333%+3.333px)] top-[256px] w-[1060px]">
      <Frame1000006083 />
      <Frame1000006084 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-stone-800 box-border content-stretch flex gap-[13px] items-start left-[calc(83.333%+1.333px)] px-[18px] py-[15px] rounded-[14px] shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] top-[40px]">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#edefeb] text-[18px] text-nowrap tracking-[-0.18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Chat with me</p>
      </div>
    </div>
  );
}

export default function DesktopProjectPage() {
  return (
    <div className="bg-[#edefeb] relative size-full" data-name="MacBook Air - 10">
      <Frame1000006085 />
      <div className="absolute flex h-0 items-center justify-center left-[64px] top-[78px] w-[64px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[64px]">
            <div className="absolute bottom-[-7.36px] left-0 right-[-1.56%] top-[-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 15">
                <path d={svgPaths.p34105200} fill="var(--stroke-0, black)" id="Line 296" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}