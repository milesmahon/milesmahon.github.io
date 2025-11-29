import { useState } from 'react';
import '../../styles/copy-click.css';

type CopyEmailProps = {
  className?: string;
  text?: string;
  link?: string;
};

export function CopyEmail({ className = '', text, link }: CopyEmailProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const emailLabel = text ?? '';
  const emailValue = link ?? '';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(emailValue);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1200);
    } catch (err) {
      console.error('Unable to copy email', err);
    }
  };

  const classes = [
    'copy-click',
    isHovered ? 'is-hovered' : '',
    isCopied ? 'is-copied' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      id="copy-click"
      href={`mailto:${emailValue}`}
      data-copy-string={emailValue}
      data-tooltip-text="Copy email"
      data-tooltip-text-copied="Copied!"
      className={classes}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(event) => {
        event.preventDefault();
        void copy();
      }}
    >
      {emailLabel}
    </a>
  );
}
