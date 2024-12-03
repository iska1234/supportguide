import React, { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

import { championsDataPros, columnsPros } from "@/types/ProsContras.types";
import { Input } from "../ui/input";
import { ProsContrasDataTable } from "../DataTables/ProsContrasDataTable";

const ProsContras: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(false);
    };

    loadData();
  }, []);

  const filtered = championsDataPros.filter((champion) =>
    champion.champion.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="items-center justify-center h-full w-full flex flex-col">
        <Spinner className="h-40 w-40 -mt-44" />
      </div>
    );
  }

  return (
    <div>
      <Input
        type="search"
        placeholder="Búsqueda rápida"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ProsContrasDataTable columns={columnsPros} data={filtered} />
    </div>
  );
};

export default ProsContras;
