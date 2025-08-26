# 🎬 CineSeek  

CineSeek is a modern **movie discovery application** built with **Next.js, TypeScript, and Tailwind CSS**.  
It integrates with the **MoviesDatabase API** to allow users to:  
- Browse movies  
- View detailed information  
- Search films by **year** or **genre**  

The project focuses on creating a **responsive, well-structured web app** with proper API integration and TypeScript typing.  

---

## 📌 Project Description
CineSeek is designed to demonstrate **best practices in modern web development** while providing a sleek, user-friendly movie browsing experience.  

---

## 🎯 Learning Objectives
- Understanding API documentation and integration  
- Implementing TypeScript interfaces for API responses  
- Creating reusable React components  
- Building a responsive layout with Tailwind CSS  
- Managing application state (filtering & pagination)  
- Implementing error handling and loading states  
- Setting up Next.js API routes for server-side data fetching  
- Managing environment variables for API keys  

---

## 🛠️ Requirements  

### Technical Stack
- **Next.js 14 (Pages Router)**  
- **TypeScript**  
- **Tailwind CSS**  
- **Font Awesome Icons**  
- **MoviesDatabase API**  

### Development Requirements
- Node.js (v16 or higher)  
- npm or yarn  
- Git for version control  

---
## 📂 File Structure
```
alx-movie-app/
├── components/
│ ├── commons/
│ │ ├── Button.tsx
│ │ ├── Loading.tsx
│ │ └── MovieCard.tsx
│ └── layouts/
│ ├── Footer.tsx
│ ├── Header.tsx
│ └── Layout.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── api/
│ │ └── fetch-movies.ts
│ ├── movies/
│ │ └── index.tsx
│ ├── _app.tsx
│ └── index.tsx
├── public/
├── styles/
│ └── globals.css
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```



---

## ✅ Best Practices  

### Code Quality
- TypeScript interfaces for props & API responses  
- Component-based architecture (clear separation of concerns)  
- Proper error handling in API requests  
- Loading states for better UX  
- Environment variables for sensitive data  

### Performance
- Client-side navigation with Next.js router  
- Efficient API calls with pagination  
- Responsive design via Tailwind CSS  
- Image optimization using Next.js `<Image />`  

### Maintainability
- Consistent code formatting  
- Clear folder structure  
- Reusable components  
- Comprehensive prop typing  
- Documentation in README  

---

## 🌐 API Integration  

The application uses the **MoviesDatabase API** with key endpoints:  
- **`/titles`** → Fetch movie data  
  - Supports **filtering** by year and genre  
  - Implements **pagination**  

### Authentication
- API key via **headers**  
- Stored in `.env.local` (environment variable)  
- Server-side API routes prevent key exposure  

---

## ⚡ Error Handling & Usage Limits  

- `Loading` component for pending states  
- `try/catch` blocks in API routes  
- Status code checking for API responses  
- Type guards for API data validation  
- API **rate limiting** considerations  
- Pagination to reduce request size  
- Client-side caching where appropriate  
- Error boundaries for graceful failure  

---

## 🚀 Getting Started  

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/cineseek.git
   cd cineseek
   ```
2. Install dependencies
   ```bash
    npm install
    # or
    yarn install
   ```
3. Create .env.local and add your MoviesDatabase API key:
   ```bash
    MOVIEDB_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
    npm run dev
    # or
    yarn dev
   ```

5. Open http://localhost:3000 🚀

