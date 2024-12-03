import React, { useEffect, useState } from "react";

import { Input } from "../ui/input";
import { columnsItems, supportItemsData } from "@/types/Supportitem.types";
import { ItemsDataTable } from "../DataTables/ItemsDataTable";

const SupportItemsTable: React.FC = () => {
  
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(false);
    };

    loadData();
  }, []);

  const filteredData = (category: string) =>
    supportItemsData.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );

  const searchFilteredData = (category: string) =>
    filteredData(category).filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (loading) {
    return (
      <div className="items-center justify-center h-full w-full flex flex-col">
        <div className="h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Input
        type="search"
        placeholder="Búsqueda rápida"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchFilteredData("Mejoras Iniciales de Support").length > 0 && (
        <>
          <h2 className="py-8 w-full bg-pink-500 text-xl font-bold rounded-t-md text-white text-center">
            Mejoras Iniciales de Support
          </h2>
          <ItemsDataTable
            columns={columnsItems}
            data={searchFilteredData("Mejoras Iniciales de Support")}
          />
        </>
      )}

      {searchFilteredData("Items de Enchanters").length > 0 && (
        <>
          <h2 className="py-8 w-full bg-pink-500 text-xl font-bold rounded-t-md text-white text-center">
            Items de Enchanters
          </h2>
          <ItemsDataTable
            columns={columnsItems}
            data={searchFilteredData("Items de Enchanters")}
          />
        </>
      )}

      {searchFilteredData("Items de tanques").length > 0 && (
        <>
          <h2 className="py-8 w-full bg-pink-500 text-xl font-bold rounded-t-md text-white text-center">
            Items de Tanques
          </h2>
          <ItemsDataTable
            columns={columnsItems}
            data={searchFilteredData("Items de tanques")}
          />
        </>
      )}

      {searchFilteredData("Items de Magos").length > 0 && (
        <>
          <h2 className="py-8 w-full bg-pink-500 text-xl font-bold rounded-t-md text-white text-center">
            Items de Magos
          </h2>
          <ItemsDataTable
            columns={columnsItems}
            data={searchFilteredData("Items de Magos")}
          />
        </>
      )}
    </div>
  );
};

export default SupportItemsTable;
