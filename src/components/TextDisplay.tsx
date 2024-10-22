// src/components/TextDisplay.tsx
import React from 'react';

interface TextDisplayProps {
  text: string;
  className?: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text, className }) => {
  return (
    <p className={`font-quicksand text-[#a72056] text-lg leading-relaxed max-w-2xl mx-auto ${className}`}>
      {text}
    </p>
  );
};

export default TextDisplay;
