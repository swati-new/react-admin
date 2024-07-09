import { Box, Toolbar, IconButton, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import InputBase from '@mui/material/InputBase';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ExportIcon from '@mui/icons-material/Print';
import MoreIcon from '@mui/icons-material/Add';

const Transaction = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        // { field: "id", headerName: "ID", flex: 0.5},
        { field: "policyNumber", headerName: "Policy Number", flex: 0.5},
        { field: "customerName", headerName: "Customer Name", flex: 0.5, cellClassName: "name-column-cell"},
        // { field: "email", headerName: "Email", flex: 1},
        { field: "business", headerName: "Business", flex: 0.5, renderCell:({row: { business }}) => {
            return (
                <>
                {business === "New Business" &&  <Box mt="15px"><Typography color="green" >{business}</Typography></Box>}
                {business === "Reinstatement" &&  <Box mt="15px"><Typography color="orange">{business}</Typography></Box>}
                {business === "Cancellation" && <Box mt="15px"><Typography color="red">{business}</Typography></Box>}
                {business === "Endorsement" && <Box mt="15px"><Typography color="blue">{business}</Typography></Box>}
                {business === "Renewal" && <Box mt="15px"><Typography color="skyblue">{business}</Typography></Box>}
                </>
            )
          
            
        }},
        { field: "status", headerName: "Status", flex: 0.5, renderCell: ({row: { status }}) => {
            return (
                <Box
                    width="60%"
                    display="flex"
                    mt="15px"
                    justifyContent="center"
                    
                    
                    backgroundColor={
                        status==="Success" ? "green" : "red"
                    }
                    borderRadius="4px"
                >
                  
                    <Typography color="white" >
                        {status}
                    </Typography>
                </Box>
            )
        }},
        { field: "transactionTime", headerName: "Transaction Time", flex: 0.5,},
        { field: "premium", headerName: "Premium", flex: 0.5, cellClassName: "name-business-cell"},
       
    ]
  return (
    <Box m="20px">

{/* <div className='home' style={{display: "flex", justifyContent: "space-between", paddingBottom: "20px"}}>
      <div className="box1" style={{border: "2px solid lightgrey", borderRadius: "10px", padding: '20px'}}>
       <span>Premium icon</span>
       <span>Premium</span>
      </div>

      <div className="box2" style={{border: "2px solid lightgrey", borderRadius: "10px", padding: '20px'}}>
       <span>Premium icon</span>
       <span>Premium</span>
      </div>

      <div className="box3" style={{border: "2px solid lightgrey", borderRadius: "10px", padding: '20px'}}>
       <span>Premium icon</span>
       <span>Premium</span>
      </div>
    </div> */}


         <Box display='flex' justifyContent='flex-start' alignItems="center">
        {/* <Header title="Transactions" style={{paddingRight: "20px"}} />   */}
        <Typography variant="h1" pr="20px">
            Transactions
        </Typography>
        <Box 
        display='flex' 
        backgroundColor={colors.primary[400]}
        borderRight='3px'
        height="30px"
        borderRadius="5px"
      >
        <InputBase sx={{ml:2, flex:2, width: '100%', borderRadius: "5px"}} placeholder='Search' />
        <IconButton type="button" sx={{p:1}}>
          <SearchIcon />
        </IconButton>
      </Box>  
      </Box>
      <div style={{paddingLeft:"88%"}}>
      <Box m="20px"  marginTop="-35px" display='flex' flexDirection='column' width="100px">
      <Button variant="contained" color="success" startIcon={<ExportIcon />} style={{paddingBottom: "10px"}}>
        Export
      </Button>
      <div style={{paddingTop:"10px"}}></div>
      <Button variant="outlined" startIcon={<MoreIcon />}>
        More
    </Button>
        </Box>
        </div>
        <Box m="40px 0 0 0" height="75vh" sx={{
            "& .MuiDataGrid-root":{
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column-cell": {
                color: colors.greenAccent[300]
            },
            "& .name-business-cell": {
                color: "green"
            },
            "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#fcfcfc",
                borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "white",
            },
            // "& .MuiDataGrid-footerContainer": {
            //     borderTop: "none",
            //     backgroundColor: 'white',
            // },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
            },
        }}>
            <DataGrid
                checkboxSelection
                disableRowSelectionOnClick 
                disableColumnSelector={true} 
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
            />    
        </Box>  
    </Box>
  )
}

export default Transaction;
