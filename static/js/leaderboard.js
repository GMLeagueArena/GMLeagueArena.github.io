// Leaderboard data transcribed from Tables 1-3 of arXiv:2611.05147.
(function () {
  const BASE = "Native GM strategy";

  // NBA: [model, elo, wins, losses, cash, titles, [w22..w26], G]
  const nba = [
    ["Claude Opus 5.5", 1977.3, 446, 66, 312.48, 3, [44, 54, 65, 74, 76], 31.71],
    ["GPT-6 Astra", 1907.7, 427, 89, 1006.62, 1, [45, 50, 61, 69, 73], 28.66],
    ["GPT-6.1 Sol", 1838.7, 400, 101, 1152.33, 0, [45, 49, 60, 67, 71], 26.83],
    ["Claude Sonnet 5.5", 1813.3, 385, 98, 308.05, 1, [43, 54, 75, 65, 56], 14.63],
    ["Claude Fable 5.1", 1794.4, 377, 106, 419.07, 0, [38, 49, 64, 67, 66], 28.05],
    ["Grok 4.7", 1784.3, 347, 121, 585.74, 0, [36, 46, 50, 59, 63], 24.39],
    ["Gemini 3.1 Pro Preview", 1753.1, 334, 131, -21.63, 0, [42, 51, 64, 57, 46], 6.10],
    ["Grok 4.6", 1713.6, 316, 150, 443.52, 0, [38, 46, 49, 55, 57], 17.07],
    ["Kimi K3", 1698.8, 308, 130, 868.23, 0, [42, 46, 55, 58, 62], 19.51],
    ["DeepSeek-V4-Pro", 1666.3, 275, 161, 255.43, 0, [36, 44, 46, 53, 56], 17.68],
    ["GLM-5.3", 1652.6, 279, 161, 188.42, 0, [47, 52, 53, 54, 57], 7.32],
    ["Qwen3.8-Max", 1602.5, 250, 189, 292.10, 0, [41, 42, 48, 48, 52], 10.37],
    ["GPT-6 Luna", 1582.6, 249, 190, -41.43, 0, [37, 48, 54, 46, 38], -0.61],
    [BASE, 1575.0, 240, 196, 96.78, 0, [39, 44, 46, 48, 49], 8.54],
    ["Gemini 3.8 Flash", 1525.7, 220, 217, 111.40, 0, [40, 40, 41, 42, 43], 3.05],
    ["GPT-5.6 Terra", 1499.0, 196, 232, 527.42, 0, [44, 38, 38, 38, 38], -3.66],
    ["MiniMax M3", 1451.8, 193, 226, 106.26, 0, [39, 38, 38, 38, 41], 1.22],
    ["DeepSeek-V4.1-Flash", 1418.4, 178, 232, 294.00, 0, [47, 38, 37, 36, 38], -6.71],
    ["Qwen3.8-Flash", 1388.5, 154, 256, 428.19, 0, [37, 35, 34, 32, 32], -4.88],
    ["Qwen3.8-27B", 1361.6, 154, 256, 460.73, 0, [35, 33, 32, 32, 32], -2.44],
    ["Doubao-Seed-2.1-Pro", 1331.0, 133, 277, 335.05, 0, [35, 32, 27, 27, 27], -7.93],
    ["GLM-5.3-Flash", 1305.8, 117, 293, 581.30, 0, [40, 36, 25, 24, 27], -15.24],
    ["MiMo-V2.6-Pro", 1275.4, 105, 305, 925.41, 0, [40, 37, 23, 22, 22], -20.12],
    ["Gemini 3.5 Flash-Lite", 1255.2, 106, 304, 65.99, 0, [42, 34, 22, 24, 23], -17.68],
    ["GPT-4o", 1206.4, 91, 319, 360.08, 0, [46, 35, 29, 23, 19], -23.78],
    ["DeepSeek-R1", 1167.2, 81, 329, 167.76, 0, [39, 32, 18, 19, 17], -21.34],
    ["Claude Haiku 4.5", 1150.6, 61, 349, 244.02, 0, [41, 32, 18, 14, 15], -26.83],
    ["Hy4 preview", 1124.7, 53, 357, 81.31, 0, [46, 32, 18, 13, 12], -32.32],
    ["MiMo-V2.6-Flash", 1107.2, 51, 359, -40.19, 0, [43, 31, 22, 14, 8], -31.71],
    ["Doubao-Seed-2.1-Turbo", 1071.0, 42, 368, 354.07, 0, [43, 32, 18, 12, 14], -29.88],
  ];

  // Other sports: [model, elo, cash]
  const nfl = [
    ["Claude Opus 5.5", 1870.1, 228.19], ["Claude Sonnet 5.5", 1761.6, 78.00], ["GPT-6.1 Sol", 1760.0, 205.34],
    ["Kimi K3", 1750.0, 86.48], ["GPT-6 Astra", 1745.0, 163.94], ["Claude Fable 5.1", 1736.3, 236.92],
    ["Grok 4.7", 1733.0, 422.70], ["Gemini 3.1 Pro Preview", 1714.4, 210.74], ["DeepSeek-V4-Pro", 1714.3, 117.67],
    ["GLM-5.3", 1700.0, 233.54], ["Grok 4.6", 1663.8, 215.06], ["GPT-6 Luna", 1644.4, 178.54],
    ["Gemini 3.8 Flash", 1630.4, 191.05], ["Qwen3.8-Max", 1559.7, 271.95], ["GPT-5.6 Terra", 1547.8, 102.12],
    ["DeepSeek-V4.1-Flash", 1518.7, 93.57], ["MiniMax M3", 1468.9, -67.53], ["Qwen3.8-Flash", 1401.8, 161.60],
    [BASE, 1386.1, 262.38], ["MiMo-V2.6-Pro", 1385.0, 74.50], ["Qwen3.8-27B", 1365.1, 391.39],
    ["GPT-5.4 Mini", 1352.7, 196.24], ["Gemini 3.5 Flash-Lite", 1320.5, 123.38], ["Doubao-Seed-2.1-Pro", 1315.4, 37.75],
    ["GLM-5.3-Flash", 1310.2, 248.22], ["DeepSeek-R1", 1258.2, 173.47], ["MiMo-V2.6-Flash", 1245.0, 42.79],
    ["GPT-5.4 Nano", 1220.8, 211.02], ["Hy4 preview", 1210.6, 126.84], ["GPT-4o", 1193.3, 210.78],
    ["Doubao-Seed-2.1-Turbo", 1163.5, 169.85], ["Claude Haiku 4.5", 1105.3, 221.24],
  ];
  const nhl = [
    ["Claude Opus 5.5", 1855.4, 63.10], ["GPT-6.1 Sol", 1824.0, 59.27], ["Claude Sonnet 5.5", 1768.8, 40.08],
    ["Gemini 3.1 Pro Preview", 1754.7, 138.45], ["GPT-6 Astra", 1750.0, 0.18], ["Claude Fable 5.1", 1747.8, 116.69],
    ["Grok 4.7", 1739.5, 44.86], ["Kimi K3", 1665.4, 267.86], ["Grok 4.6", 1617.6, 320.32],
    ["DeepSeek-V4-Pro", 1591.9, 176.44], [BASE, 1572.7, -18.21], ["Qwen3.8-Max", 1569.3, 49.08],
    ["Qwen3.8-Flash", 1557.6, 116.02], ["Gemini 3.8 Flash", 1545.9, 6.45], ["GPT-5.4 Mini", 1544.4, 10.93],
    ["GPT-5.6 Terra", 1429.3, -43.07], ["DeepSeek-V4.1-Flash", 1415.2, 6.97], ["GLM-5.3", 1391.0, 75.21],
    ["Qwen3.8-27B", 1390.2, 217.59], ["MiniMax M3", 1380.2, -58.10], ["GPT-5.4 Nano", 1347.0, 69.68],
    ["GPT-6 Luna", 1333.0, 51.33], ["GLM-5.3-Flash", 1317.6, 204.81], ["Doubao-Seed-2.1-Pro", 1290.5, -39.41],
    ["GPT-4o", 1251.1, 17.16], ["MiMo-V2.6-Pro", 1237.3, -10.39], ["Claude Haiku 4.5", 1235.6, 321.47],
    ["DeepSeek-R1", 1191.0, 80.67], ["Doubao-Seed-2.1-Turbo", 1186.8, 119.83], ["Hy4 preview", 1166.3, -11.50],
    ["MiMo-V2.6-Flash", 1157.1, -5.79], ["Gemini 3.5 Flash-Lite", 1118.8, -36.56],
  ];
  const mlb = [
    ["GPT-6 Astra", 1895.5, 203.05], ["Claude Opus 5.5", 1860.4, -33.64], ["GPT-6.1 Sol", 1780.0, 149.24],
    ["Qwen3.8-Max", 1776.2, 386.26], ["Claude Sonnet 5.5", 1769.4, 527.73], ["Grok 4.7", 1747.2, 447.90],
    ["Claude Fable 5.1", 1737.1, 32.27], [BASE, 1727.0, 406.52], ["Gemini 3.1 Pro Preview", 1719.6, 373.27],
    ["GPT-6 Luna", 1707.3, 323.11], ["Grok 4.6", 1695.1, 287.21], ["GLM-5.3", 1666.9, 264.28],
    ["DeepSeek-V4-Pro", 1623.5, 242.39], ["Kimi K3", 1616.6, 357.41], ["MiniMax M3", 1540.1, -41.12],
    ["Doubao-Seed-2.1-Pro", 1505.6, -686.43], ["GLM-5.3-Flash", 1476.3, 42.31], ["Qwen3.8-27B", 1441.3, 151.91],
    ["GPT-5.6 Terra", 1441.1, 43.03], ["MiMo-V2.6-Pro", 1380.5, -609.77], ["Gemini 3.8 Flash", 1378.0, -14.77],
    ["DeepSeek-V4.1-Flash", 1350.9, 21.55], ["Gemini 3.5 Flash-Lite", 1346.8, -39.27], ["Qwen3.8-Flash", 1302.4, 106.73],
    ["Claude Haiku 4.5", 1263.8, 172.99], ["GPT-4o", 1256.5, 60.17], ["DeepSeek-R1", 1237.9, 165.93],
    ["Hy4 preview", 1216.5, 206.73], ["Doubao-Seed-2.1-Turbo", 1146.9, -22.45], ["MiMo-V2.6-Flash", 1084.9, 53.63],
  ];

  const fmt = (v, d) => v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const signed = (v) => (v > 0 ? "+" : v < 0 ? "−" : "") + fmt(Math.abs(v), 2);

  function spark(ws) {
    const w = 70, h = 20, max = 82, min = 0;
    const pts = ws.map((v, i) => `${(i * (w - 4)) / (ws.length - 1) + 2},${h - 2 - ((v - min) / (max - min)) * (h - 4)}`).join(" ");
    const up = ws[ws.length - 1] >= ws[0];
    return `<svg class="spark" role="img" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="${up ? "#157f3b" : "#c81e1e"}" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  }

  function eloBar(elo, lo, hi) {
    const px = Math.round(8 + ((elo - lo) / (hi - lo)) * 72);
    return `<span class="bar" style="width:${px}px"></span>${fmt(elo, 1)}`;
  }

  const rank = (rows) => rows.map((r, i) => ({ rank: i + 1, row: r }));

  const SPORTS = {
    nba: {
      rows: rank(nba),
      note: "Table 1–2 of the paper. 🏆 = championships. Seasons shows regular-season wins 2022→2026. G is the change in mean win rate from 2022–23 to 2025–26 (w = 2), in percentage points.",
      cols: [
        { k: "rank", t: "Rank", n: true, v: (e) => e.rank, r: (e) => e.rank },
        { k: "model", t: "Model", v: (e) => e.row[0], r: (e) => e.row[0] + (e.row[5] ? " " + "🏆".repeat(e.row[5]) : "") },
        { k: "elo", t: "Elo", n: true, v: (e) => e.row[1], r: (e) => eloBar(e.row[1], 1071, 1977.3) },
        { k: "w", t: "Wins", n: true, v: (e) => e.row[2], r: (e) => e.row[2] },
        { k: "l", t: "Losses", n: true, v: (e) => e.row[3], r: (e) => e.row[3] },
        { k: "cash", t: "Cash", n: true, v: (e) => e.row[4], r: (e) => fmt(e.row[4], 2), c: (e) => (e.row[4] < 0 ? "neg" : "") },
        { k: "seasons", t: "Seasons", v: (e) => e.row[6][4] - e.row[6][0], r: (e) => `<span title="Wins 2022→2026: ${e.row[6].join(" → ")}">${spark(e.row[6])}</span>` },
        { k: "g", t: "G", n: true, v: (e) => e.row[7], r: (e) => signed(e.row[7]), c: (e) => (e.row[7] > 0 ? "pos" : e.row[7] < 0 ? "neg" : "") },
      ],
    },
  };
  const simpleCols = (lo, hi) => [
    { k: "rank", t: "Rank", n: true, v: (e) => e.rank, r: (e) => e.rank },
    { k: "model", t: "Model", v: (e) => e.row[0], r: (e) => e.row[0] },
    { k: "elo", t: "Elo", n: true, v: (e) => e.row[1], r: (e) => eloBar(e.row[1], lo, hi) },
    { k: "cash", t: "Cash", n: true, v: (e) => e.row[2], r: (e) => fmt(e.row[2], 2), c: (e) => (e.row[2] < 0 ? "neg" : "") },
  ];
  SPORTS.nfl = { rows: rank(nfl), cols: simpleCols(1105.3, 1870.1), note: "Table 3(a) of the paper: 32 participants, matching the number of NFL teams." };
  SPORTS.nhl = { rows: rank(nhl), cols: simpleCols(1118.8, 1855.4), note: "Table 3(b) of the paper: 32 participants, matching the number of NHL teams." };
  SPORTS.mlb = { rows: rank(mlb), cols: simpleCols(1084.9, 1895.5), note: "Table 3(c) of the paper: 30 participants, matching the number of MLB teams." };

  const table = document.getElementById("lb");
  const note = document.getElementById("lb-note");
  let current = "nba", sortKey = "rank", sortDir = "asc";

  function render() {
    const s = SPORTS[current];
    const col = s.cols.find((c) => c.k === sortKey) || s.cols[0];
    const rows = s.rows.slice().sort((a, b) => {
      const x = col.v(a), y = col.v(b);
      const d = typeof x === "string" ? x.localeCompare(y) : x - y;
      return sortDir === "asc" ? d : -d;
    });
    const head = "<thead><tr>" + s.cols.map((c) =>
      `<th class="${c.n ? "n" : ""}" data-k="${c.k}"${c.k === sortKey ? ` data-sort="${sortDir}"` : ""}>${c.t}</th>`).join("") + "</tr></thead>";
    const body = "<tbody>" + rows.map((e) =>
      `<tr class="${e.row[0] === BASE ? "baseline" : ""}">` + s.cols.map((c) =>
        `<td class="${[c.n ? "n" : "", c.c ? c.c(e) : ""].join(" ").trim()}">${c.r(e)}</td>`).join("") + "</tr>").join("") + "</tbody>";
    table.innerHTML = head + body;
    note.textContent = s.note;
  }

  table.addEventListener("click", (ev) => {
    const th = ev.target.closest("th");
    if (!th) return;
    const k = th.dataset.k;
    if (k === sortKey) sortDir = sortDir === "asc" ? "desc" : "asc";
    else { sortKey = k; sortDir = k === "rank" || k === "model" ? "asc" : "desc"; }
    render();
  });

  document.querySelectorAll(".lb-tabs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lb-tabs button").forEach((b) => b.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      current = btn.dataset.sport;
      sortKey = "rank"; sortDir = "asc";
      render();
    });
  });

  render();
})();
