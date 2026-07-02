import React, { useState, useEffect } from "react";
import Navlinks from "../Navlinks";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="flex flex-row justify-end">
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen z-[999] bg-primary overflow-y-auto">
          <div className="flex flex-row justify-end p-2">
            <button
              className="text-lg font-semibold flex flex-row gap-2"
              onClick={() => setIsOpen(false)}
            >
              <i className="bi bi-x-lg"></i>
              <span>Fechar</span>
            </button>
          </div>

          <div className="p-2 md:p-0">
            <Navlinks />
          </div>
        </div>
      )}

      <button
        className="text-lg flex flex-row gap-2 items-center font-semibold p-2"
        onClick={() => setIsOpen(true)}
      >
        <i className="bi bi-list"></i>
        <span>Menu</span>
      </button>
    </div>
  );
}
