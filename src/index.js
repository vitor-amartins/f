import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GlobalContext from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VocationalTestView, Quiz, SplashScreenView, JobsView } from "./views";
import PostSignupView from './views/PostSignupView/PostSignupView';
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreenView />} />
        <Route path="/postSignup" element={<PostSignupView />} />
        <Route path="/vocationalTest" element={<VocationalTestView />} />
        <Route path="/jobs" element={<JobsView />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-completed" element={<PostSignupView />} />
    </Routes>
    </BrowserRouter>
  </GlobalContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
