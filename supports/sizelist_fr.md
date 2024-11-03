## Standard Canvas Sizes

| Numéro | Long side | F (Figure) | P (Paysage) | M (Marine) |
| :----- | :-------- | :--------- | :---------- | :--------- |
| 0      | 180       | 140        | 110         | 100        |
| 1      | 220       | 160        | 140         | 120        |
| 2      | 240       | 190        | 160         | 140        |
| 3      | 270       | 220        | 190         | 160        |
| 4      | 330       | 240        | 220         | 190        |
| 5      | 350       | 270        | 240         | 220        |
| 6      | 410       | 330        | 270         | 240        |
| 8      | 460       | 380        | 330         | 270        |
| 10     | 550       | 460        | 380         | 330        |
| 12     | 610       | 500        | 460         | 380        |
| 15     | 650       | 540        | 500         | 460        |
| 20     | 730       | 600        | 540         | 500        |
| 25     | 810       | 650        | 600         | 540        |
| 30     | 920       | 730        | 650         | 600        |
| 40     | 1000      | 810        | 730         | 650        |
| 50     | 1160      | 890        | 810         | 730        |
| 60     | 1300      | 970        | 890         | 810        |
| 80     | 1460      | 1140       | 970         | 890        |
| 100    | 1620      | 1300       | 1140        | 970        |
| 120    | 1950      | 1300       | 1140        | 970        |

  : (Unit: mm)


### the golden ratio & the number of porte d’harmonie ($=\sqrt{2}$)

キャンバスサイズは黄金比や白銀比に従っていると言及されることがありますが、
必ずしもそうではないようです（比率が一致するのは30%未満）。
キャンバスサイズフォーマットは美的要因ではなく、織機の幅に最適化するなど
経済的な要因で計算されていると指摘されています。

> Dang, N. Dinh. “Standard canvas and stretcher sizes satisfying golden and silver ratios as well as optimal use of material.” arXiv: History and Overview (2015): n. pag.
>
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
