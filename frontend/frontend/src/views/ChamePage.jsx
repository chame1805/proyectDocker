import { useChameVM } from "../viewModel/useChameVM";

export default function ChamePage() {
  const { fullName, loading, error } = useChameVM();

  return (
    <section className="card">
      <h2 className="h2">/chame</h2>
      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          <p>Nombre completo desde backend:</p>
          <p className="big">{fullName}</p>
        </>
      )}
    </section>
  );
}
