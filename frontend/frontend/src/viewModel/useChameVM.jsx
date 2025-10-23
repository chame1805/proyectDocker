import { useEffect, useState } from "react";
import { ChameAPI } from "../service/api";

export function useChameVM() {
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await ChameAPI.getFullName();
        setFullName(resp.fullName);
      } catch (e) {
        setError(e?.response?.data?.error || e?.message || "Error al cargar nombre");
        console.error("Chame error:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { fullName, loading, error };
}
