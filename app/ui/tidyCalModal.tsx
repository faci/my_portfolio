'use client';

import { useState } from 'react';
import styles from './tidyCalModal.module.css';

const TidyCalModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.book_meeting}>
        👉 Vous avez un projet et souhaitez en discuter, ou simplement besoin d&apos;un conseil tech
        <button onClick={() => setOpen(true)} className={styles.openButton}>
          📅 Parlons en !
        </button>
      </div>

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
