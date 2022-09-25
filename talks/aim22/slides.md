***Head

:::Icon logos/favicon.ico
:::CSS node_modules/normalize.css/normalize.css minify
:::CSS Resources/styles.css minify
:::Script Resources/scripts/mathjax-conf.js minify
:::Script https://cdn.jsdelivr.net/npm/mathjax@3.1.0/es5/tex-mml-chtml.js
:::Script Resources/scripts/cacc.js
:::Script Resources/scripts/cacc-conf.js minify
:::Script Resources/scripts/general-conf.js minify
:::

***

***TitleSlide

:::Title MathJax, SRE and some Diagrams
:::Subtitle Technical Background
:::
:::Author Volker Sorge
[v.sorge@progressiveaccess.com](mailto:v.sorge@progressiveaccess.com)
:::

***Affiliations
:::Affiliation
University of Birmingham, UK
![University of Birmingham Crest](Resources/logos/crest-new.jpg){height=150}
[cs.bham.ac.uk/~vxs](https://www.cs.bham.ac.uk/~vxs)
:::


:::Affiliation
MathJax Consortium
![MathJax Logo](Resources/logos/badge-square2.png){height=150}
[mathjax.org](https://mathjax.org)
:::

:::Affiliation
Progressive Accessiblity Solutions
![Progressive Access Logo](Resources/logos/logo2-small.png){height=150}
[progacc.com](https://progressiveaccess.com)
:::

:::Affiliation
Indian Instiute of Technology, Delhi
![IITD Logo](Resources/logos/iitd-logo-small.png){height=150}
[iitd.ac.in](https://iitd.ac.in)
:::

*******************

## Background

* [Raised mathematics project](https://github.com/raised-mathematics)
* Automatically translate mathematical literature into tactile formats
* Mainly aimed at advanced math textbooks and articles
* Project is a mix of reseach and novel technical development

## What is MathJax?

Short Answer: Davide Cervone

* [MathJax](http://www.mathjax.org) is an open-source JavaScript library for
  rendering Mathematics in all browsers
* Can take LaTeX, AsciiMath, and MathML as input
* Generates browser output, e.g. HTML/CSS, SVG
* MathJax is the de facto rendering solution of most Mathematics on the web
* Standard Maths rendering solution for many publishers
* Around for over 10 years, lastest version 3.2.2 released a couple of weeks ago

**In our context:**{style="color:red"} translation of LaTeX to Nemeth Braille

## Speech Rule Engine

* Javascript library for translating Math into Speech [available at github](github.com/zorkow/speech-rule-engine)
* Only Math speech solution in JavaScript: Runs in browser, command line, as node module.
* Speech solution for: ChromeVox, MathJax, EquatIO, MathLive, \ldots
* Based on semantic interpretations via pattern matching techniques
    * Ignores any poor syntax (or at least tries to)
    * Math markup (e.g., LaTeX, MathML) are not very expressive, sometimes bloated


## SRE in MathJax

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

* Accessibility extension pulls in SRE
* Speech (or Braille) with 
  * multiple reading rules and preference, 
  * different languages
  * [Play Area for speech](https://mathjax.github.io/MathJax-demos-web/speech-generator/convert-with-speech.html)
* Interactive Exploration
  * Highlighting, magnification, etc.
* All this is done using a semantic intepretation
  

## Generate Semantics

* Consider $ax^2+bx+c=0$. [SRE](https://github.com/zorkow/speech-rule-engine) rewrites this into
  [semantic term
  structure](https://zorkow.github.io/semantic-tree-visualiser/visualise.html?310000111100%3Cmath%3E%0A%20%20%3Cmi%3Ea%3C/mi%3E%0A%20%20%3Cmsup%3E%0A%20%20%20%20%3Cmi%3Ex%3C/mi%3E%0A%20%20%20%20%3Cmn%3E2%3C/mn%3E%0A%20%20%3C/msup%3E%0A%20%20%3Cmo%3E+%3C/mo%3E%0A%20%20%3Cmi%3Eb%3C/mi%3E%0A%20%20%3Cmi%3Ex%3C/mi%3E%0A%20%20%3Cmo%3E+%3C/mo%3E%0A%20%20%3Cmi%3Ec%3C/mi%3E%0A%20%20%3Cmo%3E%3D%3C/mo%3E%0A%20%20%3Cmn%3E0%3C/mn%3E%0A%3C/math%3E){target="_blank"}

```LaTeX
    ax^2+bx+c=0
```
```html
<math>
  <mi>a</mi>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <mi>b</mi>
  <mi>x</mi>
  <mo>+</mo>
  <mi>c</mi>
  <mo>=</mo>
  <mn>0</mn>
</math>
```

## Nemeth in SRE

Sponsored by Big Ten Academic Alliance{.small}
* Once [semantics](https://speech-rule-engine.github.io/semantic-tree-visualiser/visualise.html?110010111100%20%5Cvec%7B%5Cnabla%7D%20%5Ctimes%20%5Cvec%7BF%7D%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Cleft%28%20%5Cfrac%7B%5Cpartial%20F_z%7D%7B%5Cpartial%20y%7D%20-%20%5Cfrac%7B%5Cpartial%20F_y%7D%7B%5Cpartial%20z%7D%20%5Cright%29%20%5Cmathbf%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20+%20%5Cleft%28%20%5Cfrac%7B%5Cpartial%20F_x%7D%7B%5Cpartial%20z%7D%20-%20%5Cfrac%7B%5Cpartial%20F_z%7D%7B%5Cpartial%20x%7D%20%5Cright%29%20%5Cmathbf%7Bj%7D%0A%20%20%20%20%20%20%20%20%20%20+%20%5Cleft%28%20%5Cfrac%7B%5Cpartial%20F_y%7D%7B%5Cpartial%20x%7D%20-%20%5Cfrac%7B%5Cpartial%20F_x%7D%7B%5Cpartial%20y%7D%20%5Cright%29%20%5Cmathbf%7Bk%7D) is embedded speech and other alternative formats can be easily generated
* Tactile output, Abstraction, Summaries
  $$ \vec{\nabla} \times \vec{F} =
            \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i}
          + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j}
          + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
   $${#braille}

:::Standalone Click or focus on the formula and press <kbd>ENTER</kbd> to start, <kbd>Escape</kbd> to quit.
:::



## MathJax on the Server

* work on the server as easily as in the browser
* works in non-standard DOMs (e.g., markdown or PreTeXt)
* separable pipeline for
    * finding
    * converting
    * annotating
    * rendering math
* E.g., LaTeX in a document can be translated into SVG with speech or Braille annotation.

## 2D in Nemeth

* Nemeth for embossing requires 
  * Large fractions
  * Matrices, vectors
  * Equation systems
  * Cayley tables
* SRE can generate 2D output
* Uses same rules as for Braille display output during screen reading
* Applies abstract styling rules
* [Some sample output](https://speech-rule-engine.github.io/sre-tests/output/nemeth/Nemeth2D.html)


## Quality Assurance

* We developed a [Webapp for Nemeth Translation](https://nemeth-project.web.app/)
* Basic idea:
    * Proof read and correct automatically translated math
    * Easy reference to context via links source
    * Selection of semantically unique samples vs full list of expressions



## Some Challenging Examples

Nemeth is challenging to get right automatically, but sometimes automation is better:

* Subtlety of spaces:
   * $44\,352\,000$ is a single number and transcribes as ⠼⠲⠲⠒⠢⠆⠴⠴⠴ 
   * $(0110\,1110\,0110)$ is not a single number but a vector, hence ⠷⠼⠴⠂⠂⠴⠀⠼⠂⠂⠂⠴⠀⠼⠴⠂⠂⠴⠾
   * $(n, E) = (451{,}231)$ [The right hand side is not a single number](http://abstract.ups.edu/aata/exercises-crypt.html#grE) ⠷⠝⠠⠀⠠⠑⠾⠀⠨⠅⠀⠷⠲⠢⠂⠠⠀⠆⠒⠂⠾
* Context helps
    $$PAP^{-1} = B$$
    [is not an abbreviation](http://abstract.ups.edu/aata/section-sets-and-equivalence-relations.html#mDC): ⠠⠏⠠⠁⠠⠏⠘⠤⠂⠀⠨⠅⠀⠠⠃


## Some Future Additions

* [Self-voicing and synchronised highlighting](http://127.0.0.1:8081/MathJax/MathJax-dev/v3-lab.html?T00FF/TFFTF/011/FFF01131T/0/00011000000000000000000000000000000/000000000000000000000000000000100000//TTFFFTF/x%5E4%2By)
* Definitely 8-dot LaTeX Braille
* Maybe UEB?


## What about Diagrams?

* Automated generation of tactile graphics is challenging
* Advanced, bespoke content 
* Generated with LaTeX packages
* Many Standard techniques do not work

## Some Standard Examples

Screen reader accessibility

* [Chemistry](https://progressiveaccess.com/chemistry)
* [Flowcharts](https://progressiveaccess.com/flowcharts/examples/)
* [Data Visualisations](https://progressiveaccess.com/physics)
* [A sonification example](http://127.0.0.1:8081/Progressive/Production/diagram-explorer/samples/)

Also tactile, audio Tactile, etc.  But no Braille!
 

## Diagrams for Screenreading

* Once the graphics are understood we can do much more
* Diagrams can be handled via screen readers as well

:::Diagcess unitcircle Resources/pretext/roots-of-unity-noscale.svg Resources/pretext/roots-of-unity-noscale.xml minify
:::

:::Standalone Click or focus on the diagram and press <kbd>A</kbd> to start, <kbd>Escape</kbd> to quit, <kbd>Escape</kbd> to quit.
:::


## Tactile Diagrams

![Diagram bad for embosser](Resources/alexei/diagram_best.jpg){width=700}
{align="center"}

* Question: How to get them?
* Answer: Ask Alexei!
