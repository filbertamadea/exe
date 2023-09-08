import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    </React.StrictMode>
);
