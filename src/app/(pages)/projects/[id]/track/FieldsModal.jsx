import { DynamicModal } from '@/components/common'
import { Box, Checkbox, FormControlLabel, Switch, Typography } from '@mui/material'

const FieldsModal = ({ open, handleClose, checkboxes }) => {
    return (
        <DynamicModal
            open={open}
            handleClose={handleClose}
            heading="Fields"
            fields={true}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: "95%",
                        height: "95px",
                        boxShadow: "0px 0px 16px 0px #00000073",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        padding: "0px 20px",
                        justifyContent: "center",
                        margin: "20px auto",
                        rowGap:"10px"

                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Typography variant='h3' sx={{ fontSize: "16px", fontWeight:"500", }}>Only show changes for selected fields</Typography>
                        <Switch />

                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Typography variant='h3' sx={{ fontSize: "16px", fontWeight:"500", }}>Check all bold fields</Typography>
                        <Switch />

                    </Box>

                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        paddingLeft: { xs: "10px", sm: "20px" }
                    }}
                >
                    {checkboxes?.map((item, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{ width: { xs: "50%", sm: "30%" }, height:"35px", }}>
                                <FormControlLabel

                                    control={<Checkbox name={item?.name} />}
                                    label={
                                        <Typography
                                            sx={{
                                                fontWeight: item?.bold ? 700 : 400,
                                                fontSize: { xs: "10px", sm: "12px" }

                                            }}
                                        >
                                            {item?.label}
                                        </Typography>
                                    }
                                    sx={{ marginBottom: "20px", paddingLeft: { xs: "10px", sm: "20px" }, }}
                                />
                            </Box>
                        )
                    })}

                </Box>

            </Box >
        </DynamicModal>
    )
}

export default FieldsModal
