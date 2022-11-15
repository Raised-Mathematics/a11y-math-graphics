***Head

:::Icon logos/favicon.ico
:::CSS node_modules/normalize.css/normalize.css minify
:::CSS Resources/styles.css minify
:::Script Resources/scripts/mathjax-conf.js minify
:::Script https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js
:::Script Resources/scripts/cacc.js
:::Script Resources/scripts/cacc-conf.js minify
:::Script Resources/scripts/general-conf.js minify
:::

***

***TitleSlide

:::Title Automating the Math
:::Subtitle Transcribing with MathJax and SRE
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

## Background: Initial Problem

![Al Maneki reading a tactile math book](Resources/team/al-maneki-math.gif){width=500}
{style="float:right;"}

* No reliable, fast, and inexpensive way of producing Braille versions of mathematics texts.
* Several tools will produce convincing-looking, but incorrect output.
* Situation is particular bad for graduate texts
* And getting worse for research papers, etc.


## Overview

* Math document formats and their accessibility
  * PreTeXt and its accessibilty
* Accessible Math with MathJax/SRE
* Creating Tactile Hardcopies
  * From PreTeXt to Tactile
  * Nemeth with MathJax and Speech Rule Engine
* A word on graphics with screen reading


## Document formats with math support

* LaTeX: to [CTAN](https://www.ctan.org/) and beyond!
* Microsoft Word: OOXML, "UnicodeMath", LaTeX (limited, input only)
* Libre Writer: [ODT Math](https://help.libreoffice.org/7.0/en-US/text/smath/main0000.html?DbPAR=MATH), [custom ascii](https://help.libreoffice.org/7.0/en-US/text/smath/01/03090900.html?&DbPAR=MATH&System=WIN)
* Apple Pages: [blahtex, mathml](https://support.apple.com/en-us/HT202501)
* lightweight markup: Markdown (varying, by implementations/extensions), [asciidoc](https://asciidoctor.org/docs/what-is-asciidoc/) ([asciimath](http://asciimath.org/)), [wikitext](https://en.wikipedia.org/wiki/Help:Wikitext) ([TeX-like](https://en.wikipedia.org/wiki/Help:Displaying_a_formula))

## Accessibility of these formats

* Word formats
  * Raw: Pretty good accessibility in editor, Math depends on
    implementation/screen reader/formula editor!
  * As PDF: Good structural accessibility, but no math
* LaTeX needs to be compiled into PDF
  * Although LaTeX provides great structure that is lost in PDF
  * Math should be good but is lost too!
* Markup like Markdown/ HTML
  * Good structural accessibility
  * Math is accessible if handled right

Best option is often to move content to the web

## Conversion towards web formats

* [pandoc](https://pandoc.org/) - bi-directional "swiss army knife"
  * markdown, TeX, docx, and many many more
* LaTeX
  * [tex4ht](https://www.tug.org/tex4ht/) ([make4ht](https://github.com/michal-h21/make4ht))
  * [plastex](https://github.com/plastex/plastex)
  * [latexml](https://dlmf.nist.gov/LaTeXML/)
  * and many more...
* PDF
  * [pdf2htmlex](https://github.com/pdf2htmlEX/pdf2htmlEX)
  * [PDF.js](https://mozilla.github.io/pdf.js/)

Keep as much of the source as possible: **do not replace the LaTeX**

## Why is LaTeX important

* LaTeX notation is lingua franca in Math
* Also usable in informal communication like email
* Can be used on the web (github, stackoverflow, etc.)
* Every new Math editor ultimately allows LaTeX as input syntax
* LaTeX for the visually impaired
  * Some European countries teach LaTeX to VI stduents from grade 1
  * Little additional effort to learn
  * Easy to communicate with non-specailist teachers and sighted peers
  * Translation of code to 8-dot LaTeX Braille


## Creating Tactile Hardcopies

Translate textbooks automatically into Braille from source

* Little support in for most formats
* LaTeX package do not produce quality results

What do we do?

* Sources in PreTeXt
* Text into literary Braille with LibLouis
* Math into Nemeth with MathJax and Speech Rule Engine
* Graphics into tactile graphics via a multistep pipeline

## What is PreTeXt?

[PreTeXt](https://pretextbook.org/) is a an uncomplicated XML vocabulary for
open source textbooks, monographs, and research articles.

**Aims to bring together the good parts of HTML/Word with LaTeX.**

* Structure in XML
* Mathematics in LaTeX
* Graphics mainly in LaTeX
* [Over 100 individual projects](https://pretextbook.org/catalog.html): 
  * mainly Math, some CS and engineering
  * one music theory, one university writing handbook

**In our context:**{style="color:red"} provides free and well curated content

## PreTeXt and Accessibility

* One source, many outputs:
  * print, PDF, web, EPUB, Jupyter Notebooks, ...
* HTML output is accessible
  * Mathematics is in LaTeX
  * Rendered with MathJax
  * Made accessible using Speech Rule Engine

## What is MathJax?

* [MathJax](http://www.mathjax.org) is an open-source JavaScript library for
  rendering Mathematics in all browsers
* Can take {\LaTeX}, AsciiMath, and MathML as input
* Generates browser output, e.g. HTML/CSS, SVG
* MathJax is the de facto rendering solution of most Mathematics on the web
* Standard Maths rendering solution for many publishers
* Around for over 10 years, lastest version 3.1 released Aug 2020

**In our context:**{style="color:red"} translation of LaTeX to Nemeth Braille

## Speech Rule Engine

* Javascript library for translating Math into Speech [available at github](https://github.com/zorkow/speech-rule-engine)
* Only Math speech solution in JavaScript: Runs in browser, command line, as node module.
* Speech solution for: ChromeVox, MathJax, EquatIO, MathLive, ...
* Based on semantic interpretations via pattern matching techniques
    * Ignores any poor syntax (or at least tries to)
    * Math markup (e.g., LaTeX, MathML) are not very expressive, sometimes bloated


## SRE in MathJax

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

* SRE is pulled into MathJax
* Speech (or Braille) with 
  * multiple reading rules and preference, 
  * different languages
  * [Play Area for speech](https://mathjax.github.io/MathJax-demos-web/speech-generator/convert-with-speech.html)
* Interactive Exploration
  * Highlighting, magnification, etc.
* All this is done using a semantic interpretation


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

## Generate Speech

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

* Math voiced via a screen reader
* [Autovoicing](http://127.0.0.1:8081/v3-lab.html?T00FF/TFFTF/011/FFF01131T/0/0001100000000000000000000000000000000/00000000000000000000000000000001000000//TTFFFTF/x%20%3D%20%7B-b%20%5Cpm%20%5Csqrt%7Bb%5E2-4ac%7D%20%5Cover%202a%7D)

## Speech

[Play Area for speech](https://mathjax.github.io/MathJax-demos-web/speech-generator/convert-with-speech.html)

* Multiple reading rules and preferences that can be swapped
  * MathSpeak, ClearSpeak, (ChromeVox)
  * Summarisation, Navigation info
* 12 different locales
  * English, German, Spanish, French, Italian, ...
* Tactile formats
  * 8-dot LaTeX Braille (German, Slovenian, ...)
  * Nemeth (linear)
  * Nemeth 2D


## Nemeth in SRE

Sponsored by Big Ten Academic Alliance{.small}
* Once semantics is embedded speech and other alternative formats can be easily generated
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
   * $(n, E) = (451{,}231)$ [The right hand side is not a single number](http://abstract.ups.edu/aata/exercises-crypt.html#RZE) ⠷⠝⠠⠀⠠⠑⠾⠀⠨⠅⠀⠷⠲⠢⠂⠠⠀⠆⠒⠂⠾
* Context helps
    $$PAP^{-1} = B$$
    [is not an abbreviation](http://abstract.ups.edu/aata/section-sets-and-equivalence-relations.html#mDC): ⠠⠏⠠⠁⠠⠏⠘⠤⠂⠀⠨⠅⠀⠠⠃


## Voicing Complex Content

  $$
  \require{bussproofs}
  \begin{prooftree}
  \AxiomC{}
  \RightLabel{$Hyp^{1}$}
  \UnaryInfC{$P$}
  \AXC{$P\to Q$}
  \RL{$\to_E$}
  \BIC{$Q^2$}
  \AXC{$Q\to R$}
  \RL{$\to_E$}
  \BIC{$R$}
  \AXC{$Q$}
  \RL{Rit$^2$}
  \UIC{$Q$}
  \RL{$\wedge_I$}
  \BIC{$Q\wedge R$}
  \RL{$\to_I^1$}
  \UIC{$P\to Q\wedge R$}
  \end{prooftree}
  $$

:::Standalone Click or focus on the formula and press <kbd>ENTER</kbd> to start, <kbd>Escape</kbd> to quit.
:::

* Try to express this in MathML

## What about Diagrams?

* Automated generation of tactile graphics is challenging
* Advanced, bespoke content 
* Generated with LaTeX packages
* Many Standard techniques do not work

[Some examples from Abstract Algebra](http://abstract.ups.edu/aata/aata.html)
* [Roots of Unity](http://abstract.ups.edu/aata/cyclic-section-mult-group-c.html#ihV)
* [Fairly easy relations](http://abstract.ups.edu/aata/ssets-ection-sets-and-equivalence-relations.html#Ilt)
* [Large graphics with interspersed math](http://abstract.ups.edu/aata/groups-section-mod-n-sym.html#lqf)
* [Lattices](http://abstract.ups.edu/aata/galois-section-fund-theorem-galois-theory.html#nkw), [Category theory](http://abstract.ups.edu/aata/galois-section-fund-theorem-galois-theory.html#QwZ), etc.



## Processing Labels

* Easy: Separate Text vs Math
  * PreTeXt already does this for us: Text vs LaTeX
  * Translate Text with Liblouis
  * Translate Math with SRE 
* Hard: Fitting tactile labels into graphic
* Hard: Understanding graphical content


## Processing Labels

* Easy: Separate Text vs Math
  * PreTeXt already does the for us: Text vs LaTeX
  * Translate Text with Liblouis
  * Translate Math with SRE 
* Hard: Fitting labels into graphic
  * Braille uses different space than text
  * Labels are measured
  * Bounding boxes are created and aligned


## Example: Latex to Tactile

Source: [Tom Judson, Abstract Algebra: Theory and Application](http://abstract.ups.edu/sage-aata.html)
{.source}

![Cyclic Roots of Unity.](Resources/pretext/cyclic-roots-unity.svg)
{align="center"}


## Workflow Example

* Creating Braille bounding boxes in the diagram

![Unit circle with Braille bounding boxes](Resources/pretext/roots-of-unity-boxes.svg)
{align="center"}


## Workflow Example

* Fitting ASCII Braille into bounding boxes

![Unit circle with Ascii Braille](Resources/pretext/roots-of-unity-brf.svg)
{align="center"}


## Workflow Example

* Full rendering in Unicode Braille Font

![Unit circle with Ascii Braille](Resources/pretext/roots-of-unity-braille.svg)
{align="center"}


## Diagrams for Screenreading

* Once the graphics are understood we can do much more
* Diagrams can be handled via screen readers as well
* Goal is to have them all similar to our [chemistry at progacc.com/chemistry](https://progacc.com/chemistry)

:::Diagcess unitcircle Resources/pretext/roots-of-unity-noscale.svg Resources/pretext/roots-of-unity-noscale.xml minify
:::

:::Standalone Click or focus on the diagram and press <kbd>A</kbd> to start, <kbd>Escape</kbd> to quit, <kbd>Escape</kbd> to quit.
:::


## Talking to the Embosser

* The entire image is measured and scaled as much as possible to fit onto a page
* Good-looking image on the screen frequently does not look good embossed
* Result is usually suboptimal
    * Scaling of graphics should not apply to Braille
    * Embosser do not work well with SVG
* Conversion to PDF necessary
* Fonts need to be explicitly un-embedded


## Example: Poorly embossed

![Diagram bad for embosser](Resources/alexei/diagram_bad.jpg){width=700}
{align="center"}

* Diagram in PDF with fonts

## Example: Legibly embossed

![Diagram bad for embosser](Resources/alexei/diagram_better.jpg){width=700}
{align="center"}

* Unembedded fonts

## Example: Best solution

![Diagram bad for embosser](Resources/alexei/diagram_best.jpg){width=700}
{align="center"}

* Smoothing applied

## Some Conclusions

* Making Math accessible on the web is quite straightforward
  * Make sure to work from sources
  * Do not replace LaTeX with MathML!
* MathJax v4 is about to be released
* Currently Nemeth Braille:
  * Adding other variants, e.g. UEB
  * Definitely 8-dot LaTeX Braille
* Missing parts: 
    * Intelligent Linebreaking
    * Form factors and Reflow
* Diagrams are really exciting... **More tomorrow!**
