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
      .get("api/all-prompts")
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
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Prompts Title", flex: 0.8 },
    { field: "price", headerName: "Prompts Price", flex: 0.5 },
    { field: "rating", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
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
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <Box>
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      )}
    </>
  );
};

export default AllPrompts;
