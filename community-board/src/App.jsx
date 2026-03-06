import "./index.css";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p><strong>Date:</strong> {props.date}</p>
      <p><strong>Time:</strong> {props.time}</p>
      <p><strong>Location:</strong> {props.location}</p>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button>Learn More</button>
      </a>
    </div>
  );
}

function App() {
  return (
    <div>
      <header>
        <h1>⚡ OKC Thunder Community Board</h1>
        <p>Your home for Thunder games, player news, and fan events</p>
      </header>

      <div className="grid">
        <Card
          title="Thunder vs. Denver Nuggets"
          date="Mar 8, 2026"
          time="7:00 PM CT"
          location="Paycom Center"
          description="The Thunder host the Nuggets in a big Western Conference matchup."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Thunder vs. Golden State Warriors"
          date="Mar 12, 2026"
          time="9:30 PM CT"
          location="Chase Center, SF"
          description="OKC heads to the Bay for a nationally televised road game."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Thunder vs. Dallas Mavericks"
          date="Mar 16, 2026"
          time="8:30 PM CT"
          location="American Airlines Center"
          description="A rivalry game as OKC battles Dallas in a high-stakes matchup."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Thunder vs. Minnesota Timberwolves"
          date="Mar 20, 2026"
          time="7:00 PM CT"
          location="Paycom Center"
          description="OKC hosts Minnesota in one of the best games of the season."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Thunder vs. San Antonio Spurs"
          date="Mar 27, 2026"
          time="7:30 PM CT"
          location="Paycom Center"
          description="Wembanyama comes to OKC for the most hyped young stars matchup of the year."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Thunder vs. Boston Celtics"
          date="Apr 1, 2026"
          time="7:00 PM CT"
          location="Paycom Center"
          description="The defending champs come to OKC. Paycom Center will be loud."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Thunder vs. Phoenix Suns"
          date="Apr 5, 2026"
          time="8:00 PM CT"
          location="Paycom Center"
          description="Last home game of the regular season — a must-win playoff push game."
          link="https://www.nba.com/thunder"
        />
        <Card
          title="Shai Gilgeous-Alexander Spotlight"
          date="All Season"
          time="Every Game"
          location="Paycom Center"
          description="Follow SGA's MVP-caliber season as he leads OKC every single night."
          link="https://www.nba.com/player/1628983/shai-gilgeous-alexander"
        />
        <Card
          title="Chet Holmgren Highlights"
          date="All Season"
          time="Every Game"
          location="Paycom Center"
          description="Track Chet's blocks, threes, and highlights all season long."
          link="https://www.nba.com/player/1631096/chet-holmgren"
        />
        <Card
          title="Thunder Fan Watch Party"
          date="Mar 12, 2026"
          time="9:00 PM CT"
          location="Bricktown, OKC"
          description="Can't make the away game? Watch with hundreds of fans in Bricktown."
          link="https://www.nba.com/thunder/community"
        />
        <Card
          title="Thunder Youth Basketball Clinic"
          date="Mar 22, 2026"
          time="10:00 AM CT"
          location="OKC Community Center"
          description="Free clinic for kids ages 8–14 led by Thunder coaches and players."
          link="https://www.nba.com/thunder/community"
        />
        <Card
          title="Thunder vs. LA Clippers"
          date="Mar 24, 2026"
          time="9:00 PM CT"
          location="Intuit Dome, LA"
          description="OKC travels to LA for a key playoff seeding game against the Clippers."
          link="https://www.nba.com/thunder"
        />
      </div>
    </div>
  );
}

export default App;