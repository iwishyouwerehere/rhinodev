import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
const express = require('express');
const multer = require('multer');
const Rhino3dmIO = require('rhino3dm-node');

const app = express();
const upload = multer({ dest: 'uploads/' });

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};



app.get('/', (req, res) => {
  res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="3dmModel" />
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post('/upload', upload.single('3dmModel'), (req, res) => {
  const modelBuffer = req.file.buffer;
  const model = Rhino3dmIO.open(modelBuffer);
  // Now you can use the `model` object to manipulate the 3dm model
});

app.listen(3000, () => console.log('Application listening on port 3000!'));


export default App;
