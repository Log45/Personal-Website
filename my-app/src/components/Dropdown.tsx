import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  minHeight?: number;
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, minHeight, buttonRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(2.2); // rem
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !contentRef.current || !minHeight) return;
    let currentFont = 2.2;
    const minFont = 1.0;
    const step = 0.05;
    const el = contentRef.current;
    el.style.fontSize = currentFont + 'rem';
    while (el.scrollHeight > minHeight && currentFont > minFont) {
      currentFont -= step;
      el.style.fontSize = currentFont + 'rem';
    }
    setFontSize(currentFont);
  }, [isOpen, minHeight, children]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown} ref={buttonRef}>
        {title}
      </button>
      {isOpen && (
        <div
          className="dropdown-content"
          ref={contentRef}
          style={{ minHeight: minHeight, fontSize: fontSize + 'rem' }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 