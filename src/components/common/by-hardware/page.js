"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import PageTitle from '../page-title/page'
import { DynamicTable } from '..'
import { ByHardwareTable1Content } from '@/constants'
import { columns } from '@/columns/ByHardware'

const ByHardware = () => {
    const [page, setPage] = useState(0);
    const handlePageChange = (page) => {
        setPage(page);
      };
    return (
        <>
            <PageTitle content={"Hardware Set # OSETA"} />
            <DynamicTable
                data={ByHardwareTable1Content}
                columns={columns()}
                isLoading={false}
                total={ByHardwareTable1Content.length}
                handlePageChange={handlePageChange}
                page={page}
            />
            <PageTitle content={"Hardware Set # 01"} />
            <DynamicTable
                data={ByHardwareTable1Content}
                columns={columns()}
                isLoading={false}
                total={ByHardwareTable1Content.length}
                handlePageChange={handlePageChange}
                page={page}
            />
        </>
    )
}

export default ByHardware
