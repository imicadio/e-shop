import React from "react";
import { useSelector } from "react-redux";
import Container from "../../layout/Container/Container";
import { selectCartItems } from "../../redux/slice/cartSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useScreen } from "../../hooks/useScreen";

const TableComponent = () => {
  const { isTouch } = useScreen();
  const cartItems = useSelector(selectCartItems);

  console.log(cartItems);

  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer
      component={isTouch ? null : Paper}
      className="table-wrapper"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-thead">
          <TableRow className="table-row">
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="table-row"
            >
              <TableCell
                className="table-td"
                component="th"
                scope="row"
                data-label="Name"
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                className="table-td"
                data-label="Calories"
              >
                {row.calories}
              </TableCell>
              <TableCell align="right" className="table-td" data-label="Fat">
                {row.fat}
              </TableCell>
              <TableCell align="right" className="table-td" data-label="Carbs">
                {row.carbs}
              </TableCell>
              <TableCell
                align="right"
                className="table-td"
                data-label="Protein"
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
