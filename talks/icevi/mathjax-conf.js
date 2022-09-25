MathJax = {
  loader: {load: ['a11y/explorer'],
           paths: {sre: 'https://cdn.jsdelivr.net/npm/speech-rule-engine@4.1.0-beta.2/lib/mathmaps/'}},
  tex: {inlineMath: [['$', '$']]},
  options: {
    renderActions: {
      assistiveMml: [],
      setExplorerValues: [199,
                          (doc) => {for (const math of doc.math) {MathJax.config.setExplorer(math, doc)}},
                          (math, doc) => MathJax.config.setExplorer(math, doc)
                         ]
    }
  },
  currentMathFocus: null,
  setExplorer(math, doc) {
    math.typesetRoot.addEventListener('focusin', function () {
      const braille = this.parentNode.id === 'braille' ||
            (this.parentNode.parentNode && this.parentNode.parentNode.id === 'braille');
      MathJax.config.currentMathFocus = this;
      const pool = doc.menu.menu.variablePool;
      if (braille) {
        pool.lookup('braille').setValue(true);
        pool.lookup('viewBraille').setValue(true);
        pool.lookup('subtitles').setValue(false);
      } else {
        pool.lookup('braille').setValue(false);
        pool.lookup('viewBraille').setValue(false);
        pool.lookup('subtitles').setValue(true);
      }
    });
  }
};
