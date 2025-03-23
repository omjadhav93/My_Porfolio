# Portfolio Website

A responsive portfolio website built with Next.js and Tailwind CSS, showcasing skills, projects, and professional journey. The website features smooth transitions, dynamic hover effects, HTML-rendered blogs, and a fully responsive design.

## Overview

This portfolio website serves as a professional showcase of my work, skills, and experience. Built with modern web technologies, it provides visitors with an intuitive and engaging experience across all devices.

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Smooth Transitions**: Elegant animations and page transitions
- **Dynamic Hover Effects**: Interactive elements that respond to user interaction
- **HTML-rendered Blogs**: Content-rich blog section with proper HTML rendering
- **Project Showcase**: Detailed project portfolio with descriptions and links
- **Skills Section**: Visual representation of technical skills and competencies
- **Contact Form**: Easy way for visitors to get in touch

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Static type checking for JavaScript
- **Framer Motion** (if used): Animation library for React

## Folder Structure

```
portfolio/
├── app/                    # Application source code
│   ├── components/         # Reusable components
│   └── api/                # Api routes
|       └── getHtmlContent  # Api routes to get Html files content
├── public/                 # Static assets
│   ├── AJWS/               # AJWS Project Screenshots
│   ├── KodeSkool/          # KodeSkool Project Screenshots
│   └── Portfolio/          # Portfolio Project Screenshots
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omjadhav93/My_Porfolio.git
   cd My_Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the data files
2. Replace project details with your own work
3. Modify the styling using Tailwind CSS classes
4. Add your own content to the blog section