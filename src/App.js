import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from './scenes/dashboard/Dashboard';
import Sidebar from './scenes/global/Sidebar';
import Error from './scenes/Error';
import Invoices from './scenes/Invoices';
import Transaction from './scenes/Transaction';
import Cards from "./scenes/global/Cards";
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
          <div className="app"> 
            <Sidebar />
            <main className="content">
              <Topbar />
              <Cards />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/error" element={<Error />} />
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                <Route path="/invoices" element={<Invoices />} />
                {/*<Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
