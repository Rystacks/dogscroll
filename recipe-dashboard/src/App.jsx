import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      const data = await response.json();
      setHeroes(data);
    };
    fetchHeroes();
  }, []);

  const filteredHeroes = heroes
    .filter((hero) => hero.name.toLowerCase().includes(search.toLowerCase()))
    .filter((hero) =>
      filter === "All" ? true : hero.biography.alignment === filter
    );

  const avgStrength = heroes.length
    ? Math.round(heroes.reduce((sum, h) => sum + h.powerstats.strength, 0) / heroes.length)
    : 0;

  const avgIntelligence = heroes.length
    ? Math.round(heroes.reduce((sum, h) => sum + h.powerstats.intelligence, 0) / heroes.length)
    : 0;

  const marvelCount = heroes.filter((h) => h.biography.publisher === "Marvel Comics").length;

  return (
    <div className="app">
      <header className="header">
       <h1>Superhero Database</h1>
        <p className="subtitle">Explore 731 heroes & villains from Marvel and DC</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Characters</span>
          <span className="stat-value">{heroes.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Avg Strength</span>
          <span className="stat-value">{avgStrength}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Avg Intelligence</span>
          <span className="stat-value">{avgIntelligence}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Marvel Characters</span>
          <span className="stat-value">{marvelCount}</span>
        </div>
      </div>

      <div className="controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search heroes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Alignments</option>
          <option value="good">Heroes</option>
          <option value="bad">Villains</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <p className="results-count">{filteredHeroes.length} characters found</p>

      <div className="hero-list">
        {filteredHeroes.map((hero) => (
          <div className="hero-card" key={hero.id}>
            <img className="hero-img" src={hero.images.sm} alt={hero.name} />
            <div className="hero-info">
              <span className="hero-name">{hero.name}</span>
              <span className="hero-publisher">{hero.biography.publisher || "Unknown"}</span>
            </div>
            <div className="hero-stats">
              <span className="badge">STR {hero.powerstats.strength}</span>
              <span className="badge">INT {hero.powerstats.intelligence}</span>
              <span className="badge">SPD {hero.powerstats.speed}</span>
            </div>
            <span className={`alignment-tag ${hero.biography.alignment}`}>
              {hero.biography.alignment}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;