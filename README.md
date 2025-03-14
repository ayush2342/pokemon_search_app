# **Pokémon Search App**  
A Pokémon search application built with **Next.js (App Router)** and **Tailwind CSS**, utilizing the PokeAPI to allow users to search for Pokémon by name and filter them by type.

---

## **🚀 Features**
✔ **Search Pokémon by Name**  
✔ **Filter Pokémon by Type**  
✔ **Dynamic Pokémon Cards Display**  
✔ **Click a Pokémon to View Detailed Stats**  
✔ **Breadcrumb Navigation (Home → Pokémon Name)**  
✔ **Responsive & Mobile-Friendly Design**  
✔ **Server-Side Rendering (SSR) for Performance**  

---

## **🛠️ Tech Stack**
- **Frontend:** Next.js (App Router), Tailwind CSS  
- **Data Fetching:** PokeAPI (`https://pokeapi.co/api/v2/`)  
- **State Management:** React hooks (`useState`, `useEffect`)  
- **Routing:** Dynamic Routes (`/pokemon/[name]`)  
- **Code Structure:** Custom hooks for clean separation  

---

## **📂 Folder Structure**
```
📦 POKEMON_SEARCH_APP
 ┣ 📂 .next                # Build files
 ┣ 📂 app
 ┃ ┣ 📂 [pokemonName]      # Dynamic Pokémon details page
 ┃ ┃ ┣ 📜 page.tsx         # Individual Pokémon details page
 ┃ ┣ 📜 favicon.ico        # App icon
 ┃ ┣ 📜 globals.css        # Global styles
 ┃ ┣ 📜 layout.tsx         # Root layout component
 ┃ ┣ 📜 page.tsx           # Home page (Search & Filter Pokémon)
 ┣ 📂 components           # Reusable UI components
 ┃ ┣ 📜 Breadcrumb.tsx     # Breadcrumb navigation
 ┃ ┣ 📜 PokemonCard.tsx    # Pokémon Card component
 ┃ ┣ 📜 PokemonDetails.tsx # Pokémon details component
 ┃ ┣ 📜 PokemonList.tsx    # List of Pokémon displayed
 ┃ ┣ 📜 SearchForm.tsx     # Search and filter form
 ┣ 📂 hooks
 ┃ ┣ 📜 usePokemon.ts      # Custom hook for Pokémon API calls
 ┣ 📂 node_modules         # Dependencies
 ┣ 📂 public               # Static assets
 ┣ 📂 types
 ┃ ┣ 📜 pokemon.ts         # TypeScript types for Pokémon
 ┣ 📜 .gitignore           # Files ignored by Git
 ┣ 📜 next-env.d.ts        # TypeScript environment variables
 ┣ 📜 next.config.ts       # Next.js configuration
 ┣ 📜 package-lock.json    # Package version tracking
 ┣ 📜 package.json         # Dependencies and scripts
 ┣ 📜 postcss.config.js    # Tailwind/PostCSS configuration
 ┣ 📜 postcss.config.mjs   # Additional PostCSS settings
 ┣ 📜 README.md            # Project documentation
 ┣ 📜 tailwind.config.js   # Tailwind CSS configuration
 ┣ 📜 tsconfig.json        # TypeScript configuration
```

---

## **🔧 Installation & Setup**
1️⃣ **Clone the repository**  

git clone https://github.com/yourusername/pokemon-search-app.git
cd pokemon-search-app
```
  
2️⃣ **Install dependencies**  

npm install
# or
yarn install
```

3️⃣ **Start the development server**  

npm run dev
# or
yarn dev
```
  
4️⃣ **Open in browser**  
Go to `http://localhost:3000`

---

## **📝 Usage**
### **🔹 Home Page (`/`)**
- **Select Pokémon Type** (Dropdown to filter Pokémon by type)  
- **Search Pokémon by Name** (Input field for filtering Pokémon)  
- **Pokémon Cards** (Click a Pokémon to view details)

### **🔹 Pokémon Details Page (`/pokemon/[name]`)**
- Displays detailed Pokémon info (**image, stats, abilities, moves**)  
- **Breadcrumb Navigation** (Example: `Home → Pikachu`)  
- **Back Button** to return to the home page  

---

## **📌 Key Techniques Used**
✅ **Server & Client Components** - Optimized rendering for performance  
✅ **Custom Hooks (`usePokemon.ts`)** - Clean data fetching logic  
✅ **Server-Side Rendering (SSR)** - Faster initial page loads  
✅ **Server Actions** - Efficient data fetching on user interaction  
✅ **Dynamic Routing (`/pokemon/[name]`)** - Each Pokémon has a unique page  


## **🛠️ Next Steps**
- ✅ **Improve UI with Animations**  
- ✅ **Add Pagination for Pokémon List**  
- ✅ **Cache API Responses for Faster Load Times**  

---

## **🤝 Contributing**
1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a Pull Request  

---

## **📜 License**
This project is **open-source** and available under the **MIT License**.