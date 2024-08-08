# Portfolio Website

This is a static portfolio website built using Astro, TypeScript, and TailwindCSS. It showcases personal projects, skills, and blog posts using markdown files.

## 🚀 Features

- Responsive design using TailwindCSS
- Blog section with posts written in Markdown
- Project showcase
- Skills display
- Education and work experience timeline
- Social media links

## 🛠️ Tech Stack

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## 🏗️ Why Astro and Markdown?

### Astro for Static Site Generation

We chose Astro for this portfolio website for several key reasons:

1. **Performance**: Astro generates static HTML, resulting in extremely fast load times and improved SEO.
2. **Component Islands**: Astro allows us to use interactive components only where needed, keeping the rest of the site lightweight.
3. **Framework Flexibility**: While we're primarily using TypeScript, Astro allows integration with various front-end frameworks if needed in the future.
4. **Built-in Optimizations**: Astro provides out-of-the-box optimizations for images, styles, and scripts.

### Markdown for Blog Posts

We use Markdown files for blog posts, which are fetched and processed at build time. This approach offers several advantages:

1. **Content Separation**: Keeping content in Markdown files separates it from the code, making it easier to manage and update.
2. **Build-time Processing**: By processing Markdown at build time, we ensure fast page loads without the need for client-side rendering of content.
3. **Version Control**: Markdown files can be easily version-controlled, allowing us to track changes to content over time.
4. **Easy Authoring**: Markdown is a simple and widely-used format, making it easy to create and edit blog posts without needing to understand the underlying code.

This setup allows for a streamlined content creation process while maintaining the benefits of a static site, resulting in a fast, efficient, and easily maintainable portfolio website.

## 📦 Project Structure

```
/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   │       ├── post-1.mdx
│   │       ├── post-2.mdx
│   │       └── post-3.mdx
│   ├── data/
│   │   └── config.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   └── index.astro
├── public/
└── package.json
```

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/jalolk/portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd portfolio
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Customization

To add your own data and customize the portfolio:

1. **Config File**: 
   - Open `src/data/config.ts`
   - Update the `config` object with your personal information, including name, tagline, social links, etc.

2. **Blog Posts**:
   - Add your Markdown files to `src/content/blog/`
   - Each file should have front matter with title, date, and any other relevant metadata

3. **Projects**:
   - In `src/data/config.ts`, update the `projects` array in the `config` object
   - Add your project details including title, description, image, and links

4. **Skills**:
   - Update the `skills` array in `src/data/config.ts` with your skillset
   - You can import icons from `simple-icons-astro` for visual representation

5. **Experience and Education**:
   - Modify the `profile` array in `src/data/config.ts` to reflect your experience and education

6. **Styling**:
   - Customize the look and feel by modifying the Tailwind classes in the component files located in `src/components/`

7. **Images**:
   - Place your images in the `public/images/` directory and reference them in your config and markdown files

After making your changes, run `npm run dev` to see your updates in real-time.

## 🤝 Contributing

Contributions make the open-source world go round! Got a cool idea? Fork the repo, make it happen, and send a pull request our way. Or just open an issue with an "enhancement" tag—simple as that!

Don't forget to star the project ⭐️—it’s like a virtual high-five! 🙌

1. Fork it 🍴
2. Create your branch (git checkout -b feature/CoolStuff) 🌱
3. Commit your magic (git commit -m 'Add some CoolStuff') ✨
4. Push it (git push origin feature/CoolStuff) 🚀
5. Open a pull request 🎉

**Contribution Guidelines:**

- No extra baggage—keep dependencies light. 🧳
- Update the README—no one likes being left in the dark. 🕵️‍♂️
- Bump those version numbers! 📈
- Get two thumbs-up 👍👍 from other devs before merging. If you can’t, phone a friend!
- Thanks a bunch!

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).