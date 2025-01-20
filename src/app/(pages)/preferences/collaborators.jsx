import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useGetAllUsers from "@/hooks/getAllUser";
import useGetContacts from "@/hooks/getContacts";
import { CustomInput, DynamicTable } from "@/components/common";
import useAddContact from "@/hooks/addContacts";
import useDeleteContact from "@/hooks/deleteContact";
import Card from "@/components/common/Card";
import { messageAdd } from "@/assets";
import Image from "next/image";

const Collaborators = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [collaboratorsData, setCollaboratorsData] = useState([]);
  const [contactData, setContactsData] = useState([]);
  const { getAllUsers, isLoading: isAllLoadding } = useGetAllUsers();
  const { getContacts, isLoading: isTeamLoading } = useGetContacts();
  const { addContact } = useAddContact();
  const { deleteContact } = useDeleteContact();

  const handlePageChange = (page) => {
    setPage(page);
  };

  const fetchUsers = () => {
    getAllUsers((res) => {
      setCollaboratorsData(res?.data?.result);
    });
  };
  const fetchContacts = async () => {
    await getContacts(page + 1, pageSize, "", (res) => {
      setContactsData(res?.data?.result?.data);
      setTotal(res?.data?.result?.totalRecords);
    });
  };

  useEffect(() => {
    if (name !== "" || email !== "") {
      const filteredData = collaboratorsData.filter(
        (item) =>
          (name !== "" && item?.name?.includes(name)) ||
          (email !== "" && item?.email?.includes(email))
      );
      setCollaboratorsData(filteredData);
    } else {
      fetchUsers();
    }
  }, [name, email]);

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const handleAdd = (item) => {
    const bodyToSend = {
      name: item?.name,
      userId: item?.id,
      emailAddress: item?.email,
    };
    addContact(bodyToSend, () => {
      fetchContacts();
    });
  };

  const handleDelete = (item) => {
    deleteContact(item.id, () => {
      fetchContacts();
    });
  };

  const myTeamColumns = () => {
    return [
      { name: "Name", key: "name", left: true },
      { name: "Email", key: "emailAddress" },
      {
        name: "",
        key: "action",
        right: true,
        hideDownload: true,
        hideEdit: true,
        hideView: true,
      },
    ];
  };

  const allColumns = () => {
    return [
      { name: "Name", key: "name", left: true },
      { name: "Email", key: "email" },
      {
        name: "",
        key: "action",
        right: true,
        component: (item) => {
          return (
            <Box
              sx={{
                width: "24px",
                height: "24px",
                img: {
                  filter: (theme) => theme.palette.filterImg,
                },
              }}
            >
              <Image
                style={{ cursor: "pointer" }}
                onClick={() => handleAdd(item)}
                src={messageAdd}
                width={24}
                height={24}
                alt="add"
              />
            </Box>
          );
        },
      },
    ];
  };

  return (
    <>
      <Typography
        fontSize={20}
        fontWeight={700}
        sx={{ color: (theme) => theme.palette.white }}
      >
        Contacts
      </Typography>
      <Typography
        mt={2}
        fontSize={16}
        fontWeight={500}
        sx={{ color: (theme) => theme.palette.white }}
      >
        All Contacts on your Team will be added to projects that you
        create.
      </Typography>
      <Card
        variant={"outline"}
        sx={{
          padding: "20px",
          height: "auto",
          mt: 3,
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={700}
          sx={{ color: (theme) => theme.palette.white }}
        >
          My Contacts
        </Typography>
        <DynamicTable
          isLoading={isTeamLoading}
          handleDelete={handleDelete}
          data={contactData}
          columns={myTeamColumns()}
          total={total}
          handlePageChange={handlePageChange}
          page={page}
          pageSize={pageSize}
          pagination
        />
      </Card>
      <Card
        variant={"outline"}
        sx={{
          padding: "20px",
          height: "auto",
          mt: 3,
          td: {
            textTransform: "none !important",
          },
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={700}
          sx={{ color: (theme) => theme.palette.white }}
        >
          All
        </Typography>
        <Stack
          mt={2}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
          gap={1}
        >
          <Box sx={{ width: { xs: "100%", md: "300px" } }}>
            <Typography sx={{ width: "300px", mb: 2 }} variant="h5">
              NAME
            </Typography>
            <CustomInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                input: {
                  borderRadius: "5px",
                  border: (theme) => theme.palette.borderPrimary,
                },
              }}
              variant="outlined"
              placeholder="Enter"
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "300px" } }}>
            <Typography sx={{ width: "300px", mb: 2 }} variant="h5">
              EMAIL
            </Typography>
            <CustomInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                input: {
                  borderRadius: "5px",
                  border: (theme) => theme.palette.borderPrimary,
                },
              }}
              variant="outlined"
              placeholder="Enter"
            />
          </Box>
        </Stack>
        <DynamicTable
          isLoading={isAllLoadding}
          data={collaboratorsData}
          columns={allColumns()}
        />
      </Card>
    </>
  );
};

export default Collaborators;
