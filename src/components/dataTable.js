// // import {useState} from 'react';
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function DataTable() {
//   const baseurl = "https://jsonplaceholder.typicode.com/posts"

//   const [page, setPage] = useState(0);
//   const [rows, setRows] = useState([]);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(()=>{
//     axios.get(baseurl).then((responce)=>{
//         setRows(responce.data)
//     })
//   },[])

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <>
//       <div className="bg-color">
//         <Card sx={{ minWidth: 300, padding: 4 }}>
//           <CardContent>
//             <Paper sx={{ width: "100%" }}>
//               <TableContainer sx={{ maxHeight: 550 }}>
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell align="
//                       left" colSpan={2}>
//                         Id
//                       </TableCell>
//                       <TableCell align="left" colSpan={3}>
//                         Titel
//                       </TableCell>
//                       <TableCell align="left" colSpan={4}>
//                         Body
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows
//                       .slice(
//                         page * rowsPerPage,
//                         page * rowsPerPage + rowsPerPage
//                       )
//                       .map((row) => {
//                         return (
//                           <TableRow
//                             hover
//                             role="checkbox"
//                             // tabIndex={-1}
//                             // key={row.id}
//                           >
//                             <TableCell align="left">
//                                 {row.id}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {row.titel}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {row.body}
//                             </TableCell>
//                           </TableRow>
//                         );
//                       })}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, 100]}
//                 component="div"
//                 count={rows.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </Paper>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }




// import {useState} from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function DataTable() {
  const baseURL = "https://jsonplaceholder.typicode.com/comments"

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(()=>{
    axios.get( baseURL ).then((responce)=>{
        setRows(responce.data)
    })
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="bg-color">
        <Card sx={{ minWidth: 1300, padding: 4 }}>
          <CardContent>
            <Paper sx={{ width: "100%", overflow:"hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" >
                        Id
                      </TableCell>
                      <TableCell align="left" >
                        Name
                      </TableCell>
                      <TableCell align="left" >
                        Email
                      </TableCell>
                      <TableCell align="left" >
                        Body
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                          >
                            <TableCell align="left">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">
                                {row.email}
                            </TableCell>
                            <TableCell align="left"    >
                                {row.body}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
