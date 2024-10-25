"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "@/utils/Loader";
type PromptsDataTypes = {
  id: string;
  name: string;
  price: string;
  rating: number;
  purchased?: number;
  orders?: any[];
  status: string;
};

const AllPrompts = () => {
  const [promptsData, setPromptsData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/all-prompts")
      .then((res) => {
        setPromptsData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "name",
      headerName: "Prompts Title",
      flex: 0.8,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "price",
      headerName: "Prompts Price",
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "rating",
      headerName: "Ratings",
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "purchased",
      headerName: "Purchased",
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      headerClassName: "super-app-theme--header",
    },
  ];
  const rows: Array<PromptsDataTypes> = [];

  promptsData.forEach((item: PromptsDataTypes) => {
    rows.push({
      id: item.id,
      name: item.name,
      price: "INR" + item.price,
      rating: item.rating,
      purchased: item.orders?.length,
      status: item.status,
    });
  });
  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="90vh"
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: "rgb(63,10,0)",
          },
          "& .MuiDataGrid-root": {
            border: "none",
            outline: "none",
          },
          "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
            color: "#fff",
            backgroundColor: "rgb(41,23,15)",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "#fff",
          },
          "& .MuiDataGrid-row": {
            color: "#fff",
            borderBottom: "1px solid #ffffff30 !important",
          },
          "& .MuiTablePagination-root": {
            color: "#fff",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none !important",
          },
          "& .name-column--cell": {
            color: "#fff",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            color: "#fff",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "rgb(83,40,0)",
          },
          "& .MuiDataGrid-footerContainer": {
            color: "#fff",
            borderTop: "none",
            backgroundColor: "rgb(63,10,0)",
          },
          "& .MuiCheckbox-root": {
            color: `#fff !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `#fff !important`,
          },
          "& .MuiDataGrid-columnHeaderCheckbox ": {
            backgroundColor: "rgb(63,10,0) !important", // Apply background color to header checkbox
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          pageSizeOptions={[5, 25, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default AllPrompts;
