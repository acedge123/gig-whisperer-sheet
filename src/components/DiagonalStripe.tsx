import { useScrollEffects } from '@/hooks/useScrollEffects';

interface DiagonalStripeProps {
  className?: string;
}

const DiagonalStripe = ({ className = '' }: DiagonalStripeProps) => {
  const { parallaxOffset } = useScrollEffects();

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Blue gradient on left side */}
      <div
        className="absolute"
        style={{
          width: '150%',
          height: '250%',
          top: '-75%',
          left: '-80%',
          background: 'linear-gradient(160deg, hsl(197 52% 55%) 0%, hsl(175 48% 55%) 50%, hsl(163 56% 58%) 100%)',
          transform: `skewX(-46deg) translateY(${-parallaxOffset * 0.25}px)`,
          transformOrigin: 'center center',
        }}
      />
      {/* Light background on right side - creates the diagonal cut */}
      <div
        className="absolute bg-background"
        style={{
          width: '100%',
          height: '250%',
          top: '-75%',
          right: '-25%',
          transform: `skewX(-46deg) translateY(${-parallaxOffset * 0.25}px)`,
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
};

export default DiagonalStripe;
