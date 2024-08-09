'use client'

import { columns } from "@/components/common/table/columns/projects";
import DynamicTable from "@/components/common/table/DynamicTable";
import { Box } from "@mui/material";
import { useState } from "react";


export default function DemoTable() {
    const [page, setPage] = useState(0)

    const data = [
        {
            id: 1,
            customerName: "John Doe1",
            joinDate: "2021-10-01",
            totalOrders: 10,
            earnings: 1000,
            status: "Active",
        },
        {
            id: 2,
            customerName: "Jane Doe2",
            joinDate: "2021-10-01",
            totalOrders: 10,
            earnings: 1000,
            status: "Active",
        },
        {
            id: 3,
            customerName: "John Doe3",
            joinDate: "2021-10-01",
            totalOrders: 10,
            earnings: 1000,
            status: "Active",
        },
        {
            id: 4,
            customerName: "Jane Doe4",
            joinDate: "2021-10-01",
            totalOrders: 10,
            earnings: 1000,
            status: "Active",
        },
        {
            id: 5,
            customerName: "John Doe5",
            joinDate: "2021-10-01",
            totalOrders: 10,
            earnings: 1000,
            status: "Active",
        },
    ];

    const handlePageChange = (page) => {
        setPage(page);
    }

    return (

        <main>
            <Box sx={{
                width: "80%",
                margin: "auto",
            }}>
                <DynamicTable
                    data={data}
                    columns={columns()}
                    isLoading={false}
                    total={data.length}
                    handlePageChange={handlePageChange}
                    page={page}
                />
            </Box>
        </main>
    );
}