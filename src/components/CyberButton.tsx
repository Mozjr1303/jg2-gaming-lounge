import React from 'react';

export type CyberButtonColor = 'default' | 'primary' | 'primary-2' | 'simple' | 'red';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: CyberButtonColor;
  btnClassName?: string;
  children: React.ReactNode;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  color = 'default',
  btnClassName = '',
  children,
  ...rest
}) => {
  const colorClass =
    color === 'primary'
      ? 'CyberButton_primary__QMPVk'
      : color === 'primary-2'
      ? 'CyberButton_primary2__cXlFl'
      : color === 'simple'
      ? 'CyberButton_simple__un7ge'
      : color === 'red'
      ? 'CyberButton_red__cpp7R'
      : '';

  return (
    <button
      type="button"
      className={`CyberButton_cyberBtn__IHgpB ${btnClassName} ${colorClass}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};
