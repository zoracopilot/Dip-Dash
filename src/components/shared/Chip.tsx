interface ChipProps {
  label: string;
  className?: string;
}

const Chip = ({ label, className = "" }: ChipProps) => (
  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-lavender-glow border border-primary/30 ${className}`}>
    {label}
  </span>
);

export default Chip;
