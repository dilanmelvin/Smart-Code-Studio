import React from 'react';

const EXAMPLE_PROMPTS = [
  { text: 'Build a modern e-commerce dashboard with React and TypeScript' },
  { text: 'Create a real-time chat application using Socket.io' },
  { text: 'Build a portfolio website with Next.js and Tailwind CSS' },
  { text: 'Make a task management app with drag & drop functionality' },
  { text: 'Create a weather app with API integration and charts' },
  { text: 'Build a landing page with animations and responsive design' },
];

export function ExamplePrompts(sendMessage?: { (event: React.UIEvent, messageInput?: string): void | undefined }) {
  return (
    <div id="examples" className="relative w-full max-w-4xl mx-auto mt-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full [mask-image:linear-gradient(to_bottom,black_0%,transparent_180%)] hover:[mask-image:none]">
        {EXAMPLE_PROMPTS.map((examplePrompt, index: number) => {
          return (
            <button
              key={index}
              onClick={(event) => {
                sendMessage?.(event, examplePrompt.text);
              }}
              className="group flex items-center w-full gap-3 justify-start p-4 bg-bolt-elements-surface hover:bg-bolt-elements-surface-hover border border-bolt-elements-borderColorSubtle rounded-xl text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary transition-all duration-200 hover:border-bolt-elements-borderColor hover:shadow-sm text-left"
            >
              <div className="i-ph:sparkle-duotone text-lg text-accent flex-shrink-0" />
              <span className="text-sm font-medium">{examplePrompt.text}</span>
              <div className="i-ph:arrow-right ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
