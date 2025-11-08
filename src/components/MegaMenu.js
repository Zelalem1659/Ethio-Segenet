import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

function MegaMenu({ onClose, mobile = false }) {
  const containerRef = useRef(null);
  const [exiting, setExiting] = React.useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const links = Array.from(container.querySelectorAll('a'));
    if (!links.length) return;

    // Make links roving-tabindex and focus the first item
    links.forEach((l) => l.setAttribute('tabindex', '-1'));
    links[0].setAttribute('tabindex', '0');
    links[0].focus();

    function onKey(e) {
      const active = document.activeElement;
      const idx = links.indexOf(active);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = links[(idx + 1) % links.length];
        links.forEach((l) => l.setAttribute('tabindex', '-1'));
        next.setAttribute('tabindex', '0');
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = links[(idx - 1 + links.length) % links.length];
        links.forEach((l) => l.setAttribute('tabindex', '-1'));
        prev.setAttribute('tabindex', '0');
        prev.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        links.forEach((l) => l.setAttribute('tabindex', '-1'));
        links[0].setAttribute('tabindex', '0');
        links[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        links.forEach((l) => l.setAttribute('tabindex', '-1'));
        links[links.length - 1].setAttribute('tabindex', '0');
        links[links.length - 1].focus();
      }
    }

    container.addEventListener('keydown', onKey);
    return () => container.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    if (mobile && containerRef.current) {
      containerRef.current.classList.add('slide-in');
    }
  }, [mobile]);

  function handleClose() {
    if (!mobile) return onClose?.();
    setExiting(true);
    if (containerRef.current) {
      containerRef.current.classList.remove('slide-in');
      containerRef.current.classList.add('slide-out');
      const t = setTimeout(() => {
        onClose?.();
      }, 260);
      return () => clearTimeout(t);
    }
    onClose?.();
  }

  return (
    <div ref={containerRef} className={(mobile ? 'mega-menu-mobile-panel' : '') + ' mega-menu-container bg-white text-black shadow-lg flex justify-center py-6 rounded-md' + (exiting ? ' slide-out' : '')} role="menu">
      {mobile && (
        <button className="mega-close-btn" onClick={handleClose} aria-label="Close menu">Close</button>
      )}
      {/* Column 1 */}
      <div className="menu-column mx-4">
        <h3 className="bg-red-600 text-white font-bold px-4 py-2 rounded-md shadow-md mb-3 text-center">
          ዜና እና መግለጫዎች
        </h3>
        <ul className="space-y-2">
          <li><Link role="menuitem" to="/news/politics" className="hover:text-red-600">ፖለቲካ</Link></li>
          <li><Link role="menuitem" to="/news/world" className="hover:text-red-600">ዓለም</Link></li>
          <li><Link role="menuitem" to="/news/economy" className="hover:text-red-600">ኢኮኖሚ</Link></li>
          <li><Link role="menuitem" to="/news/science" className="hover:text-red-600">ሳይንስ</Link></li>
          <li><Link role="menuitem" to="/news/health" className="hover:text-red-600">ጤና</Link></li>
          <li><Link role="menuitem" to="/news/education" className="hover:text-red-600">ትምህርት</Link></li>
          <li><Link role="menuitem" to="/news/history" className="hover:text-red-600">ታሪክ</Link></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="menu-column mx-4">
        <h3 className="bg-red-600 text-white font-bold px-4 py-2 rounded-md shadow-md mb-3 text-center">
          ልማት ዜናዎች
        </h3>
        <ul className="space-y-2">
          <li><Link role="menuitem" to="/news/science" className="hover:text-red-600">ሳይንስ</Link></li>
          <li><Link role="menuitem" to="/news/technology" className="hover:text-red-600">ቴክኖሎጂ</Link></li>
          <li><Link role="menuitem" to="/news/finance" className="hover:text-red-600">ፋይናንስ</Link></li>
          <li><Link role="menuitem" to="/news/industry" className="hover:text-red-600">ኢንዱስትሪ</Link></li>
          <li><Link role="menuitem" to="/news/agriculture" className="hover:text-red-600">አርሶአደር</Link></li>
          <li><Link role="menuitem" to="/news/innovation" className="hover:text-red-600">አዲስ መፍትሄዎች</Link></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="menu-column mx-4">
        <h3 className="bg-red-600 text-white font-bold px-4 py-2 rounded-md shadow-md mb-3 text-center">
          እንቅስቃሴ ዜናዎች
        </h3>
        <ul className="space-y-2">
          <li><Link role="menuitem" to="/news/sport" className="hover:text-red-600">ስፖርት</Link></li>
          <li><Link role="menuitem" to="/news/music" className="hover:text-red-600">ሙዚቃ</Link></li>
          <li><Link role="menuitem" to="/news/events" className="hover:text-red-600">እንቅስቃሴዎች</Link></li>
          <li><Link role="menuitem" to="/news/culture" className="hover:text-red-600">ባህል እና ሥነ ጥበብ</Link></li>
          <li><Link role="menuitem" to="/news/lifestyle" className="hover:text-red-600">የህይወት አዋጭት</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default MegaMenu;
