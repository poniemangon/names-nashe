import { Suspense } from "react";
import { connection } from "next/server";
import { TIPOS, generarNombres } from "@/lib/generators";
import Generador from "./Generador";
import styles from "./page.module.css";

async function GeneradorDinamico() {
  // Renderiza en cada request para que cada recarga traiga nombres nuevos
  await connection();

  return <Generador iniciales={generarNombres(TIPOS[0].id)} />;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Generador de nombres</h1>
      <Suspense>
        <GeneradorDinamico />
      </Suspense>
    </main>
  );
}
