export const projects = [
  {
    slug: 'slangify',
    name: 'slangify',
    stack: 'Python · Gemini API · Urban Dictionary API · Docker',
    github: 'https://github.com/anshm42/slangify',
    impact:
      'An always-on Discord bot serving 30+ users and 70+ lookups per day. Its right-sized Azure deployment cut hosting costs by 80%, from roughly $25 to $5 per month.',
    details: [
      'Explains slang, regional dialect, jargon, and other non-standard language.',
      'Supports selectable Gemini-only and Urban Dictionary-only modes with tested parsing, formatting, and tokenization.',
      'Runs as a Docker container deployed on Azure Cloud Services.',
    ],
  },
  {
    slug: 'neural-network',
    name: 'Neural Network',
    stack: 'C++',
    github: 'https://github.com/anshm42/neuralnet',
    impact:
      'A modular C++ multilayer perceptron supporting arbitrary network depth and configurable activations. Trained with mini-batch gradient descent and backpropagation, it reached 95% accuracy on MNIST.',
    details: [
      'Uses custom layer and activation interfaces to keep the network architecture flexible.',
      'Supports ReLU, Leaky ReLU, and Sigmoid activation modules selectable per layer.',
      'Implements training and inference without relying on a machine-learning framework.',
    ],
  },
  {
    slug: 'exsamine',
    name: 'ExSAMine',
    stack: 'Next.js · FastAPI · Gemini API · Modal',
    github: 'https://github.com/anshm42/hoyahacks2026',
    impact:
      'An AI-powered digital forensics platform combining Gemini with Meta’s SAM 3 for automated evidence analysis. It was runner-up for Best Digital Forensics Hack at HoyaHacks 2026 and ran detection on auto-scaling Modal GPUs.',
    details: [
      'Turns LLM-generated detection prompts into computer-vision segmentation and forensic insights.',
      'Adds confidence scoring to a three-stage AI analysis pipeline.',
      'Uses persistent model caching on Modal to reduce serverless GPU startup overhead.',
    ],
  },
  {
    slug: 'translatify',
    name: 'Translatify',
    stack: 'Electron · React · TypeScript · Spotify API · DeepL API',
    github: 'https://github.com/anshm42/translatify',
    impact:
      'A desktop app that follows the current Spotify track and displays time-synced lyrics with line-by-line translations. PKCE authentication, playback polling, request cancellation, and persistent caching keep the experience responsive and synchronized.',
    details: [
      'Integrates LRCLIB lyric lookup with fallback search and DeepL translation.',
      'Refreshes Spotify tokens and polls playback state to keep lyrics aligned with the song.',
      'Batches translation requests and avoids repeated API calls for previously viewed tracks.',
    ],
  },
] as const;
