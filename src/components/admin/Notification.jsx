import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
  Avatar,
  TableSortLabel,
  Toolbar,
  TextField,
  Box,
  // SearchIcon
} from '@material-ui/core';
import TrainIcon from '@material-ui/icons/Train';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  tableContainer: {
    padding: theme.spacing(2),
  },
  table: {
    marginTop: theme.spacing(2),
    '& thead th': {
      fontSize: '1em',
      fontWeight: '700',
      color: theme.palette.primary.white,
      backgroundColor: "#a171fc",
    },
    '& tbody td': {
      fontSize: '1.2em',
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#EEE5FF',
      cursor: 'pointer',
    },
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark
  },
  train: {
    fontSize: '1em',
  },
  time: {
    fontSize: '1em',
  },
  date: {
    fontSize: '1em',
  },
  margin: {

    margin: theme.spacing(1),
  },
  Button: {
    float: 'right',
  }
}));

export default function StaffHomePage() {
  const pages = [10, 15, 20, { label: 'All', value: -1 }];
  const [thongbao, setThongbao] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const fetchData = async () => {
    try {
      const request = await axios.get("https://60c4cc6fec8ef800175e08b1.mockapi.io/api/v1/staff_thongbao");
      console.log(request.data);
      setThongbao(request.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setFiltered(
      thongbao.filter((trains) =>
        trains.train.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, thongbao]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  const handleSearch = e => {
    setSearch(e.target.value);
  }
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Toolbar>
          {/* <SearchIcon></SearchIcon> */}
          <Box flexGrow={1}>
            <TextField
              className={classes.margin}
              label="Tìm kiếm tàu"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={handleSearch}
            />
          </Box>
          <Box p={1}>
            <button className="btn btn-light-danger font-weight-bold mr-2">
              <span className="svg-icon svg-icon-md">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="9" cy="15" r="6"></circle><path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3"></path></g></svg>
              </span>
              <span>Báo Sự Cố</span>
            </button>
          </Box>
        </Toolbar>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                <TableSortLabel>
                  {/* onClick={() => handleSortRequest()} */}
                  ID Train
                </TableSortLabel>
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Time</TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => {
                return (
                  <TableRow key={item.id}>
                    <TableCell className={classes.name}>
                      <Grid container>
                        <Grid item lg={2}>
                          {/* <Avatar alt={item.name} src='.' className={classes.avatar} /> */}
                          <TrainIcon className={classes.avatar}></TrainIcon>
                        </Grid>
                        <Grid item lg={10}>
                          <Typography className={classes.name}>{item.idtrain}</Typography>
                          <Typography color="textSecondary" className={classes.train}>{item.train}</Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell >
                      <Typography color="primary" className={classes.time}>{item.time}</Typography>
                      <Typography className={classes.date} >{item.date}</Typography>
                    </TableCell>
                    <TableCell >{item.status}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={pages}
            component="tr"
            count={thongbao.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}
