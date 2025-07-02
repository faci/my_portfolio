'use client';

import { useState } from 'react';
import styles from './tidyCalModal.module.css';

const TidyCalModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.openButton}>
        📅 Réserver un appel
      </button>

      {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={() => setOpen(false)}>
              ✕
            </button>
            <iframe
              src="https://tidycal.com/lisasarahf/30-minute-meeting"
              className={styles.iframe}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TidyCalModal;
