***Head

:::Icon logos/favicon.ico
:::CSS ./node_modules/normalize.css/normalize.css minify
:::CSS ./resources/styles.css minify
:::Script ./resources/scripts/mathjax-conf.js minify
:::Script https://cdn.jsdelivr.net/npm/mathjax@3.1.0/es5/tex-mml-chtml.js
:::Script ./resources/scripts/cacc.js minify
:::Script ./resources/scripts/cacc-conf.js minify
:::Script ./resources/scripts/general-conf.js minify
:::

***

***TitleSlide

:::Title Maths and Accessibility
:::Subtitle MathJax, Speech Rule Engine and the Web
:::
:::Author Volker Sorge
:::

***Affiliations
:::Affiliation
University of Birmingham, UK
![University of Birmingham Crest](./resources/logos/crest-new.jpg)
[cs.bham.ac.uk/~vxs](https://www.cs.bham.ac.uk/~vxs)
:::


:::Affiliation
MathJax Consortium
![MathJax Logo](./resources/logos/badge-square2.png)
[mathjax.org](https://mathjax.org)
:::

:::Affiliation
Progressive Accessiblity Solutions
![Progressive Access Logo](./resources/logos/logo2-small.png)
[progacc.com](https://progressiveaccess.com)
:::


*******************


## What is MathJax 

* [MathJax](https://mathjax.org) is a JavaScript library for rendering Mathematics in all browsers
* **MathJax IS NOT MathML!** Takes LaTeX, AsciiMath, MathML
* Generates browser output, e.g. HTML/CSS, SVG
* De facto rendering solution for most Mathematics on the web
* Can also be run fully serverside
* Provides accessibility extension

## Accessibility with Speech Rule Engine

* MathJax's Accessibility extension provided
  by [Speech Rule Engine](https://speechruleengine.org)
* [Open source library](https://github.com/zorkow/speech-rule-engine){target="_blank"}
  for translating Math to speech
* Initially implemented in the context of ChromeVox
* Only Math speech solution in JavaScript
* Speech solution for: ChromeVox, MathJax, EquatIO, MathLive, ...
* Runs in browser, command line, as node module.


## Example: Interactivity and Screenreading

* Listen to the quadratic formula
$$
   x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
* Rendered with MathJax
  * Source in LaTeX
  * One extra line of HTML
* Accessibility "built-in"

:::Standalone Click or focus on the formula and press <kbd>ENTER</kbd> to start, <kbd>Escape</kbd> to quit.
:::


## Enriching the Representation

* Accessibility requires one or multiple alternative views
* Math markup (e.g., LaTeX, MathML) are not very expressive
* SRE generates Semantics annotations automatically
* SRE reinterprets the syntax
* Fully disassembles the symbol structure
* Reassembles a semantic intepretation bottom-up
* Applies a number of (partially selectable) heuristics


## Embedding Semantics

Rewrite 
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
internally into [semantically improved term structure](https://zorkow.github.io/semantic-tree-visualiser/visualise.html?310000111100%3Cmath%3E%0A%20%20%3Cmi%3Ea%3C/mi%3E%0A%20%20%3Cmsup%3E%0A%20%20%20%20%3Cmi%3Ex%3C/mi%3E%0A%20%20%20%20%3Cmn%3E2%3C/mn%3E%0A%20%20%3C/msup%3E%0A%20%20%3Cmo%3E+%3C/mo%3E%0A%20%20%3Cmi%3Eb%3C/mi%3E%0A%20%20%3Cmi%3Ex%3C/mi%3E%0A%20%20%3Cmo%3E+%3C/mo%3E%0A%20%20%3Cmi%3Ec%3C/mi%3E%0A%20%20%3Cmo%3E%3D%3C/mo%3E%0A%20%20%3Cmn%3E0%3C/mn%3E%0A%3C/math%3E)


## Alternative Formats for Math

* Tactile output, Abstraction, Summaries
  $$ \vec{\nabla} \times \vec{F} =
            \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i}
          + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j}
          + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
   $${#braille}
:::Standalone Click or focus on the formula and press <kbd>ENTER</kbd> to start, <kbd>Escape</kbd> to quit.
:::

Other Formats:{.left}
* General E-books, Epub3, etc.
* 3D printing and embossing
* Fulltext translation to Braille, e.g., [PreText to Nemeth](https://pretextbook.org/)
* But also computational elements for JupyterLab, Sage, R, Maple, MatLab
* Subtitling, e.g., via [automatic text generation](https://mathjax.github.io/MathJax-demos-web/speech-generator/convert-with-speech.html)


## What about Diagrams

* Diagrams can be handled very similarly

:::Diagcess unitcircle ./resources/unit-circle/roots-of-unity-noscale.svg ./resources/unit-circle/roots-of-unity-noscale.xml minify
:::

:::Standalone Click or focus on the diagram and press <kbd>A</kbd> to start, <kbd>Escape</kbd> to quit, <kbd>Escape</kbd> to quit.
:::

* We can work with: 
    * Good formats, e.g., well structured SVG
    * Reasonable Semantics, both in structure and annotation
    * Generate alternative formats from single source

## Conclusions


* **Do not consider this a PDF Accessibility Problem only!**
