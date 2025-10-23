import { useCallback, useEffect, useMemo, useState } from "react";
import { PeopleAPI } from "../service/api";

export function usePeopleVM() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await PeopleAPI.list();
      setItems(data);
      setError(null);
    } catch (e) {
      setError(e?.response?.data?.error || e?.message || "Error cargando personas");
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(async (payload) => {
    try {
      await PeopleAPI.create(payload);
      setSelected(null); // limpiar form por si acaso
      await load();
    } catch (e) {
      setError(e?.response?.data?.error || e?.message || "Error creando persona");
      console.error("Create error:", e);
    }
  }, [load]);

  const update = useCallback(async (id, payload) => {
    try {
      await PeopleAPI.update(id, payload);
      setSelected(null);
      await load();
    } catch (e) {
      setError(e?.response?.data?.error || e?.message || "Error actualizando persona");
      console.error("Update error:", e);
    }
  }, [load]);

  const remove = useCallback(async (id) => {
    try {
      await PeopleAPI.remove(id);
      await load();
    } catch (e) {
      setError(e?.response?.data?.error || e?.message || "Error eliminando persona");
      console.error("Remove error:", e);
    }
  }, [load]);

  const startEdit = useCallback((p) => setSelected(p), []);
  const cancelEdit = useCallback(() => setSelected(null), []);

  useEffect(() => { load(); }, [load]);

  return useMemo(() => ({
    items, loading, error, selected,
    actions: { load, create, update, remove, startEdit, cancelEdit },
  }), [items, loading, error, selected, load, create, update, remove, startEdit, cancelEdit]);
}
