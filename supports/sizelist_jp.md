##### キャンバス木枠・パネル 規格サイズ

| 号数 | 長辺 |    F |    P |    M |
| :--: | ---: | ---: | ---: | ---: |
|  0   |  180 |  140 |  120 |  100 |
|  1   |  220 |  160 |  140 |  120 |
|  SM  |  227 |  158 |    - |    - |
|  2   |  240 |  190 |  160 |  140 |
|  3   |  273 |  220 |  190 |  160 |
|  4   |  333 |  242 |  220 |  190 |
|  6   |  410 |  318 |  273 |  242 |
|  8   |  455 |  380 |  333 |  273 |
|  10  |  530 |  455 |  410 |  333 |
|  12  |  606 |  500 |  455 |  410 |
|  15  |  652 |  530 |  500 |  455 |
|  20  |  727 |  606 |  530 |  500 |
|  25  |  803 |  652 |  606 |  530 |
|  30  |  910 |  727 |  652 |  606 |
|  40  | 1000 |  803 |  727 |  652 |
|  50  | 1167 |  910 |  803 |  727 |
|  60  | 1303 |  970 |  894 |  803 |
|  80  | 1455 | 1120 |  970 |  894 |
| 100  | 1620 | 1303 | 1120 |  970 |
| 120  | 1940 | 1303 | 1120 |  970 |
| 150  | 2273 | 1818 | 1620 | 1455 |
| 200  | 2590 | 1940 | 1818 | 1620 |

  : (単位: mm)

##### A判・B判 規格サイズ

| 判型 |   寸法    | 判型 |    寸法     |
| :--: | :-------: | :--: | :---------: |
|  A0  | 84 × 1189 |  B0  | 1030 × 1456 |
|  A1  | 59 × 841  |  B1  | 728 × 1030  |
|  A2  | 42 × 594  |  B2  |  515 × 728  |
|  A3  | 29 × 420  |  B3  |  364 × 515  |
|  A4  | 21 × 297  |  B4  |  257 × 364  |
|  A5  | 14 × 210  |  B5  |  182 × 257  |
|  A6  | 10 × 148  |  B6  |  128 × 182  |
|  A7  | 74 × 105  |  B7  |  91 × 128   |
|  A8  |  52 × 74  |  B8  |   64 × 91   |
|  A9  |  37 × 52  |  B9  |   45 × 64   |
| A10  |  26 × 37  | B10  |   32 × 45   |

  : (単位: mm)


### 日本規格
日本規格はフランス規格をベースに尺寸単位に置換されたものです。
尺貫法廃止により、さらにメートル法に換算されています。
$1 \textsf{尺} = 10/33 \textsf{m} \simeq 30.3 \textsf{cm}$

> Standard Canvas Sizes, Musashi Art & Design glossary, Musashi Art & Design University
> https://art-design-glossary.musabi.ac.jp/standard-canvas-sizes/
>

### 黄金比・白銀比

キャンバスサイズは黄金比や白銀比に従っていると言及されることがありますが、
必ずしもそうではないようです（比率が一致するのは30%未満）。
キャンバスサイズフォーマットは美的要因ではなく、織機の幅に最適化するなど
経済的な要因で計算されていると指摘されています。

> Dang, N. Dinh. “Standard canvas and stretcher sizes satisfying golden and silver ratios as well as optimal use of material.” arXiv: History and Overview (2015): n. pag.
> https://nguyendinhdang.wordpress.com/2015/08/07/standard-canvas-and-stretcher-sizes-satisfying-golden-and-silver-ratios-as-well-as-optimal-use-of-material/
>

黄金比 $\phi$ ・白銀比 $\delta$ は以下の式で表されます。
$\Phi$は黄金比の共役です。

$$
\begin{align*}
  &\text{Golden ratio: } \phi = \frac{1 + \sqrt{5}}{2} \\
  &\text{Silver ratio: } \delta = 1 + \sqrt{2} \\
  &\Phi = \frac{\sqrt{5} - 1}{2} = \frac{1}{\phi}, \\
  &\text{where } \Phi \text{ is golden ratio conjugate.} \\
  &\because \Phi \cdot \phi = \frac{1 + \sqrt{5}}{2} \cdot \frac{\sqrt{5} - 1}{2} = \frac{(1 + \sqrt{5}) \cdot (\sqrt{5} - 1)}{4} = 1
\end{align*}
$$

キャンバスサイズは上記の比を用いて以下のように表現されます。

$$
\begin{align*}
  &\textsf{F-format: } (\sqrt{5}-1):1 \\
  &\rightarrow H = \frac{W}{\sqrt{5} - 1} = \frac{W}{2 \Phi} = \frac{W \cdot \phi}{2} \\
  &\textsf{P-format: } \sqrt{2}:1 \\
  &\rightarrow H = \frac{W}{\sqrt{2}} = \frac{W}{\delta - 1} \\
  &\textsf{M-format: } (\sqrt{5}+1):2 \\
  &\rightarrow H = \frac{2W}{\sqrt{5} + 1} = \frac{W}{\phi} \\
  &\text{where } H \text{ is the shorter length and } W \text{ is the longer length.}
\end{align*}
$$

ただし、この比率にフィットするのは、以下のサイズのみとのことです。
- F-format: F3, F6, F12, F25, F40, F100, F150
- P-format: P3, P8, P30, P50, P100, P150, P200
- M-format: M5, M12, M50, M60, M80, M200, M300
