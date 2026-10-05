export const projects = [
  {
    slug: 'nuclear-challenge',
    name: 'Nuclear Challenge — Leak Probability Model',
    stack: 'Python · XGBoost · Streamlit',
    github: 'https://github.com/anshm42/F26-NuclearChallenge',
    impact:
      'A machine-learning research prototype that estimates leak probabilities and classifies leak types from the first two minutes of simulated nuclear plant sensor data. Won Best Final Product at the Canadian Nuclear Laboratories Innovation Challenge.',
    details: [
      'Uses calibrated XGBoost models for leak detection and conditional classification across eight leak/break scenarios.',
      'Splits complete simulation runs and excludes direct leak indicators to prevent data leakage during evaluation.',
      'Provides a Streamlit interface for uploading simulation CSVs and inspecting predictions; built on simulated data, not validated for operational nuclear safety decisions.',
    ],
  },
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

] as const;
