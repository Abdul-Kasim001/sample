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
import { useNavigate } from 'react-router-dom';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="p-px">
      <GridToolbarExport className="bg-blue-500 text-white flex-end" />
    </GridToolbarContainer>
  );
};

const ListProposal = () => {
  const [proposalList, setProposalList] = useState("");

  const toast = useRef(null);

  useEffect(() => {
    getProposal();
  }, []);

  const getProposal = async () => {
    await Api.get(`addProposal/getProposal`).then((resp) => {
      setProposalList(resp.data.data);
    });
  };

  const deleteProposaldata = async (clickedUser) => {
    await Api.delete(`addProposal/deleteProposal/${clickedUser}`).then(
      (resp) => {
        console.log(clickedUser.id);
        if (resp.status === 200) {
          toast.success("Proposal Deleted Successfully!");
        }
        return setProposalList.filter((user) => user._id !== clickedUser.id);
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
            deleteProposaldata(_id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const navigate = useNavigate();

  const columns = [
    // {field: 'id' ,
    //         headerName: 'number',
    //         filterable: false,
    //         renderCell:(index) => index.api.getRowIndex(index.row.code + 1)},
    {
      field: "proposalNumber",
      headerName: "Proposal Number",
      width: 140,
      height: "100%",
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 200,
      height: "100%",
    },

    {
      field: "grandTotal",
      headerName: "Grand Total",
      type: "string",
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      type: "string",
      width: 200,
    },
    {
      field: "Status",
      fieldAlign: "center",
      headerName: "Status",
      headerAlign: "center",
      width: 160,
    },
    // {
    //   field: "user",
    //   headerName: "Added By",
    //   width: 160,
    // },
    {
      field: "view",
      headerName: "view",
      width: 80,
      courser: "pointer",
      renderCell: (params) => {
        return (
          <div>
            <Tooltip title="View">
              <Button
                icon="pi pi-eye"
                className="p-button-rounded p-button-text font-bold"
                style={{ color: "blue" }}
                aria-label="Submit"
                onClick={() =>
                            navigate(`/admin/listProposal/proposalPreview/${params.row._id}`)}
              />
            </Tooltip>
          </div>
        );
      },
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
                onClick={() => {
                  // setValue(params.row.id);
                  // setValue(params.row.companyname);
                  // setValue(params.row.companyaddress);
                  // setValue(params.row.PanNumber);
                  // setValue(params.row.GSTNo);
                  // setValue(params.row.contactpersonname);
                  // setValue(params.row.contactPersonnumber);
                  // setValue(params.row.purpose);
                  // setValue(params.row.projectstatus);
                  // setValue(params.row.description);
                  // handleClickOpen();
                }}
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
        <div className="pages-title mx-2 mb-3">Proposal List</div>
        <DataGrid
          sx={{
            border: "none",
            "& .MuiDataGrid-cell:hover": {
              color: "gray",
            },
          }}
          rows={proposalList}
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

export default ListProposal;
