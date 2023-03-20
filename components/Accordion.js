import React, { useState } from 'react';
import styles from '../styles/Accordion.module.css';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.bar} onClick={handleToggle}>
        <h2>{title}</h2>
        <button className={styles.toggleButton}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export default Accordion;
