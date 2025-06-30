const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

const overview = {
  name: "Kunal",
  bio: "I'm a passionate web developer learning full-stack technologies."
};

const education = [
  { institution: "Humber College", degree: "Diploma in Web Development", year: "2025" }
];

const experience = [
  { role: "Frontend Intern", company: "CodeCraft Inc.", duration: "2024 - Present" }
];

app.get('/getOverview', (req, res) => res.json(overview));
app.get('/getEdu', (req, res) => res.json(education));
app.get('/getExp', (req, res) => res.json(experience));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
