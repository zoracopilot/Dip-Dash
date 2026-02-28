interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => (
  <div className={`text-center mb-8 md:mb-12 ${className}`}>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-12 sm:w-16 md:w-20 h-1 bg-primary mx-auto mt-2 md:mt-4 rounded-full" />
  </div>
);

export default SectionHeader;
