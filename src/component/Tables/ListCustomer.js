import React, { useState, useEffect} from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "primereact/button";
import Api from "../../Api";
import "./ListCustomer.css";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="p-px">
      <GridToolbarExport className="bg-blue-500 text-white flex-end" />
    </GridToolbarContainer>
  );
};

const ListCustomer = () => {
  const [customerList, setCustomerList] = useState("");

  useEffect(() => {
    getCustomer();
  }, []); 

  const getCustomer = async () => {
    await Api.get(`addCustomer/getCustomer`).then((resp) => {
      setCustomerList(resp.data.data);
    });
  };

  const deleteCustomerdata = async (clickedUser) => {
    await Api.delete(`addCustomer/deleteCustomer/${clickedUser}`).then(
      (resp) => {
        console.log(clickedUser.id);
        if (resp.status === 200) {
          toast.success("Customer Deleted Successfully!");
        }
        return setCustomerList.filter((clickedUser) => clickedUser._id !== clickedUser.id);
      }
    );
  };

  const submit = (_id) => {
    confirmAlert({
      title: "Are You Sure",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteCustomerdata(_id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 140, height: "100%" },
    {
      field: "addressWithPincode",
      headerName: "Customer Address",
      width: 200,
      height: "100%",
    },

    {
      field: "landLine",
      headerName: "LandLine",
      type: "string",
      width: 100,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      type: "string",
      width: 140,
    },
    {
      field: "whatsappNumber",
      headerName: "WhatsappNumber",
      width: 160,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 160,
    },

    {
      field: "gstinDetails",
      headerName: "gstinDetails",
      width: 120,
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
                // onClick={() => {}}
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
      <ToastContainer/>
      <div className="card table-card mb-2 surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="pages-title mx-2 mb-3">Customer List</div>
        <DataGrid
          sx={{
            border: "none",
            "& .MuiDataGrid-cell:hover": {
              color: "gray",
            },
          }}
          rows={customerList}
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

export default ListCustomer;
