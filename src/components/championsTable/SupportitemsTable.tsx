import React, { useEffect, useState } from "react";
import { DataTable } from ".";
import { groupedData, supportItemColumns,  } from "@/types/Supportitem.types";
import { Input } from "../ui/input";

const SupportItemsTable: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(false);
    };

    loadData();
  }, []);


  const groupedDataForTable = Object.keys(groupedData).map((category) => ({
    group: category,
    items: groupedData[category as keyof typeof groupedData]
  }));

  const filteredData = groupedDataForTable.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

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
         <DataTable columns={supportItemColumns} data={filteredData} />
    </div>
  )
  
  
 
};

export default SupportItemsTable;
