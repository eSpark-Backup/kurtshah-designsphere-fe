import { backwards, forwards } from '@/assets'
import { DynamicModal } from '@/components/common'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const EditReportModal = ({ open, handleClose, onConfirm }) => {

    const ModalHeader =
        <Box sx={{
            borderBottom: "1px solid",
            borderColor: (theme) => theme.palette.whiteE4,
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
        }}>
            <Typography
                sx={{
                    background: (theme) => theme.palette.headingColor,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                Style Editor
            </Typography>


            <Box>
                <Image src={backwards} alt width={28} height={28} />
                <Image src={forwards} alt width={28} height={28} />
            </Box>
        </Box>

    return (
        <DynamicModal
            open={true}
            handleClose={handleClose}
            customHeader={ModalHeader}
            heading="Style Editor"
            cancelButtonText="Cancel"
            submitButtonText="Save"
            onConfirm={onConfirm}
            children={"hello"}
            showfooter
        />
    )
}

export default EditReportModal