'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'service' | 'testimonial';
  hoverEffect?: boolean;
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true
}: CardProps) => {
  const baseClasses = "rounded-xl overflow-hidden shadow-lg bg-white";

  const variantClasses = {
    default: "p-6",
    service: "p-6 h-full flex flex-col",
    testimonial: "p-6 relative"
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;