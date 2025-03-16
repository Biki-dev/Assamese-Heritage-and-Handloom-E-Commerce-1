Here’s a more concise version of your README:


---

🏺 Assamese Heritage & Handloom E-Commerce

An e-commerce website showcasing Assamese heritage and handloom products. Built with React, Vite and deployed via GitHub Pages.

🔗 Live Demo: View Website
---

🛠 Tech Stack

Frontend: React, Vite

Styling: CSS

Deployment: GitHub Pages



---

📂 Project Structure

Assamese-Heritage-and-Handloom-E-Commerce-1/  
│── public/             # Static assets  
│── src/                # Source code  
│   ├── components/     # React components  
│   ├── pages/          # Page components  
│   ├── App.jsx         # Main app file  
│   ├── main.jsx        # Entry point  
│── dist/               # Build files (after build)  
│── index.html          # HTML entry point  
│── vite.config.js      # Vite configuration  
│── package.json        # Dependencies & scripts  
│── README.md           # Documentation


---

⚙️ Installation

1. Clone the repo:

git clone https://github.com/Biki-dev/Assamese-Heritage-and-Handloom-E-Commerce-1.git
cd Assamese-Heritage-and-Handloom-E-Commerce-1

p
2. Install dependencies:

npm installp


3. Start the server:

npm run dev


4. Open http://localhost:5173/




---

🚀 Deployment (GitHub Pages)

1. Build the project:

npm run build


2. Install gh-pages:

npm install gh-pages --save-dev


3. Add these scripts to package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


4. Deploy:

npm run deploy


5. Enable GitHub Pages in repo settings (Set branch to gh-pages).




---

🔧 Troubleshooting

If you see a blank page after deployment, update vite.config.js:

export default defineConfig({
  base: '/Assamese-Heritage-and-Handloom-E-Commerce-1/',
});

Rebuild & deploy:

npm run build && npm run deploy

Clear cache and refresh.


---

📜 License

MIT Licensed – Contributions welcome!

Made with ❤️ by Biki Kalita


---

