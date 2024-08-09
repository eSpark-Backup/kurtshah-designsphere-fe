export const columns = () => {
  return [
    { name: "Customer Name", key: "customerName", left: true },
    { name: "Date", key: "joinDate" },
    { name: "Total Orders", key: "totalOrders" },
    { name: "Earnings", key: "earnings" },
    { name: "Status", key: "status" },
    {
      name: "Project Owner", key: "action", right: true,
    },


    // use props like left right hideDelete, hideView, hideEdit, hideDownload inorder to hide the action buttons
    // if component render use below code 
    //  component: (item) => {
    //     return (
    //         <Link
    //         style={{ color: "#49ACE1" }}
    //         href={`/`}>
    //             <Image src={tableEye} alt="eye" width="16px" height="16px" />
    //         </Link>
    //     )
    // }

  ];
};