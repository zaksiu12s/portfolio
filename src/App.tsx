import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import { Helmet } from "react-helmet";
import useTheme from "./Hooks/useTheme";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (<>
    <Helmet>
      <meta name="theme-color" content={(theme === "dark") ? "#171717" : "#d4d4d4"} />
    </Helmet>
    <div className="min-h-[100svh] dark:from-neutral-800 dark:to-neutral-900 from-neutral-300 to-neutral-400 bg-gradient-to-bl scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
};

export default App;
