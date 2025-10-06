# 🚀 Smart Code Studio

**AI-Powered Full-Stack Web Development Platform**

Smart Code Studio is a next-generation, browser-based development environment that empowers you to **build, test, and deploy full-stack applications with advanced AI models**—including support for local AI models via **Ollama**. No heavy setup required for most workflows!

---

## 🌟 Why Smart Code Studio?

* **AI with Full Environment Control**: AI models (including Ollama) can scaffold, edit, debug, and deploy your app end-to-end with full access to filesystem, terminal, package manager, and browser console.
* **Multi-Model Support**: Switch effortlessly between **OpenAI, Anthropic, Google Gemini, Groq, HuggingFace, LMStudio, Mistral, xAI, DeepSeek**, and **local Ollama models** for privacy and speed.
* **StackBlitz WebContainers**: Run Node.js servers, install npm packages, and preview instantly—all inside your browser.
* **Modern Developer Experience**: Professional UI with real-time preview, terminal access, and project management.
* **Seamless Project Export**: Download projects as ZIP or publish directly to GitHub.
* **Mobile Responsive**: Works smoothly across devices.

---

## ⚡ Quick Start

### ✅ Prerequisites

* [Node.js (v18.18.0+)](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [pnpm](https://pnpm.io/): Install via `npm install -g pnpm`
* (Optional) [Docker](https://www.docker.com/) – for containerized deployment
* (Optional) [Ollama](https://ollama.ai/) – for local AI models

### 🔧 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dilanmelvin/Smart-Code-Studio.git
   cd Smart-Code-Studio
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Environment**

   ```bash
   cp .env.example .env.local
   ```

   Add your API keys (OpenAI, Anthropic, etc.) as needed.

   > 💡 Ollama requires no API key—it runs locally.

4. **Start Development Server**

   ```bash
   pnpm run dev
   ```

   Open your browser at: **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Using Ollama (Local AI Models)

1. **Install Ollama** → [Download Here](https://ollama.ai)
2. **Pull Models**

   ```bash
   ollama pull codellama
   ollama pull llama2
   ```
3. **(Optional) Create a Custom Model**

   ```bash
   ollama create my-model -f Modelfile
   ```
4. **Verify Installation**

   ```bash
   ollama list
   ```

Once installed, Ollama models appear automatically in the model dropdown inside Smart Code Studio.

---

## 🛠️ Features

* **Model Switching**: Select AI providers or local models directly from the UI.
* **Export Options**: Download project as a ZIP or publish to GitHub.
* **Built-In Terminal**: Run `npm`, `pnpm`, and other commands directly.
* **Docker Deployment**: Build and run production environments with ease.

---

## 🐳 Docker Deployment

1. **Build the Image**

   ```bash
   docker build -t smart-code-studio .
   ```

2. **Run with Docker Compose**

   ```bash
   docker-compose up -d
   ```

---

## 📁 Project Structure

```
smart-code-studio/
├── app/        # Main application and components
├── lib/        # Core libraries and utilities
├── routes/     # API and page routes
├── public/     # Static assets
├── docs/       # Documentation
├── utils/      # Helper utilities
├── types/      # TypeScript type definitions
```

---

## 🔧 Scripts

* `pnpm run dev` – Start development server
* `pnpm run build` – Build for production
* `pnpm run preview` – Preview production build
* `pnpm run test` – Run test suite
* `pnpm run lint` – Lint codebase

---

## 📝 License

**MIT License** – see [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

* [StackBlitz WebContainers](https://stackblitz.com)
* [Vercel AI SDK](https://vercel.com/ai)
* [Ollama](https://ollama.ai)
* The Open Source Community

---

✨ *Empowering developers to build amazing things with AI.*
