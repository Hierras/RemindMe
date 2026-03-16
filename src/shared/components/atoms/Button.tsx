import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  loading = false,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const getVariantStyles = () => {
    const baseStyles = {
      primary: 'bg-blue-500 active:bg-blue-600',
      secondary: 'bg-gray-500 active:bg-gray-600',
      outline: 'border-2 border-blue-500 bg-transparent',
      ghost: 'bg-transparent',
    };

    const textStyles = {
      primary: 'text-white',
      secondary: 'text-white',
      outline: 'text-blue-500',
      ghost: 'text-blue-500',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    };

    const textSizeStyles = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    return {
      button: `${baseStyles[variant]} ${sizeStyles[size]} rounded-lg ${disabled ? 'opacity-50' : ''}`,
      text: `${textStyles[variant]} ${textSizeStyles[size]} font-semibold text-center`,
    };
  };

  const styles = getVariantStyles();

  return (
    <TouchableOpacity
      className={`${styles.button} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? '#3b82f6' : 'white'} />
      ) : (
        <Text className={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
