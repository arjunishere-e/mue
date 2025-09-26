import React, { useState } from "react";
import styles from "./SpecialEvents.module.css";

// Vite way to import all images from the gallery folder
const imageModules = import.meta.glob("../gallery/*.{png,jpg,jpeg,webp}", {
  eager: true,
});
const images: string[] = Object.values(imageModules).map(
  (mod: any) => mod.default
);

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={styles.pageContainer}>
      <h1 style={{ color: "#2563eb", marginBottom: "2rem" }}>Event Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Event ${idx + 1}`}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        ))}
      </div>
      {selected && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Large Event"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "18px",
              boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
