import { Frame } from "@/pages/Frame/ui/Frame";
import { preloadImages, imagesToPreload } from "@/utils/preloadImages";

import "./App.scss";
import "@/shared/config/fonts.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    preloadImages(imagesToPreload);
  }, []);

  return <Frame />;
};

export default App;
