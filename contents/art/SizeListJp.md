---
date: "2024-11-03"
tags: ["supports", "art", "materials"]
title: "Canvas Size List [JP]"
summary: "日本規格のキャンバス木枠・パネル寸法を号数別に整理し、F・P・M各型の長辺と短辺の一覧と、黄金比・白銀比に関する数学的考察を紹介します。"
---

### キャンバス木枠・パネル 規格サイズ

日本のキャンバス規格（F・P・M・SM）における号数別の寸法一覧です。

| 号数 | 長辺 | F (Figure) | P (Paysage) | M (Marine) |
| :--: | ---: | ---: | ---: | ---: |
| 0 | 180 | 140 | 120 | 100 |
| 1 | 220 | 160 | 140 | 120 |
| SM | 227 | 158 | - | - |
| 2 | 240 | 190 | 160 | 140 |
| 3 | 273 | 220 | 190 | 160 |
| 4 | 333 | 242 | 220 | 190 |
| 6 | 410 | 318 | 273 | 242 |
| 8 | 455 | 380 | 333 | 273 |
| 10 | 530 | 455 | 410 | 333 |
| 12 | 606 | 500 | 455 | 410 |
| 15 | 652 | 530 | 500 | 455 |
| 20 | 727 | 606 | 530 | 500 |
| 25 | 803 | 652 | 606 | 530 |
| 30 | 910 | 727 | 652 | 606 |
| 40 | 1000 | 803 | 727 | 652 |
| 50 | 1167 | 910 | 803 | 727 |
| 60 | 1303 | 970 | 894 | 803 |
| 80 | 1455 | 1120 | 970 | 894 |
| 100 | 1620 | 1303 | 1120 | 970 |
| 120 | 1940 | 1303 | 1120 | 970 |
| 150 | 2273 | 1818 | 1620 | 1455 |
| 200 | 2590 | 1940 | 1818 | 1620 |

: (単位: mm)

---

### A判・B判 規格サイズ

参考として、一般的な用紙規格であるA判・B判の寸法も併記します。

| 判型 | 寸法 (mm) | 判型 | 寸法 (mm) |
| :--: | :-------: | :--: | :---------: |
| A0 | 841 × 1189 | B0 | 1030 × 1456 |
| A1 | 594 × 841 | B1 | 728 × 1030 |
| A2 | 420 × 594 | B2 | 515 × 728 |
| A3 | 297 × 420 | B3 | 364 × 515 |
| A4 | 210 × 297 | B4 | 257 × 364 |
| A5 | 148 × 210 | B5 | 182 × 257 |
| A6 | 105 × 148 | B6 | 128 × 182 |
| A7 | 74 × 105 | B7 | 91 × 128 |
| A8 | 52 × 74 | B8 | 64 × 91 |
| A9 | 37 × 52 | B9 | 45 × 64 |
| A10 | 26 × 37 | B10 | 32 × 45 |

: (単位: mm)

---

### 日本規格の背景

日本のキャンバス規格は、もともとフランス規格（르뱅/ルヴァン等の伝統サイズ）をベースに、かつての尺寸単位（尺貫法）に置換されたものです。その後、尺貫法の廃止に伴いメートル法へと再換算されました。

$$1 \textsf{尺} = \frac{10}{33} \textsf{m} \simeq 30.3 \textsf{cm}$$

> **参考情報:**  
> [Standard Canvas Sizes, Musashi Art & Design glossary](https://art-design-glossary.musabi.ac.jp/standard-canvas-sizes/)

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