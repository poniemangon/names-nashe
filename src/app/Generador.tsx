"use client";

import { useState } from "react";
import { TIPOS, generarNombres, type TipoId } from "@/lib/generators";
import styles from "./page.module.css";

export default function Generador({ iniciales }: { iniciales: string[] }) {
  const [tipoId, setTipoId] = useState<TipoId>(TIPOS[0].id);
  const [nombres, setNombres] = useState(iniciales);
  const [copiado, setCopiado] = useState<string | null>(null);

  const tipoActual = TIPOS.find((t) => t.id === tipoId) ?? TIPOS[0];

  function generar(id: TipoId) {
    setTipoId(id);
    setNombres(generarNombres(id));
    setCopiado(null);
  }

  async function copiar(nombre: string) {
    try {
      await navigator.clipboard.writeText(nombre);
      setCopiado(nombre);
    } catch {
      setCopiado(null);
    }
  }

  return (
    <>
      <div className={styles.tabs}>
        {TIPOS.map((tipo) => (
          <button
            key={tipo.id}
            type="button"
            aria-pressed={tipo.id === tipoId}
            className={styles.tab}
            onClick={() => generar(tipo.id)}
          >
            {tipo.titulo}
          </button>
        ))}
      </div>

      <p className={styles.formato}>{tipoActual.formato}</p>

      <ul className={styles.lista}>
        {nombres.map((nombre) => (
          <li key={nombre}>
            <button type="button" className={styles.nombre} onClick={() => copiar(nombre)}>
              <span>{nombre}</span>
              <span className={styles.accion}>{copiado === nombre ? "Copiado" : "Copiar"}</span>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className={styles.generar} onClick={() => generar(tipoId)}>
        Generar otros
      </button>
    </>
  );
}
