import { usePeopleVM } from "../viewModel/usePeopleVM.jsx";
import PeopleForm from "./PeopleForm.jsx";

export default function PeopleList() {
  const { items, loading, error, selected, actions } = usePeopleVM();

  return (
    <div className="stack">
      <PeopleForm
        editing={selected}
        onSubmit={(data) => {
          if (selected) actions.update(selected.id, data);
          else actions.create(data);
        }}
        onCancel={actions.cancelEdit}
      />

      <div className="row spread">
        <h2 className="h2">Personas</h2>
        <button className="btn" onClick={actions.load}>Refrescar</button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Creado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.first_name}</td>
              <td>{p.last_name}</td>
              <td>{new Date(p.created_at).toLocaleString()}</td>
              <td>
                <div className="row">
                  <button className="btn" onClick={() => actions.startEdit(p)}>Editar</button>
                  <button className="btn danger" onClick={() => actions.remove(p.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
          {items.length === 0 && !loading && (
            <tr><td colSpan="5">Sin registros.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
