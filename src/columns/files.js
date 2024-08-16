export const columns = () => {
    return [
        { name: "File name", key: "name", left: true },
        { name: "description", key: "description",},
        { name: "Date", key: "date", chip: true },
        {
            name: "Actions",
            key: "action",
            // right: true,
        },
    ];
};
