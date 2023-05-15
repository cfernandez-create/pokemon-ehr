import React, { useState, useEffect } from 'react';
import { FormControl, Radio } from '@mui/material';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Pikachu', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const initialColumns: GridColDef[] = [
  { field: 'col1', headerName: 'Name', width: 170, headerClassName: 'mui-headertl' },
  { field: 'col2', headerName: 'Trainer', width: 170, headerClassName: 'mui-header' },
  { field: 'col4', headerName: 'MRN', width: 170, headerClassName: 'mui-header' },
  { field: 'col5', headerName: 'HP', width: 170, headerClassName: 'mui-header' },
  { field: 'col6', headerName: 'Status', width: 170, headerClassName: 'mui-headertr' },
];

export default function Main() {
  const [admitData, setAdmitData] = useState([]);
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    axios.get('http://localhost:3500/admitdata')
      .then(response => {
        setAdmitData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleWindowResize = () => {
    const windowWidth = window.innerWidth;
    let availableWidth;

    if (windowWidth < 380) {
      availableWidth = 380; 
    } else if (windowWidth > 840) {
      availableWidth = 840; 
    } else {
      availableWidth = windowWidth;
    }

    const totalColumnWidths = columns.reduce((sum, column) => sum + column.width, 0);
    const scaleRatio = availableWidth / totalColumnWidths;

    const updatedColumns = columns.map(column => ({
      ...column,
      width: Math.floor(column.width * scaleRatio),
    }));

    setColumns(updatedColumns);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const getRowClassName = () => 'pokemon-row';

  return (
    <div>
      <div className="mui-table">
        <DataGrid rows={rows} columns={columns} getRowClassName={getRowClassName} />
      </div>
    </div>
  );
}
