import { backwards, bold, captalism, downArrow, forwards, italic, strike, underline } from '@/assets'
import { CustomInput, Dropdown, DynamicModal } from '@/components/common'
import { fontFamiliesRichEditor } from '@/constants'
import { capitalizeText, handleFontFamilyChange, handleFontSizeChange, handleSpaceAfterChange, handleSpaceBeforeChange } from '@/utils/RichTextEditor'
import { Box, Typography } from '@mui/material'
import FontFamily from '@tiptap/extension-font-family'
import Strike from '@tiptap/extension-strike'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from 'next/image'
import React, { useState } from 'react'
import FontSize from 'tiptap-extension-font-size'

const EditReportModal = ({ open, handleClose, onConfirm }) => {

    const [fontFamily, setFontFamily] = useState('Georgia');

    const commonInputStyles = {
        width: "70px",
        height: "40px",
        borderRadius: "3px",
        background: theme => theme.palette.white,
        "& fieldset": {
            border: "none",
        },
        "& input": {
            color: "black !important",
            padding: "10px 14px",
        },
    };

    const commonTypographyStyles = {
        background: theme => theme.palette.headingColor,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "13px",
        fontWeight: "400",
        whiteSpace: "nowrap",
    };


    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            FontFamily.configure({
                types: ['textStyle'],
            }),
            FontSize.configure({
                types: ['textStyle'],
            }),
            Underline,
            Strike,
        ],
        content: '',
    });

    if (!editor) {
        return null;
    }


    const GradientTypography = ({ type, icon, onClick }) => (
        <Box sx={{
            height: "28px",
            width: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "4px",
            background: (theme) => `${editor.isActive(type) ? theme.palette.buttonPrimary : ""}`,

        }}>

            <Image
                onClick={onClick}
                src={icon}
                alt="icon"
                width={15} height={15} />

        </Box>

    )


    const ModalHeaderUI =
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
                <Image src={backwards} alt="back" width={28} height={28} />
                <Image src={forwards} alt="forward" width={28} height={28} />
            </Box>
        </Box>


    const ToolbarUI =
        <Box sx={{ minHeight: "150px", padding: "10px 20px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Dropdown
                    options={fontFamiliesRichEditor}
                    onChange={(event) => handleFontFamilyChange(event, editor, setFontFamily)}
                    value={fontFamily}
                    simple={true}
                    sx={{
                        width: "130px",
                        fontSize: "14px",
                        background: theme => theme.palette.headingColor,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        "& fieldset": { border: "none" },
                        "& .MuiSelect-select": {
                            padding: "10px",
                            paddingRight: "0px !important",
                            textAlign: "center",
                        },
                    }}
                />

                <Box
                    sx={{
                        border: theme => theme.palette.borderPrimary,
                        padding: "0px 10px",
                        margin: "0px 5px",
                        width: "78px",
                        maxHeight: "28px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px"
                    }}
                >
                    <GradientTypography onClick={() => capitalizeText(editor)} type="caption" icon={captalism} />
                    <CustomInput
                        type="number"
                        defaultValue={0}
                        inputProps={{ min: 0, max: 100 }}
                        onKeyDown={(e) => e.preventDefault()}
                        sx={{ width: "30px", borderRadius: "3px", "& fieldset": { border: "none" }, "& input": { padding: "0px" } }}
                        onChange={(event) => handleFontSizeChange(event, editor)}
                    />
                </Box>

                <Box sx={{ display: "flex", gap: "10px" }}>
                    <GradientTypography onClick={() => editor.chain().focus().toggleBold().run()} type="bold" icon={bold} />
                    <GradientTypography onClick={() => editor.chain().focus().toggleItalic().run()} type="italic" icon={italic} />
                    <GradientTypography onClick={() => editor.chain().focus().toggleUnderline().run()} type="underline" icon={underline} />
                    <GradientTypography onClick={() => editor.chain().focus().toggleStrike().run()} type="strike" icon={strike} />
                </Box>
            </Box>

            <Box sx={{ display: "flex", marginTop: "20px", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Typography sx={commonTypographyStyles}>Space After</Typography>
                    <CustomInput
                        type="number"
                        defaultValue={0}
                        inputProps={{ min: 0, max: 100 }}
                        onKeyDown={(e) => e.preventDefault()}
                        sx={commonInputStyles}
                        onChange={(event) => handleSpaceAfterChange(event, editor)}

                    />
                </Box>

                <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Typography sx={commonTypographyStyles}>Space Before</Typography>
                    <CustomInput
                        type="number"
                        defaultValue={0}
                        inputProps={{ min: 0, max: 100 }}
                        onKeyDown={(e) => e.preventDefault()}
                        sx={commonInputStyles}
                        onChange={(event) => handleSpaceBeforeChange(event, editor)}
                    />
                </Box>
            </Box>
        </Box>


    return (
        <DynamicModal
            open={open}
            handleClose={handleClose}
            customHeader={ModalHeaderUI}
            heading="Style Editor"
            cancelButtonText="Cancel"
            submitButtonText="Save"
            onConfirm={onConfirm}
            showfooter
        >
            {ToolbarUI}
        </DynamicModal>
    )
}

export default EditReportModal