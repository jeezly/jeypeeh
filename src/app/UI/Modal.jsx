import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children, className = "" }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="modal modal-open" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`modal-box max-w-2xl relative ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="modal-action">
          <button className="btn btn-outline btn-error" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
