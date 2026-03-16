import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  className = '', 
  children, 
  style,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'h1':
        return 'text-3xl font-bold';
      case 'h2':
        return 'text-2xl font-semibold';
      case 'h3':
        return 'text-xl font-semibold';
      case 'body':
        return 'text-base';
      case 'caption':
        return 'text-sm text-gray-500';
      default:
        return 'text-base';
    }
  };

  return (
    <RNText 
      className={`${getVariantStyles()} ${className}`} 
      style={style}
      {...props}
    >
      {children}
    </RNText>
  );
};
