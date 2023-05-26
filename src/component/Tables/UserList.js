import React, { useState, useEffect, useRef } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import Api from "../../Api";
import "./ListCustomer.css";
import { Select } from "antd";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="p-px">
      <GridToolbarExport className="bg-blue-500 text-white flex-end" />
    </GridToolbarContainer>
  );
};


const { Option } = Select;

const ProductTable = () => {
  const [userList, setUserList] = useState("");

  const toast = useRef(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await Api.get(`addUser/getUser`).then((resp) => {
      setUserList(resp.data.data);
    });
  };

  const deleteUserdata = async (clickedUser) => {
    await Api.delete(`addUser/deleteUser/${clickedUser}`).then((resp) => {
      console.log(clickedUser.id);
      if (resp.status === 200) {
        toast.success("Product Deleted Successfully!");
      }
      return setUserList.filter((user) => user._id !== clickedUser.id);
    });
  };

  const submit = (_id) => {
    confirmAlert({
      title: "Are You Sure",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteUserdata(_id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const columns = [
    { field: "username", headerName: "User Name", width: 200, height: "100%" },
    { field: "email", headerName: "Email", width: 250, height: "100%" },

    {
      field: "role",
      fieldAlign: "center",
      headerName: "User Role",
      headerAlign: "center",
      type: "string",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 200,
      courser: "pointer",

      renderCell: (params) => {
        return(
          <div>
            <Select>
              <Option value={0}>Active</Option>
              <Option value={1}>Deactive</Option>
            </Select>
          </div>
        )
      }
    },
    {
      field: "Action",
      fieldAlign: "center",
      headerName: "Action",
      headerAlign: "center",
      courser: "pointer",

      renderCell: (params) => {
        return (
          <div>
            {/* <Tooltip title="Edit">
              <Button
                icon="pi pi-pencil"
                className="p-button-rounded p-button-text font-bold"
                style={{ color: "green" }}
                aria-label="Submit"
                // onClick={() => {
                //   setId(params.row.id);
                //   setcompanyname(params.row.companyname);
                //   setcompanyaddress(params.row.companyaddress);
                //   setPanNumber(params.row.PanNumber);
                //   setGSTNo(params.row.GSTNo);
                //   setcontactpersonname(params.row.contactpersonname);
                //   setcontactPersonnumber(params.row.contactPersonnumber);
                //   setpurpose(params.row.purpose);
                //   setprojectstatus(params.row.projectstatus);
                //   setdescription(params.row.description);
                //   // handleClickOpen();
                // }}
              />
            </Tooltip>
            &nbsp; */}
            <Tooltip title="Delete">
              <Button
                onClick={(_id) => {
                  submit(params.row._id);
                }}
                icon="pi pi-trash"
                className="p-button-rounded p-button-text font-bold"
                style={{ color: "red" }}
                aria-label="Submit"
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  return (
    <div className="mt-4 p-4">
      <Toast ref={toast} />
      <div className="card table-card mb-2 surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="pages-title mx-2 mb-3">User List</div>
        <DataGrid
          sx={{
            border: "none",
            "& .MuiDataGrid-cell:hover": {
              color: "gray",
            },
          }}
          rows={userList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          GridPrintExportOptions
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row._id}
          autoHeight
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default ProductTable;
