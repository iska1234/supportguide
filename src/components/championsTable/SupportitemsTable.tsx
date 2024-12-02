import React, { useEffect, useState } from "react";
import { DataTable } from ".";
import { supportItemsColumns, supportItemsData } from "@/types/Supportitem.types";

const SupportItemsTable: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="items-center justify-center h-full w-full flex flex-col">
        <div className="h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <DataTable columns={supportItemsColumns} data={supportItemsData} />;
};

export default SupportItemsTable;
