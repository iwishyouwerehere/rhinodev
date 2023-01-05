const express = require('express');
const multer = require('multer');
const Rhino3dmIO = require('rhino3dm-node');

const app = express();
const upload = multer({ dest: 'uploads/' });

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
