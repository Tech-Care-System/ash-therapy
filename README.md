# Ash Therapy Website

The official website for Ash Therapy, an integrative counselling and psychotherapy service. This project is built to provide a safe and welcoming online space for clients to find information and get in touch.

## About The Project

This project is the official website for Ash Therapy, a service offered by Ash, an integrative counsellor and psychotherapist. The website aims to provide a gentle and grounded online presence where individuals can learn about her approach, the areas she works with, and how to begin their therapy journey.

The website provides information on:

- Ash's therapeutic approach, blending person-centred, attachment, and CBT techniques.
- Areas of support, including anxiety, depression, trauma, and personal growth.
- The process of working together in a safe and non-judgemental space.
- Details on fees, online sessions via Microsoft Teams, and how to book a free consultation.

### Built With

This is a modern monorepo project built with:

- [pnpm](https://pnpm.io/) - Fast, disk space-efficient package manager
- [Turborepo](https://turbo.build/repo) - High-performance build system for JavaScript and TypeScript codebases
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [ESLint](https://eslint.org/) - Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
- [Prettier](https://prettier.io/) - An opinionated code formatter

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have `pnpm` installed on your system. If not, you can install it via npm:

```sh
npm install -g pnpm
```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Tech-Care-System/ash-therapy.git
    ```
2.  Install PNPM packages
    ```sh
    pnpm install
    ```

## Usage

To run the development server for the web application:

```sh
pnpm dev
```

This will start the web application, typically on `http://localhost:3000`.

## Project Structure

This monorepo is organized as follows:

```
.
├── apps
│   └── web         # The main Next.js web application
├── packages
│   └── ui          # Shared UI components
├── .eslintrc.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

- `apps/web`: This is the main Next.js application that contains the website's pages and logic.
- `packages/ui`: This is a shared package that contains UI components used across the monorepo.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat(scope): Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/Tech-Care-System/ash-therapy](https://github.com/Tech-Care-System/ash-therapy)

## Acknowledgements

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
