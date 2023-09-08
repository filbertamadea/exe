import {Route, Routes,} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./Pages/main/index.jsx";
import Movie from "./Pages/Movie/index.jsx";
import {Paper} from "@mui/material";

function App() {
    return (
        <>
            <Navbar/>
            <Paper elevation={24}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movie" element={<Movie/>}/>
                </Routes>
            </Paper>
        </>
    );
}

export default App;
