import { Typography } from "@mui/material";
import CardBox from "./cardBox";
import { collaboratorsData } from "@/constants";

const Collaborators = () => {
  return (
    <>
      <Typography fontSize={20} fontWeight={700} sx={{ color: (theme) => theme.palette.white, }}>
        Collaborator
      </Typography>
      <Typography mt={2} fontSize={16} fontWeight={500} sx={{ color: (theme) => theme.palette.white, }}>
        All Collaborators on your Team will be added to projects that you
        create.
      </Typography>
      <CardBox title="My Collaborator Team" data={[]} />
      <CardBox title="Collaborator" data={collaboratorsData} />
    </>
  );
};

export default Collaborators;
