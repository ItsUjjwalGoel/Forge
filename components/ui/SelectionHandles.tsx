"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function SelectionHandles() {
  const [coords, setCoords] = useState<{
    start: { x: number; y: number; height: number } | null;
    end: { x: number; y: number; height: number } | null;
  }>({ start: null, end: null });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const update = () => {
      const selection = window.getSelection();

      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        setCoords({ start: null, end: null });
        return;
      }

      const range = selection.getRangeAt(0);
      const rects = range.getClientRects();

      if (rects.length === 0) {
        setCoords({ start: null, end: null });
        return;
      }

      // Handle start (first rect)
      const startRect = rects[0];

      // Handle end (last rect)
      const endRect = rects[rects.length - 1];

      setCoords({
        start: {
          x: startRect.left,
          y: startRect.top,
          height: startRect.height,
        },
        end: {
          x: endRect.right,
          y: endRect.top,
          height: endRect.height,
        },
      });
    };

    // Events to track
    document.addEventListener("selectionchange", update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      document.removeEventListener("selectionchange", update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!isClient || !coords.start || !coords.end) return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Start Handle (Left, Ball on Top) */}
      <div
        className="absolute bg-black"
        style={{
          left: coords.start.x - 1, // Offset to center on edge
          top: coords.start.y,
          height: coords.start.height,
          width: "2px",
        }}>
        <div className="absolute -top-2 -left-[5px] w-3 h-3 bg-black rounded-full" />
      </div>

      {/* End Handle (Right, Ball on Bottom) */}
      <div
        className="absolute bg-black"
        style={{
          left: coords.end.x - 1,
          top: coords.end.y,
          height: coords.end.height,
          width: "2px",
        }}>
        <div className="absolute -bottom-2 -left-[5px] w-3 h-3 bg-black rounded-full" />
      </div>
    </div>,
    document.body,
  );
}
