"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QRCodeImage({ url, size = 224 }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, { width: size, margin: 1 }, () => {
        setReady(true);
      });
    }
  }, [url, size]);

  return (
    <div className="w-56 h-56 mx-auto rounded-2xl overflow-hidden shadow-lg bg-white relative">
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}