import { Frame } from "@/pages/Frame/ui/Frame";
import "@/shared/config/fonts.css";

import "./App.scss";
import { preloadImages } from "@/utils/preloadImages";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    preloadImages();
  }, []);
  return <Frame />;
};

export default App;
