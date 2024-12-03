import React, { useEffect, useState } from "react";

import { Input } from "../ui/input";
import { columnsItems, supportItemsData } from "@/types/Supportitem.types";
import { ItemsDataTable } from "../DataTables/ItemsDataTable";
import Select from "../ui/select";

const SupportItemsTable: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [
    "Mejoras Iniciales de Support",
    "Items de Enchanters",
    "Items de tanques",
    "Items de Magos",
  ];

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
      <div className="py-4 flex justify-between w-full items-center">
        <Input
          wrapperClassName="w-1/2"
          type="search"
          placeholder="Búsqueda rápida"
          className="w-full p-2 border border-gray-300 rounded-md "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          widthClass="mt-4 w-1/4 text-center border text-black placeholder:text-black "
          className="border-0 px-2 data-[placeholder]:bg-none data-[placeholder]:text-black data-[placeholder]:font-primaryBold w-full text-lg focus:ring-0 font-primaryMedium gap-2 bg-white text-black"
          name="Company Name"
          placeholder="Seleccionar Categoría"
          items={[
            { label: "Todos", value: "all" },
            ...categories.map((category) => ({
              label: category,
              value: category,
            })),
          ]}
          onValueChange={(value) =>
            setSelectedCategory(value === "all" ? "" : value)
          }
          itemClass="w-full px-4"
        />
      </div>

      {selectedCategory
        ? searchFilteredData(selectedCategory).length > 0 && (
            <>
              <h2 className="py-8 w-full bg-pink-500 text-xl font-bold rounded-t-md text-white text-center">
                {selectedCategory}
              </h2>
              <ItemsDataTable
                columns={columnsItems}
                data={searchFilteredData(selectedCategory)}
              />
            </>
          )
        : categories.map((category) =>
            searchFilteredData(category).length > 0 ? (
              <div key={category}>
                <h2 className="py-8 w-full bg-pink-500 text-xl font-bold rounded-t-md text-white text-center">
                  {category}
                </h2>
                <ItemsDataTable
                  columns={columnsItems}
                  data={searchFilteredData(category)}
                />
              </div>
            ) : null
          )}
    </div>
  );
};

export default SupportItemsTable;
