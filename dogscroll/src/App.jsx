import { useState, useCallback } from "react";
import "./App.css";

const API_KEY = "live_7qjrFJMfQr5LZ5HiAKtJ3W01SWV9RaTtm2vVk6DQfEebAht9UeuhKBLrLj7FIA1Y";

export default function App() {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [banList, setBanList] = useState(new Set());
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [filtered, setFiltered] = useState(0);

  const fetchDog = useCallback(async () => {
    setLoading(true);
    setError(null);

    let tries = 0;
    const maxTries = 15;

    while (tries < maxTries) {
      tries++;
      try {
        const randomId = Math.floor(Math.random() * 200) + 1;

        // Fetch breed info directly
        const breedRes = await fetch(
          `https://api.thedogapi.com/v1/breeds/${randomId}?api_key=${API_KEY}`
        );
        if (!breedRes.ok) continue;
        const breed = await breedRes.json();

        if (!breed.name) continue;

        const breedName = breed.name;
        const temperament = breed.temperament?.split(", ")[0] ?? "Unknown";
        const origin = breed.origin || "Unknown";

        if (
          banList.has(breedName) ||
          banList.has(temperament) ||
          banList.has(origin)
        ) continue;

        // Fetch an image for this breed
        const imgRes = await fetch(
          `https://api.thedogapi.com/v1/images/search?breed_ids=${randomId}&api_key=${API_KEY}`
        );
        if (!imgRes.ok) continue;
        const imgData = await imgRes.json();
        const imageUrl = imgData[0]?.url;
        if (!imageUrl) continue;

        const result = {
          id: String(randomId),
          url: imageUrl,
          breedName,
          temperament,
          origin,
          weight: breed.weight?.imperial ? `${breed.weight.imperial} lbs` : "Unknown",
          lifeSpan: breed.life_span || "Unknown",
        };

        setDog(result);
        setHistory((prev) => [result, ...prev].slice(0, 20));
        setFiltered(tries - 1);
        setLoading(false);
        return;
      } catch (e) {
        console.error(e);
      }
    }

    setError("Couldn't find a result outside your ban list. Try removing some filters.");
    setLoading(false);
  }, [banList]);

  const toggleBan = (value) => {
    if (!value || value === "Unknown") return;
    setBanList((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const removeBan = (value) => {
    setBanList((prev) => {
      const next = new Set(prev);
      next.delete(value);
      return next;
    });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <span className="logo-icon">🐾</span>
          <div>
            <div className="logo-text">DogScroll</div>
            <div className="tagline">Discover a new dog breed every click</div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="discover-wrap">
          <button className="discover-btn" onClick={fetchDog} disabled={loading}>
            {loading ? (
              <><span className="spinner" /> Fetching good boy…</>
            ) : (
              <>{dog ? "🐶 Discover Another" : "🐶 Find a Dog"}</>
            )}
          </button>
          {filtered > 0 && dog && (
            <p className="attempts-note">Skipped {filtered} banned breed{filtered > 1 ? "s" : ""}</p>
          )}
        </div>

        {error && <div className="error-msg">{error}</div>}

        {dog && (
          <div className="card" key={dog.id}>
            <div className="card-image-wrap">
              <img src={dog.url} alt={dog.breedName} className="card-image" />
            </div>

            <div className="card-body">
              <h2 className="card-title">{dog.breedName}</h2>

              <div className="attributes">
                <div className="attr-group">
                  <span className="attr-label">Breed</span>
                  <button
                    className={`attr-pill ${banList.has(dog.breedName) ? "banned" : ""}`}
                    onClick={() => toggleBan(dog.breedName)}
                    title="Click to ban"
                  >
                    {dog.breedName} <span className="pill-icon">{banList.has(dog.breedName) ? "✕" : "+"}</span>
                  </button>
                </div>

                <div className="attr-group">
                  <span className="attr-label">Temperament</span>
                  <button
                    className={`attr-pill ${banList.has(dog.temperament) ? "banned" : ""}`}
                    onClick={() => toggleBan(dog.temperament)}
                    title="Click to ban"
                  >
                    {dog.temperament} <span className="pill-icon">{banList.has(dog.temperament) ? "✕" : "+"}</span>
                  </button>
                </div>

                <div className="attr-group">
                  <span className="attr-label">Origin</span>
                  <button
                    className={`attr-pill ${banList.has(dog.origin) ? "banned" : ""}`}
                    onClick={() => toggleBan(dog.origin)}
                    title="Click to ban"
                  >
                    {dog.origin} <span className="pill-icon">{banList.has(dog.origin) ? "✕" : "+"}</span>
                  </button>
                </div>

                <div className="attr-group">
                  <span className="attr-label">Weight</span>
                  <span className="attr-pill static">{dog.weight}</span>
                </div>

                <div className="attr-group">
                  <span className="attr-label">Life Span</span>
                  <span className="attr-pill static">{dog.lifeSpan}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="sidebar-area">
          <div className="panel">
            <h3 className="panel-title">🚫 Ban List <span className="panel-count">{banList.size}</span></h3>
            {banList.size === 0 ? (
              <p className="panel-empty">Click Breed, Temperament, or Origin to ban it.</p>
            ) : (
              <div className="ban-tags">
                {[...banList].map((val) => (
                  <button key={val} className="ban-tag" onClick={() => removeBan(val)}>
                    {val} ✕
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="panel">
            <button className="panel-title history-toggle" onClick={() => setShowHistory(p => !p)}>
              🕰 History <span className="panel-count">{history.length}</span>
              <span className="chevron">{showHistory ? "▲" : "▼"}</span>
            </button>
            {showHistory && (
              <div className="history-list">
                {history.map((item, i) => (
                  <div key={item.id + i} className="history-item">
                    <img src={item.url} alt={item.breedName} className="history-thumb" />
                    <div className="history-meta">
                      <span className="history-title">{item.breedName}</span>
                      <span className="history-sub">{item.origin} · {item.temperament}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}