import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userList-user">
            <img src={params.row.avatar} alt="" className="userList-img" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userList-edit">Edit</button>
            </Link>

            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="userList-delete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserList;
