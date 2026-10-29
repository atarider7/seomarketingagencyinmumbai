export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick Contact Actions">
      <a
        href="https://wa.me/919594147486"
        target="_blank"
        rel="noopener noreferrer"
        className="float-action-pill whatsapp-pill"
        title="Chat on WhatsApp"
      >
        <span className="float-pill-dot whatsapp-dot"></span>
        <span className="float-pill-icon">💬</span>
        <span className="float-pill-text">WhatsApp Us</span>
      </a>

      <a
        href="tel:+919594147486"
        className="float-action-pill call-pill"
        title="Call Us Direct"
      >
        <span className="float-pill-icon">📞</span>
        <span className="float-pill-text">+91 95941 47486</span>
      </a>
    </div>
  );
}
