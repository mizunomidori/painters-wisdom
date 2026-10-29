---
date: "2024-11-03"
tags: ["supports", "art", "materials"]
title: "French Standard Canvas Sizes [FR]"
summary: "フランス本国の伝統的なキャンバス規格（F・P・Mの号数別寸法一覧）と、日本規格との違い、および比率に関する数学的考察を紹介します。"
---

### フランス規格のキャンバス寸法（Châssis Standard）

フランスの伝統的なキャンバス規格における、号数（Numéro）別の寸法一覧です。
日本の規格のベースとなったものでありながら、単位換算の歴史的経緯（のちに日本で尺貫法やメートル法へ置き換えられたこと）により、現在の日本規格とはわずかに異なる寸法を持っています。

| 号数 (Numéro) | 長辺 (mm) | F (Figure) | P (Paysage) | M (Marine) |
| :---: | ---: | ---: | ---: | ---: |
| 0 | 180 | 140 | 120 | 100 |
| 1 | 220 | 160 | 140 | 120 |
| 2 | 240 | 190 | 160 | 140 |
| 3 | 270 | 220 | 190 | 160 |
| 4 | 330 | 240 | 220 | 190 |
| 5 | 350 | 270 | 240 | 220 |
| 6 | 410 | 330 | 270 | 240 |
| 8 | 460 | 380 | 330 | 270 |
| 10 | 550 | 460 | 380 | 330 |
| 12 | 610 | 500 | 460 | 380 |
| 15 | 650 | 540 | 500 | 460 |
| 20 | 730 | 600 | 540 | 500 |
| 25 | 810 | 650 | 600 | 540 |
| 30 | 920 | 730 | 650 | 600 |
| 40 | 1000 | 810 | 730 | 650 |
| 50 | 1160 | 890 | 810 | 730 |
| 60 | 1300 | 970 | 890 | 810 |
| 80 | 1460 | 1140 | 970 | 890 |
| 100 | 1620 | 1300 | 1140 | 970 |
| 120 | 1950 | 1300 | 1140 | 970 |

: (単位: mm ※フランス本国の伝統的基準値に基づく)

---

### 黄金比・白銀比との関係性

キャンバスサイズは「黄金比や白銀比に従っている」と一般に言及されることがありますが、厳密には**必ずしもすべてがそう一致しているわけではありません**（実際に比率が綺麗に一致するのは全体の30%未満です）。

近年の研究では、キャンバスのフォーマットサイズは厳密な美的要因というよりも、当時の「織機の幅に最適化する」といった**実用・経済的な要因**から計算・決定されてきたことが指摘されています。

> **参考文献:**  
> Dang, N. Dinh. “Standard canvas and stretcher sizes satisfying golden and silver ratios as well as optimal use of material.” arXiv: History and Overview (2015).  
> [閲覧リンク](https://nguyendinhdang.wordpress.com/2015/08/07/standard-canvas-and-stretcher-sizes-satisfying-golden-and-silver-ratios-as-well-as-optimal-use-of-material/)

#### 数学的定義

黄金比 $\phi$ および白銀比 $\delta$、ならびに黄金比の共役 $\Phi$ は、以下の数式で表されます。

$$
\begin{align*}
  &\text{Golden ratio: } \phi = \frac{1 + \sqrt{5}}{2} \\
  &\text{Silver ratio: } \delta = 1 + \sqrt{2} \\
  &\Phi = \frac{\sqrt{5} - 1}{2} = \frac{1}{\phi} \\
  &\because \Phi \cdot \phi = \frac{1 + \sqrt{5}}{2} \cdot \frac{\sqrt{5} - 1}{2} = \frac{(1 + \sqrt{5}) \cdot (\sqrt{5} - 1)}{4} = 1
\end{align*}
$$

キャンバスの各フォーマットの縦横比をこれらの比率に当てはめて表現すると、以下のようになります。

$$
\begin{align*}
  &\textsf{F-format (Figure): } (\sqrt{5}-1) : 1 \\
  &\quad \rightarrow H = \frac{W}{\sqrt{5} - 1} = \frac{W}{2 \Phi} = \frac{W \cdot \phi}{2} \\
  &\textsf{P-format (Paysage): } \sqrt{2} : 1 \\
  &\quad \rightarrow H = \frac{W}{\sqrt{2}} \\
  &\textsf{M-format (Marine): } (\sqrt{5}+1) : 2 \\
  &\quad \rightarrow H = \frac{2W}{\sqrt{5} + 1} = \frac{W}{\phi} \\
  &\text{where } H \text{ is the shorter length and } W \text{ is the longer length.}
\end{align*}
$$

ただし、実際にこの理論上の比率に厳密にフィットするのは、代表的な一部のサイズに限られます。
- **F-format:** F3, F6, F12, F25, F40, F100, F150
- **P-format:** P3, P8, P30, P50, P100, P150, P200
- **M-format:** M5, M12, M50, M60, M80, M200, M300