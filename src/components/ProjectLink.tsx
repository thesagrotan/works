interface ProjectLinkProps {
  label: string;
}

export default function ProjectLink({ label }: ProjectLinkProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
      <p className="text-hero not-italic relative shrink-0 text-nowrap whitespace-pre">{label}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
            <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
