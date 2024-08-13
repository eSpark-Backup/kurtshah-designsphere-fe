import Image from "next/image";
import { Button, Chip, Stack, Typography, Box } from "@mui/material";
import { add, arrowDown, document, profile, profileTick } from "@/assets";

const Notes = ({ notes }) => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={1}
      >
        <Typography
          fontSize={24}
          fontWeight={500}
          sx={{
            background: (theme) => theme.palette.headingColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Notes
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Typography
            fontSize={14}
            fontWeight={600}
            textAlign="center"
            color="primary.dark"
          >
            View All
          </Typography>
          <Button
            sx={{
              borderRadius: "50% !important",
              minWidth: "32px",
              width: "32px",
              height: "32px",
            }}
            variant="primary"
          >
            <Image src={add} alt="add" />
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ overflow: "auto", height: "calc(100% - 36px)" }}>
        {notes.map((note, ind) => {
          const showDate = ind === 0 || note.date !== notes[ind - 1].date;
          return (
            <>
              {showDate && (
                <Typography
                  fontSize={16}
                  fontWeight={600}
                  sx={{
                    color: (theme) => theme.palette.whiteE4,
                    marginTop: ind === 0 ? "16px" : "12px",
                  }}
                >
                  {note.date}
                </Typography>
              )}
              <Box
                key={note.id + ind}
                sx={{
                  minWidth: "550px",
                  mt: "12px",
                  padding: "24px 24px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
                  border: "1px solid #FFFFFF1F",
                  boxShadow: "0px 14px 79.3px -12px #00000030",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconCol note={note.note} />
                <IconCol assigned={note.assigned} />
                <IconCol createdBy={note.createdBy} />
                <Chip label={note.createdAt} />
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

const IconCol = ({ note, assigned, createdBy }) => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
      <Image
        width={24}
        height={24}
        src={note ? document : assigned ? profileTick : profile}
        alt="icon"
      />
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <Typography
            fontSize={14}
            fontWeight={600}
            sx={{
              background: (theme) => theme.palette.headingColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {note || assigned || createdBy}
          </Typography>
          {createdBy && (
            <Image width={16} height={16} src={arrowDown} alt="down" />
          )}
        </Stack>
        <Typography
          fontSize={12}
          fontWeight={600}
          sx={{ color: (theme) => theme.palette.whiteE4 }}
        >
          {note ? "NOTE" : assigned ? "Assigned" : "Created"}
        </Typography>
      </Box>
    </Stack>
  );
};
export default Notes;
