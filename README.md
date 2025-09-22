[![Smart Code Studio: AI-Powered Full-Stack Web Development Platform](./public/social_preview_index.jpg)](https://smart-code-studio.com)[![Smart Code Studio: AI-Powered Full-Stack Web Dev## Smart Code Studio: A- **AI with Environment Control**: Unlike traditional dev environments where the AI can only assist in code generation, Smart Code Studio gives AI models **complete control** over the entire  environment i### I'### I'm getting the error: "x-api-key header missing"



# Smart Code Studio 🚀We have seen this error a couple times and for some reason just restarting the Docker container has fixed it. This seems to be Ollama specific. Another thing to try is try to run Smart Code Studio with Docker or pnpm, whichever you didn't run first. We are still on the hunt for why this happens once and a while!



**The Ultimate AI-Powered Development Platform for Modern Web Applications**### I'm getting a blank preview when Smart Code Studio runs my app!



Smart Code Studio is a revolutionary AI-powered development environment that brings the full power of modern web development directly to your browser. Build, test, and deploy complete full-stack applications using advanced AI models - no local setup required!We promise you that we are constantly testing new PRs coming into Smart Code Studio and the preview is core functionality, so the application is not broken! When you get a blank preview or don't get a preview, this is generally because the LLM hallucinated bad code or incorrect commands. We are working on making this more transparent so it is obvious. Sometimes the error will appear in developer console too so check that as well.ng the error: "There was an error processing this request"



## 🌟 What Makes Smart Code Studio SpecialIf you see this error within Smart Code Studio, that is just the application telling you there is a problem at a high level, and this could mean a number of different things. To find the actual error, please check BOTH the terminal where you started the application (with Docker or pnpm) and the developer console in the browser. For most browsers, you can access the developer console by pressing F12 or right clicking anywhere in the browser and selecting "Inspect". Then go to the "console" tab in the top right.uding the filesystem, node server, package manager, terminal, and browser console. This empowers AI agents to handle the whole app lifecycle—from creation to deployment.



Unlike traditional AI coding assistants that only generate code, Smart Code Studio provides a complete development ecosystem:Whether you're an experienced developer, a PM, or a designer, Smart Code Studio allows you to easily build production-grade full-stack applications.



### 🔥 **Full-Stack in the Browser**For developers interested in building their own AI-powered development tools with WebContainers, check out the open-source Smart Code Studio codebase in this repo!ered Full-Stack Web Development in the Browser

- **Complete Development Environment**: Powered by StackBlitz's WebContainers technology

- **Package Management**: Install and run npm packages, Node.js servers, and build toolsSmart Code Studio is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. If you're here to build your own AI-powered web dev agent using the Smart Code Studio open source codebase, [click here to get started!](./CONTRIBUTING.md)

- **Real-time Preview**: See your applications running instantly with hot-reload

- **Terminal Access**: Full terminal access for running commands and scripts## What Makes Smart Code Studio Different

- **File System**: Complete file system access with project management

Claude, v0, etc are incredible- but you can't install packages, run backends, or edit code. That's where Smart Code Studio stands out:

### 🧠 **AI with Complete Control**

- **Multi-Model Support**: Choose from OpenAI, Anthropic, Ollama, Google Gemini, and more- **Full-Stack in the Browser**: Smart Code Studio integrates cutting-edge AI models with an in-browser development environment powered by **StackBlitz's WebContainers**. This allows you to:in the Browser](./public/social_preview_index.jpg)](https://smart-code-studio.com)

- **Environment Management**: AI can control the entire development lifecycle

- **Code Generation & Editing**: Smart code generation with context awareness# Smart Code Studio Fork by Cole Medin - oTToDev

- **Debugging Assistance**: AI-powered debugging and error resolution

- **Project Scaffolding**: Intelligent project setup with best practicesThis fork of Smart Code Studio (oTToDev) allows you to choose the LLM that you use for each prompt! Currently, you can use OpenAI, Anthropic, Ollama, OpenRouter, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek, or Groq models - and it is easily extended to use any other model supported by the Vercel AI SDK! See the instructions below for running this locally and extending it to include more models.



### 🎯 **Professional Features**## Join the community for oTToDev!

- **Modern UI/UX**: Clean, professional interface designed for productivity

- **Local LLM Support**: Run models locally with Ollama for privacy and speedhttps://thinktank.ottomator.ai

- **Export & Import**: Save your projects and continue working offline

- **GitHub Integration**: Direct publishing to GitHub repositories## Requested Additions to this Fork - Feel Free to Contribute!!

- **Mobile Responsive**: Works seamlessly across all devices

- ✅ OpenRouter Integration (@coleam00)

## 🚀 Quick Start Guide- ✅ Gemini Integration (@jonathands)

- ✅ Autogenerate Ollama models from what is downloaded (@yunatamos)

[![Smart Code Studio: AI-Powered Full-Stack Web Development Platform](./public/social_preview_index.jpg)](https://smart-code-studio.com)

- ✅ Download project as ZIP (@fabwaseem)

Before you begin, ensure you have the following installed:- ✅ Improvements to the main Bolt.new prompt in `app\lib\.server\llm\prompts.ts` (@kofi-bhr)

- ✅ DeepSeek API Integration (@zenith110)


   - Download from [nodejs.org](https://nodejs.org/)- ✅ "Open AI Like" API Integration (@ZerxZ)

   - Download from [git-scm.com](https://git-scm.com/)- ✅ Ability to enter API keys in the UI (@ali00209)
   - Verify installation: `git --version`- ✅ xAI Grok Beta Integration (@milutinke)

- ✅ LM Studio Integration (@karrot0)

3. **pnpm** (Package Manager)- ✅ HuggingFace Integration (@ahsan3219)
   ```- ✅ Ability to revert code to earlier version (@wonderwhy-er)

- ✅ Cohere Integration (@hasanraiyan)

### 🔧 Installation- ✅ Dynamic model max token length (@hasanraiyan)

- ✅ Prompt caching (@SujalXplores)

1. **Clone the Repository**- ✅ **HIGH PRIORITY** - Load local projects into the app (@wonderwhy-er)

   ```bash- ⬜ **HIGH PRIORITY** - ALMOST DONE - Attach images to prompts (@atrokhym)

   git clone https://github.com/your-username/smart-code-studio.git- ⬜ **HIGH PRIORITY** - Prevent Bolt from rewriting files as often (file locking and diffs)

   cd smart-code-studio- ⬜ **HIGH PRIORITY** - Better prompting for smaller LLMs (code window sometimes doesn't start)

   ```- ⬜ **HIGH PRIORITY** - Run agents in the backend as opposed to a single model call

- ⬜ Mobile friendly

2. **Install Dependencies**- ⬜ Together Integration

   ```bash- ⬜ Azure Open AI API Integration

   pnpm install- ⬜ Perplexity Integration

   ```- ⬜ Vertex AI Integration

- ⬜ Deploy directly to Vercel/Netlify/other similar platforms
3. **Environment Configuration**- ⬜ Better prompt enhancing

   - ⬜ Have LLM plan the project in a MD file for better results/transparency

   Copy the example environment file:- ⬜ VSCode Integration with git-like confirmations

   ```bash- ⬜ Upload documents for knowledge - UI design templates, a code base to reference coding style, etc.

   cp .env.example .env.local- ⬜ Voice prompting

   ```

## Bolt.new: AI-Powered Full-Stack Web Development in the Browser

   Edit `.env.local` and add your API keys:

   ```envBolt.new is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. If you're here to build your own AI-powered web dev agent using the Bolt open source codebase, [click here to get started!](./CONTRIBUTING.md)

   # OpenAI (Optional)

   OPENAI_API_KEY=your_openai_api_key_here## What Makes Bolt.new Different

   
   # Anthropic Claude (Optional)Claude, v0, etc are incredible- but you can't install packages, run backends, or edit code. That’s where Bolt.new stands out:

   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   # Google Gemini (Optional)  - Install and run npm tools and libraries (like Vite, Next.js, and more)
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here  - Run Node.js servers

     - Interact with third-party APIs

   # Groq (Optional)  - Deploy to production from chat

   GROQ_API_KEY=your_groq_api_key_here  - Share your work via a URL

   

   # Ollama Configuration (for local models)- **AI with Environment Control**: Unlike traditional dev environments where the AI can only assist in code generation, Bolt.new gives AI models **complete control** over the entire  environment including the filesystem, node server, package manager, terminal, and browser console. This empowers AI agents to handle the whole app lifecycle—from creation to deployment.


   DEFAULT_NUM_CTX=8192Whether you’re an experienced developer, a PM, or a designer, Bolt.new allows you to easily build production-grade full-stack applications.

   ```## Setup


4. **Start the Development Server**Many of you are new users to installing software from Github. If you have any installation troubles reach out and submit an "issue" using the links above, or feel free to enhance this documentation by forking, editing the instructions, and doing a pull request.
   ```
2. Install Node.js from https://nodejs.org/en/download/ 

   Open your browser and navigate to `http://localhost:5173`

Pay attention to the installer notes after completion. 
## 🤖 Setting Up Ollama (Local AI Models)

On all operating systems, the path to Node.js should automatically be added to your system path. But you can check your path if you want to be sure. On Windows, you can search for "edit the system environment variables" in your system, select "Environment Variables..." once you are in the system properties, and then check for a path to Node in your "Path" system variable. On a Mac or Linux machine, it will tell you to check if /usr/local/bin is in your $PATH. To determine if usr/local/bin is included in $PATH open your Terminal and run:


```


   - Visit [ollama.ai](https://ollama.ai/) and download for your platformIf you see usr/local/bin in the output then you're good to go.

   - Follow the installation instructions

3. Clone the repository (if you haven't already) by opening a Terminal window (or CMD with admin permissions) and then typing in this:

2. **Pull AI Models**

   ```bash```

   # For coding tasks (recommended)git clone https://github.com/coleam00/smart-code-studio-any-llm.git

   ollama pull qwen2.5-coder:7b```

   

   # For general tasks3. Rename .env.example to .env.local and add your LLM API keys. You will find this file on a Mac at "[your name]/smart-code-studio-any-llm/.env.example". For Windows and Linux the path will be similar.

   ollama pull llama3.1:8b

   ![image](https://github.com/user-attachments/assets/7e6a532c-2268-401f-8310-e8d20c731328)

   # For advanced coding (requires more RAM)

   ollama pull qwen2.5-coder:32bIf you can't see the file indicated above, its likely you can't view hidden files. On Mac, open a Terminal window and enter this command below. On Windows, you will see the hidden files option in File Explorer Settings. A quick Google search will help you if you are stuck here.

   ```

```

3. **Create Custom Model (Optional)**defaults write com.apple.finder AppleShowAllFiles YES

   ```

   Create a `Modelfile` for enhanced context:

   ```dockerfile**NOTE**: you only have to set the ones you want to use and Ollama doesn't need an API key because it runs locally on your computer:

   FROM qwen2.5-coder:7b

   PARAMETER num_ctx 32768Get your GROQ API Key here: https://console.groq.com/keys

   PARAMETER temperature 0.2

   ```Get your Open AI API Key by following these instructions: https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key

   

   Build the custom model:Get your Anthropic API Key in your account settings: https://console.anthropic.com/settings/keys

   ```bash

   ollama create -f Modelfile smart-coder:7b```

   ```GROQ_API_KEY=XXX

OPENAI_API_KEY=XXX

4. **Verify Installation**ANTHROPIC_API_KEY=XXX

   ```bash```

   ollama list

   ```Optionally, you can set the debug level:



## 🎨 Getting Started with Development```

VITE_LOG_LEVEL=debug

### 1. **Choose Your AI Model**```

- Select from the dropdown in the top navigation

- Local models (Ollama) appear automatically when availableAnd if using Ollama set the DEFAULT_NUM_CTX, the example below uses 8K context and ollama running on localhost port 11434:

- Cloud models require API keys in your `.env.local` file

```

### 2. **Start Your First Project**OLLAMA_API_BASE_URL=http://localhost:11434

Try these example prompts to get started:DEFAULT_NUM_CTX=8192

```

- **"Create a modern React dashboard with TypeScript and Tailwind CSS"**

- **"Build a real-time chat application using Socket.io and Express"****Important**: Never commit your `.env.local` file to version control. It's already included in .gitignore.

- **"Make a portfolio website with Next.js and animations"**

- **"Create a task management app with drag & drop functionality"**## Run with Docker



### 3. **Advanced Features**Prerequisites:



#### Project ExportGit and Node.js as mentioned above, as well as Docker: https://www.docker.com/

- Click the export button to download your project as a ZIP file

- Continue development locally or deploy to your preferred platform### 1a. Using Helper Scripts



#### GitHub IntegrationNPM scripts are provided for convenient building:

- Connect your GitHub account to publish projects directly

- Automatic repository creation with proper project structure```bash

# Development build

#### Terminal Commandsnpm run dockerbuild

- Use the integrated terminal for custom commands

- Install additional packages with `npm` or `pnpm`# Production build

- Run build scripts and deployment commandsnpm run dockerbuild:prod

```

## ⚙️ Configuration Options

### 1b. Direct Docker Build Commands (alternative to using NPM scripts)

### Supported AI Providers

You can use Docker's target feature to specify the build environment instead of using NPM scripts if you wish:

| Provider | Models Available | API Required |

|----------|------------------|--------------|```bash

| **Ollama** | Local models (qwen2.5-coder, llama3.1, etc.) | No |# Development build

| **OpenAI** | GPT-4, GPT-4 Turbo, GPT-3.5 | Yes |docker build . --target bolt-ai-development

| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Haiku | Yes |

| **Google** | Gemini Pro, Gemini Flash | Yes |# Production build

| **Groq** | Llama3, Mixtral, Gemma | Yes |docker build . --target bolt-ai-production

| **Mistral** | Mistral Large, Mistral Medium | Yes |```



### Model Recommendations### 2. Docker Compose with Profiles to Run the Container



- **For Beginners**: Ollama + qwen2.5-coder:7b (local, fast, free)Use Docker Compose profiles to manage different environments:

- **For Complex Projects**: OpenAI GPT-4 or Anthropic Claude 3.5 Sonnet

- **For Speed**: Groq + Llama3 (fastest cloud option)```bash

- **For Privacy**: Any Ollama model (runs locally)# Development environment

docker-compose --profile development up

## 🐳 Docker Deployment

# Production environment

### Quick Start with Dockerdocker-compose --profile production up

```

1. **Build the Image**

   ```bashWhen you run the Docker Compose command with the development profile, any changes you

   # Development buildmake on your machine to the code will automatically be reflected in the site running

   docker build -t smart-code-studio:dev .on the container (i.e. hot reloading still applies!).

   

   # Production build## Run Without Docker

   docker build -t smart-code-studio:prod --target smart-code-studio-production .

   ```1. Install dependencies using Terminal (or CMD in Windows with admin permissions):



2. **Run with Docker Compose**```

   ```bashpnpm install

   # Development environment```

   docker-compose --profile development up

   If you get an error saying "command not found: pnpm" or similar, then that means pnpm isn't installed. You can install it via this:

   # Production environment

   docker-compose --profile production up```

   ```sudo npm install -g pnpm

```

3. **Environment Variables**

   Create a `.env.local` file with your configuration before running Docker.2. Start the application with the command:



## 📁 Project Structure```bash

pnpm run dev

``````

smart-code-studio/

├── 📁 app/                    # Main application code## Adding New LLMs:

│   ├── 📁 components/         # React components

│   │   ├── 📁 chat/          # Chat interface componentsTo make new LLMs available to use in this version of Smart Code Studio, head on over to `app/utils/constants.ts` and find the constant MODEL_LIST. Each element in this array is an object that has the model ID for the name (get this from the provider's API documentation), a label for the frontend model dropdown, and the provider. 

│   │   ├── 📁 editor/        # Code editor components

│   │   ├── 📁 workbench/     # Development workbenchBy default, Anthropic, OpenAI, Groq, and Ollama are implemented as providers, but the YouTube video for this repo covers how to extend this to work with more providers if you wish!

│   │   └── 📁 ui/            # Reusable UI components

│   ├── 📁 lib/               # Core libraries and utilitiesWhen you add a new model to the MODEL_LIST array, it will immediately be available to use when you run the app locally or reload it. For Ollama models, make sure you have the model installed already before trying to use it here!

│   ├── 📁 routes/            # Remix routes

│   └── 📁 styles/            # SCSS stylesheets## Available Scripts

├── 📁 public/                # Static assets

├── 📁 docs/                  # Documentation- `pnpm run dev`: Starts the development server.

├── 🔧 package.json           # Dependencies and scripts- `pnpm run build`: Builds the project.

├── 🔧 vite.config.ts         # Vite configuration- `pnpm run start`: Runs the built application locally using Wrangler Pages. This script uses `bindings.sh` to set up necessary bindings so you don't have to duplicate environment variables.

├── 🔧 tailwind.config.js     # Tailwind CSS config- `pnpm run preview`: Builds the project and then starts it locally, useful for testing the production build. Note, HTTP streaming currently doesn't work as expected with `wrangler pages dev`.

└── 📄 README.md              # This file- `pnpm test`: Runs the test suite using Vitest.

```- `pnpm run typecheck`: Runs TypeScript type checking.

- `pnpm run typegen`: Generates TypeScript types using Wrangler.

## 🔧 Available Scripts- `pnpm run deploy`: Builds the project and deploys it to Cloudflare Pages.



```bash## Development

# Development

pnpm run dev          # Start development serverTo start the development server:

pnpm run build        # Build for production

pnpm run preview      # Preview production build```bash

pnpm run dev

# Testing```

pnpm run test         # Run test suite

pnpm run test:watch   # Run tests in watch modeThis will start the Remix Vite development server. You will need Google Chrome Canary to run this locally if you use Chrome! It's an easy install and a good browser for web development anyway.



# Code Quality## FAQ

pnpm run lint         # Run ESLint

pnpm run lint:fix     # Fix ESLint issues### How do I get the best results with Smart Code Studio?

pnpm run typecheck    # TypeScript type checking

- **Be specific about your stack**: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure Smart Code Studio scaffolds the project accordingly.

# Docker

pnpm run dockerbuild  # Build Docker image (development)- **Use the enhance prompt icon**: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

pnpm run dockerbuild:prod  # Build Docker image (production)

```- **Scaffold the basics first, then add features**: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Smart Code Studio understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.



## 🎯 Best Practices- **Batch simple instructions**: Save time by combining simple instructions into one message. For example, you can ask Smart Code Studio to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.



### For Optimal Results:### How do I contribute to Smart Code Studio?



1. **Be Specific**: Describe your desired tech stack and requirements clearly[Please check out our dedicated page for contributing to Smart Code Studio here!](CONTRIBUTING.md)

2. **Iterative Development**: Start with basic structure, then add features incrementally  

3. **Use the Enhancement Feature**: Click the ✨ enhance button to improve your prompts### Do you plan on merging Smart Code Studio back into the official Bolt.new repo?

4. **Combine Instructions**: Group related changes in single messages to save API calls

5. **Local Models for Privacy**: Use Ollama models for sensitive projectsMore news coming on this coming early next month - stay tuned!



### Example Workflows:### What are the future plans for Smart Code Studio?



#### Building a Full-Stack App[Check out our Roadmap here!](https://roadmap.sh/r/smart-code-studio-roadmap-2ovzo)

1. Start: *"Create a Next.js app with TypeScript and Tailwind"*

2. Add Features: *"Add user authentication with NextAuth.js"*Lot more updates to this roadmap coming soon!

3. Database: *"Integrate Prisma with PostgreSQL"*

4. Polish: *"Add responsive design and dark mode"*### Why are there so many open issues/pull requests?



#### Debugging and OptimizationSmart Code Studio was started simply to showcase how to edit an open source project and to do something cool with local LLMs on my (@ColeMedin) YouTube channel! However, it quickly

1. Describe the Issue: *"The app is slow when loading user data"*grew into a massive community project that I am working hard to keep up with the demand of by forming a team of maintainers and getting as many people involved as I can.

2. Let AI Analyze: Smart Code Studio will examine your codeThat effort is going well and all of our maintainers are ABSOLUTE rockstars, but it still takes time to organize everything so we can efficiently get through all

3. Apply Fixes: AI will suggest and implement optimizationsthe issues and PRs. But rest assured, we are working hard and even working on some partnerships behind the scenes to really help this project take off!

4. Test Results: Use the preview to verify improvements

### How do local LLMs fair compared to larger models like Claude 3.5 Sonnet for Smart Code Studio?

## 🚀 Deployment Options

As much as the gap is quickly closing between open source and massive close source models, you’re still going to get the best results with the very large models like GPT-4o, Claude 3.5 Sonnet, and DeepSeek Coder V2 236b. This is one of the big tasks we have at hand - figuring out how to prompt better, use agents, and improve the platform as a whole to make it work better for even the smaller local LLMs!

### Cloudflare Pages (Recommended)

```bash### I'm getting the error: "There was an error processing this request"

pnpm run deploy

```If you see this error within oTToDev, that is just the application telling you there is a problem at a high level, and this could mean a number of different things. To find the actual error, please check BOTH the terminal where you started the application (with Docker or pnpm) and the developer console in the browser. For most browsers, you can access the developer console by pressing F12 or right clicking anywhere in the browser and selecting “Inspect”. Then go to the “console” tab in the top right.



### Vercel### I'm getting the error: "x-api-key header missing"

```bash

npx vercelWe have seen this error a couple times and for some reason just restarting the Docker container has fixed it. This seems to be Ollama specific. Another thing to try is try to run oTToDev with Docker or pnpm, whichever you didn’t run first. We are still on the hunt for why this happens once and a while!

```

### I'm getting a blank preview when oTToDev runs my app!

### Netlify

```bashWe promise you that we are constantly testing new PRs coming into oTToDev and the preview is core functionality, so the application is not broken! When you get a blank preview or don’t get a preview, this is generally because the LLM hallucinated bad code or incorrect commands. We are working on making this more transparent so it is obvious. Sometimes the error will appear in developer console too so check that as well.

npx netlify deploy --prod

```### Everything works but the results are bad



### Self-HostedThis goes to the point above about how local LLMs are getting very powerful but you still are going to see better (sometimes much better) results with the largest LLMs like GPT-4o, Claude 3.5 Sonnet, and DeepSeek Coder V2 236b. If you are using smaller LLMs like Qwen-2.5-Coder, consider it more experimental and educational at this point. It can build smaller applications really well, which is super impressive for a local LLM, but for larger scale applications you want to use the larger LLMs still!

```bash
pnpm run build
# Serve the `build` directory with your preferred web server
```

## 🛠️ Troubleshooting

### Common Issues

#### "Error processing request"
- Check the browser console (F12) for detailed errors
- Verify your API keys in `.env.local`
- Ensure the selected AI model is available

#### "x-api-key header missing"
- Restart the development server: `pnpm run dev`
- Check Ollama is running: `ollama serve`
- Verify environment variables are loaded correctly

#### Blank Preview Window
- Check the terminal for build errors
- Verify the AI model generated valid code
- Try refreshing the preview or restarting the dev server

#### Ollama Connection Issues
```bash
# Check if Ollama is running
ollama list

# Start Ollama service
ollama serve

# Verify model is available
ollama run qwen2.5-coder:7b "Hello"
```

### Performance Tips

- **Use Local Models**: Ollama models provide faster response times
- **Optimize Context**: Use smaller context windows for faster generation
- **Close Unused Tabs**: Reduce browser memory usage for better performance
- **Update Regularly**: Keep dependencies updated for best performance

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit with conventional commits: `git commit -m "feat: add amazing feature"`
5. Push to your fork: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **StackBlitz** for WebContainers technology
- **Vercel** for the AI SDK
- **Ollama** for local AI model support
- **The Open Source Community** for continuous inspiration and contributions

## 📞 Support & Community

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/smart-code-studio/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/your-username/smart-code-studio/discussions)
- 📧 **Email**: support@smart-code-studio.com
- 💬 **Discord**: [Join our community](https://discord.gg/smart-code-studio)

---

**Made with ❤️ by the Smart Code Studio Team**

*Empowering developers to build amazing things with AI*