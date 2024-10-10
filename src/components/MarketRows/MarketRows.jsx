import "./MarketRows.css";

export default function MarketRows({ hL, hR, pA }) {
  return (
    <section className="Row">
      {/*  Используйте  массивы  для  рендеринга  */}
      {hL.map((header, index) => (
        <div key={index} className="row-item">
          <h1>{header}</h1>
          <div className="explain">
            <h1>{hR[index]}</h1>
            {/*  Рендерим  каждый  подмассив  в  pA  как  отдельные  абзацы  */}
            {pA[index].map((paragraph, innerIndex) => (
              <p key={innerIndex}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}