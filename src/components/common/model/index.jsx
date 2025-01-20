import { close } from '@/assets';
import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress, IconButton, Modal, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const DynamicModal = ({ handleDelete, deleteLoading, disabled, isLoading, open, handleClose, heading, children, cancelButtonText, submitButtonText, onConfirm, showfooter, fields, customHeader, editModal }) => {
    const basicModelStructureStyle = {
        maxHeight: "90vh",
        overflowY: "auto",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: "90%", sm: fields ? "90%" : 400, md: fields ? "70%" : 400, lg: fields ? "55%" : 450, xl: fields ? "45%" : 450 },
        background: theme => theme.palette.gradientSecondary,
        boxShadow: 24,
        borderRadius: "10px",
        minHeight: "268px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        outline: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        },
        paddingBottom: fields ? "20px" : "0px"
    };



    const onSubmit = () => {
        onConfirm()
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={basicModelStructureStyle}>

                    {/* { HEADER  } */}
                    {
                        !customHeader ?
                            <>
                                <Box sx={{
                                    textAlign: 'center',
                                    borderBottom: "1px solid",
                                    borderColor: theme => theme.palette.whiteE4,
                                    padding: "20px 0px",
                                }}>

                                    <Typography
                                        sx={{
                                            background: theme => fields ? "linear-gradient(180deg, #93A3D9 0%, #6372A2 100%)"
                                                : theme.palette.textPrimaryGradient,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            fontWeight: "bold",
                                            fontSize: fields ? "20px" : "14px",
                                            fontWeight: 500,
                                            lineHeight: "21px",

                                        }}
                                    >
                                        {heading}
                                    </Typography>
                                </Box>
                                {fields && <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                        position: "absolute",
                                        right: 8,
                                        top: 8,
                                    }}
                                >
                                    <Image
                                        src={close}
                                        width={24}
                                        height={24}
                                        alt='Close Icon'
                                    />
                                </IconButton>}
                            </>
                            :
                            customHeader
                    }

                    {/* { CHILDREN  } */}
                    {children}



                    {/* {FOOTER  } */}
                    {showfooter &&
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid",
                            borderColor: theme => theme.palette.whiteE4,
                            padding: "10px 20px",
                        }}>

                            {deleteLoading ?
                            <CircularProgress size={20} />
                            : <Typography
                                sx={{
                                    color: theme => theme.palette.whiteE4,
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    lineHeight: "21px",
                                    cursor: "pointer"

                                }}
                                onClick={handleDelete || handleClose}
                            >
                                {cancelButtonText}
                            </Typography>}





                            <LoadingButton loading={isLoading} disabled={isLoading || disabled} sx={{
                                width: editModal ? "150px" : "max-content",
                                height: "40px",
                                border: editModal ? "1px solid #E4E4E4" : "none"
                            }} variant="primary"
                                onClick={onSubmit}
                            >
                                {submitButtonText}
                            </LoadingButton>



                        </Box>
                    }
                </Box>
            </Modal>
        </>
    )
}

export default DynamicModal