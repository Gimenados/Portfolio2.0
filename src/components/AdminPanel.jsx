import React, { useEffect, useMemo, useState } from "react";

const API = "http://localhost:3001/status";

const AdminPanel = () => {
  const [mode, setMode] = useState("Disponible");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const badge = useMemo(() => {
    if (mode === "Disponible")
      return { dot: "#22c55e", bg: "rgba(34,197,94,.15)", border: "rgba(34,197,94,.35)" };
    if (mode === "Ocupada")
      return { dot: "#f59e0b", bg: "rgba(245,158,11,.15)", border: "rgba(245,158,11,.35)" };
    return { dot: "#ef4444", bg: "rgba(239,68,68,.15)", border: "rgba(239,68,68,.35)" };
  }, [mode]);

  useEffect(() => {
    let ignore = false;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (ignore) return;
        setMode(data?.mode || "Disponible");
        setMessage(data?.message || "Respondo en 24–48 hs.");
      })
      .catch(() => {
        if (ignore) return;
        setError("No pude conectar con el backend. ¿Está corriendo en :3001?");
      });
    return () => {
      ignore = true;
    };
  }, []);

  const saveStatus = async () => {
    setLoading(true);
    setSaved(false);
    setError("");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, message }),
      });

      if (!res.ok) throw new Error("Bad response");

      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      setError("Error guardando. Revisá que el backend esté prendido en :3001.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ Acá forzamos que NO herede imagen de fondo del "fondo-container"
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Panel de Estado</h1>
            <p style={styles.subtitle}>Actualizá tu disponibilidad sin tocar código.</p>
          </div>

          <div style={{ ...styles.pill, background: badge.bg, borderColor: badge.border }}>
            <span style={{ ...styles.dot, background: badge.dot }} />
            <span style={styles.pillText}>{mode}</span>
          </div>
        </div>

        <div style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Estado</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)} style={styles.input}>
              <option value="Disponible" style={styles.optionLight}>Disponible</option>
              <option value="Ocupada" style={styles.optionLight}>Ocupada</option>
              <option value="No-disponible" style={styles.optionLight}>No disponible</option>
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Mensaje</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ej: Respondo en 24–48 hs."
              style={styles.input}
            />
          </div>

          {error && <div style={styles.alertError}>{error}</div>}
          {saved && <div style={styles.alertOk}>Guardado ✔</div>}

          <div style={styles.actions}>
            <button onClick={saveStatus} disabled={loading} style={{ ...styles.btn, opacity: loading ? 0.7 : 1 }}>
              {loading ? "Guardando..." : "Guardar cambios"}
            </button>

            <a href="/" style={styles.link}>Volver al portfolio</a>
          </div>

          <div style={styles.hint}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "2rem 1rem",

    // ✅ Esto evita que se vea la imagen heredada de contenedores padres
    backgroundImage: "none",
    // ✅ Y fijamos un fondo propio (si querés usar el del portfolio, borrá estas 2 líneas)
    backgroundColor: "#050814",
    background: "linear-gradient(180deg, #0b1020 0%, #050814 100%)",
  },
  card: {
    width: "min(720px, 100%)",
    borderRadius: "24px",
    padding: "1.5rem",
    background: "rgba(10, 18, 45, 0.55)",
    border: "1px solid rgba(255,255,255,.12)",
    boxShadow: "0 20px 60px rgba(0,0,0,.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "white",
    textAlign: "left",
  },
  header: {
    display: "flex",
    gap: "1rem",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: "1.2rem",
  },
  title: { margin: 0, fontSize: "2rem", lineHeight: 1.1 },
  subtitle: { margin: ".35rem 0 0", opacity: 0.85 },
  pill: {
    display: "flex",
    alignItems: "center",
    gap: ".55rem",
    borderRadius: "999px",
    padding: ".45rem .75rem",
    border: "1px solid rgba(255,255,255,.12)",
  },
  dot: { width: 10, height: 10, borderRadius: "50%" },
  pillText: { fontWeight: 600 },
  form: {
    display: "grid",
    gap: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255,255,255,.12)",
  },
  field: { display: "grid", gap: ".4rem" },
  label: { fontWeight: 600, opacity: 0.9 },
  input: {
    width: "100%",
    padding: ".85rem 1rem",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(255,255,255,.08)",
    color: "white",
    outline: "none",
  },

  // ✅ Para que el dropdown no quede con letras blancas sobre fondo claro
  optionLight: { color: "#111", background: "#fff" },

  actions: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: ".25rem",
  },
  btn: {
    padding: ".9rem 1.1rem",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(147, 51, 234, .35)",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
  link: { color: "rgba(255,255,255,.9)", textDecoration: "none", opacity: 0.85 },
  alertOk: {
    padding: ".8rem 1rem",
    borderRadius: "14px",
    background: "rgba(34,197,94,.15)",
    border: "1px solid rgba(34,197,94,.35)",
  },
  alertError: {
    padding: ".8rem 1rem",
    borderRadius: "14px",
    background: "rgba(239,68,68,.15)",
    border: "1px solid rgba(239,68,68,.35)",
  },
  hint: { fontSize: ".9rem", opacity: 0.75, marginTop: ".25rem" },
};

export default AdminPanel;
