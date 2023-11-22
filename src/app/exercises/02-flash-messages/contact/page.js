'use client';
import React from 'react';
import { ToastContext } from '../../../../components/ToastProvider';
import { useRouter } from 'next/navigation';

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/exercises/02-flash-messages');
    createToast('Your message was received!', 'success');
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
