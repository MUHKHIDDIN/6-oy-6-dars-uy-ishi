import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import { Button } from "./pages/about/components/button/button";
import { LoginInput } from "./pages/about/components/input/login-input";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route index element={<Button />} />
            <Route path="login" element={<LoginInput />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
