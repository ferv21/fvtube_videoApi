import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Feed,ChannelDetail,Navbar,SearchFeed,VideoDetail} from "./components/import";
import {Box} from "@mui/material";

function App() {
  return (
    <div className="App">
        <>
          <BrowserRouter>
              <Box sx={{backgroundColor: "#000"}}>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Feed/>} />
                    <Route path="/video/:id" element={<VideoDetail/>}/>
                    <Route path="/channel/:id" element={<ChannelDetail/>}/>
                    <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
                </Routes>
              </Box>
          </BrowserRouter>
        </>
    </div>
  );
}

export default App;
