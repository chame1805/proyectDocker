import { useEffect, useState } from "react";

export default function PeopleForm({ onSubmit, onCancel, editing }) {
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");

  useEffect(() => {
    if (editing) {
      setFirst(editing.first_name);
      setLast(editing.last_name);
    } else {
      setFirst("");
      setLast("");
    }
  }, [editing]);

  const isEditing = Boolean(editing);

  return (
    <form
      className="card"
      onSubmit={(e) => {
        e.preventDefault();
        const fn = first_name.trim();
        const ln = last_name.trim();
        if (!fn || !ln) return;
        onSubmit({ first_name: fn, last_name: ln });
      }}
    >
      <h2 className="h2">{isEditing ? "Editar persona" : "Nueva persona"}</h2>

      <label className="field">
        <span>Nombre</span>
        <input
          value={first_name}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="Ej. Ángel"
        />
      </label>

      <label className="field">
        <span>Apellido</span>
        <input
          value={last_name}
          onChange={(e) => setLast(e.target.value)}
          placeholder="Ej. Chame"
        />
      </label>

      <div className="row">
        <button type="submit" className="btn primary">
          {isEditing ? "Guardar" : "Crear"}
        </button>
        {isEditing && (
          <button type="button" className="btn" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
