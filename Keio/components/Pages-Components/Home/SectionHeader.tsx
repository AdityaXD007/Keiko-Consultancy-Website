// components/home/SectionHeader.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({
  title, subtitle, eyebrow, align = 'center', className = '',
}: SectionHeaderProps) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-6 sm:mb-8 lg:mb-12 ${alignCls} ${className}`}>
      {eyebrow && <div className="mb-3 sm:mb-4 flex justify-center">{eyebrow}</div>}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-yokohama-dark-text">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 max-w-2xl text-sm sm:text-base lg:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}