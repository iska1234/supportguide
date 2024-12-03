interface DataTableProps {
  data: { group: string; items: any[] }[];
  columns: { header: string; accessor: string }[];
}

export function DataTable({ data, columns }: DataTableProps) {

  return (
    <div className="rounded-lg border border-gray-200 shadow-md w-full min-h-1/2 bg-white p-4">
      {data.length > 0 ? (
        data.map((groupData, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <div className="bg-pink-200 text-black text-center font-semibold py-2 rounded-md">
              <strong>{groupData.group}</strong>
            </div>
            <div className="mt-4 space-y-4">
              {groupData.items.map((item, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                  {columns.map((column, colIndex) => (
                    <div key={column.accessor} className="flex flex-col items-center">
                      <strong className="text-sm font-medium text-gray-700">{column.header}</strong>
                      <div className="text-center text-gray-600 mt-2">
                        {colIndex === 0 ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-full"
                          />
                        ) : (
                          item[column.accessor]
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="h-24 text-center text-lg text-blue-900">
          No se encontraron elementos.
        </div>
      )}
    </div>
  );
}
