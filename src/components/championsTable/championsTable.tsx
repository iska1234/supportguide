import React, { useEffect, useState } from 'react'

import { DataTable } from '.';
import { championsData, columns,  } from '@/types/ChampionsTable.types';
import { Spinner } from '../ui/spinner';



const ChampionsTable: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(false)
    }
    
    loadData()
  }, [])

  if (loading) {
    return (
      <div className='items-center justify-center h-full w-full flex flex-col'>
        <Spinner className="h-40 w-40 -mt-44"/>
      </div>
    )
  }

  return (

    <DataTable columns={columns} data={championsData} />
  
  )
}

export default ChampionsTable
