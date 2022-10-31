import React, { useCallback, useState } from "react";
import Container from "../../layout/Container/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  Box,
  Checkbox,
} from "@mui/material";
import { useScreen } from "../../hooks/useScreen";
import TableToolbar from "./TableToolbar/TableToolbar";
import TableHeader from "./TableHeader/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, DECREASE_CART, REMOVE_FROM_CART } from "../../redux/slice/cartSlice";

const TableComponent = ({ cartItems }) => {
  const { isTouch } = useScreen();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const createData = (id, title, brand, category, price) => {
    return {
      id,
      title,
      brand,
      category,
      price,
    };
  };

  const rows = cartItems;

  const dispatch = useDispatch();

  // const rows = [
  //   createData("Cupcake", "Cupcake", "Cupcake", 67),
  //   createData("Donut", 452, 25.0, 51),
  //   createData("Eclair", 262, 16.0, 24),
  //   createData("Frozen yoghurt", 159, 6.0, 24),
  //   createData("Gingerbread", 356, 16.0, 49),
  //   createData("Honeycomb", 408, 3.2, 87),
  //   createData("Ice cream sandwich", 237, 9.0, 37),
  //   createData("Jelly Bean", 375, 0.0, 94),
  //   createData("KitKat", 518, 26.0, 65),
  //   createData("Lollipop", 392, 0.2, 98),
  //   createData("Marshmallow", 318, 0, 81),
  //   createData("Nougat", 360, 19.0, 9,),
  //   createData("Oreo", 437, 18.0, 63),
  // ];

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const increaseItem = useCallback((row) => {    
    dispatch(ADD_TO_CART({ product: row}))
  }, [])

  const decreaseItem = useCallback((row) => {    
    dispatch(DECREASE_CART({ product: row}))
  }, [])

  const removeFromCart = useCallback((row) => {
    dispatch(REMOVE_FROM_CART({ product: row }))
  })


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.brand}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell
                        align="right"
                        className="is-flex is-flex-direction-row is-align-items-center"
                      >
                        <button type="button" className="button mr-2" onClick={() => increaseItem(row)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        {row.cartQuantity}
                        <button type="button" className="button ml-2" onClick={() => decreaseItem(row)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </TableCell>
                      <TableCell align="right"><i class="fa-solid fa-trash" onClick={() => removeFromCart(row)}></i></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default TableComponent;
