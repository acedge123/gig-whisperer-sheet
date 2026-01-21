import { useScrollEffects } from '@/hooks/useScrollEffects';

interface DiagonalStripeProps {
  className?: string;
}

const DiagonalStripe = ({ className = '' }: DiagonalStripeProps) => {
  const { parallaxOffset } = useScrollEffects();

  return (
    <div 
      className={`absolute pointer-events-none overflow-hidden ${className}`}
      style={{
        top: 0,
        left: '50%',
        width: '200%',
        height: '150%',
        transform: `translateX(-50%) translateY(${-parallaxOffset * 0.5}px)`,
      }}
    >
      <div
        className="absolute"
        style={{
          width: '100%',
          height: '100%',
          background: 'var(--gradient-stripe)',
          transform: 'skewX(-46deg)',
          transformOrigin: 'top center',
          opacity: 0.85,
          left: '-25%',
        }}
      />
    </div>
  );
};

export default DiagonalStripe;
