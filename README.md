# Sourav Roy — research portfolio

**Live public website:** https://souravfrp.github.io/

This is the source for my public portfolio and HTML CV. I reconciled six existing project repositories against their published `main` branches on 21 October 2026. On 23 October 2026, I added my [Experiments on Random Walks](https://github.com/Souravfrp/Experiments-on-Random-Walks) research project and its [interactive experiment website](https://souravfrp.github.io/Experiments-on-Random-Walks/). The homepage now includes seven project entries and a directory of eight public repositories, including this portfolio's own source. Research results, limitations, code, charts and source references remain in their respective project repositories.

## Projects represented on the live site

| Repository | Verified milestone | Important boundary |
| --- | --- | --- |
| [Quant AI Market Lab](https://github.com/Souravfrp/quant-ai-market-lab) | Completed historical `v1.0.0` eight-ETF quantitative market and portfolio study | Historical evidence, not a live investment strategy |
| [Quant Market Lab II](https://github.com/Souravfrp/quant-market-lab-ii) | October baseline evaluated; fixed-cutoff EWMA forecasts and return autocorrelation diagnostics published | November/December target outcomes remain pending in the latest published report |
| [Payment Guard](https://github.com/Souravfrp/payment-guard) | **Completed** chronological synthetic fraud-review ranking experiment: frozen March–April holdout, XGBoost versus logistic, paired review budgets, calibration and feature ablation; **186 local tests passed** | Not real-bank/production performance; synthetic category/type provenance unverified |
| [ResearchAudit](https://github.com/Souravfrp/research-audit) | Rule-based AST screening baseline (34 files), isolated transaction-cost claim checks and 52 test methods | Multi-agent system, full backtest reproduction and independent detection accuracy remain open |
| [Experiments on Random Walks](https://github.com/Souravfrp/Experiments-on-Random-Walks) · [Live research website](https://souravfrp.github.io/Experiments-on-Random-Walks/#run-experiment) | Five cube walks in explicit and optimized Python/C++17; dimension-1–10 comparison figures, an n=20 example, empirical diagnostics and browser-side interactive experiments | Empirical checkpoints do not certify total-variation mixing; browser JavaScript computation is not a native Python/C++ benchmark |
| [Mixed Volume Approximations](https://github.com/Souravfrp/estimates-of-mixed-volume-components) | Thesis-connected Python/C++ random-walk/numerical sampling experiments, exact cube comparisons and pilot timings | Finite experiments do not certify theoretical oracle/mixing/accuracy guarantees |
| [RSA Educational](https://github.com/Souravfrp/rsa-educational) | Preserved 2019 educational RSA implementation and tested 2026 revision | Textbook educational example, not secure production cryptography |
| [Portfolio website source](https://github.com/Souravfrp/Souravfrp.github.io) | This repository: `index.html`, `style.css`, `cv.html` and preserved academic PDFs | The downloadable PDF CV was regenerated automatically from the current HTML CV and passed the site's PDF validation checks |

## Selected research milestones

### Experiments on Random Walks — added 23 October 2026

The [GitHub research repository](https://github.com/Souravfrp/Experiments-on-Random-Walks) contains explicit and optimized implementations of five Markov chains on the centred n-dimensional cube, mathematical explanations, documented Mac measurements and comparison graphs for n=1,…,10. Its [research website](https://souravfrp.github.io/Experiments-on-Random-Walks/) offers two separate interfaces: running a new, local JavaScript experiment in the visitor's browser and searching previously curated numerical records. Visitors can inspect the implementation or explore the empirical results directly. The browser engine is independent of the native Python and C++ code, and its results do not constitute proof of total-variation mixing.

### Payment Guard — evaluated synthetic holdout

The [final research account](https://github.com/Souravfrp/payment-guard/blob/main/docs/final_holdout_first_results.md) reports **253,190** synthetic March–April 2026 test transactions and **278** positive labels. At the frozen 1% review budget (**2,532** review slots/model), XGBoost captured **267** positives and logistic regression **254** (**+13** captured labels; 96.04% versus 91.37% recall). Logistic led at the smaller 0.1% budget (225 versus 222 positives). The [recruiter-facing interpretation](https://github.com/Souravfrp/payment-guard/blob/main/docs/what_this_project_can_and_cannot_claim.md) clearly separates demonstrated skills/results from unsupported production or real-world claims.

The homepage includes an eight-repository source directory, project statuses, scope/limitation statements, evidence links and representative figures, with separate direct links to the Random Walks research website and the GitHub code. The site's HTML CV and **`Sourav_Roy_CV.pdf`** were refreshed for Payment Guard. The GitHub Actions PDF workflow passed its A4, text, hyperlink and safe-margin checks.

## Homepage research navigation

The homepage introduces the transition as **Mathematics & Algorithms → Quantitative Research & Data Science** and retains the detailed academic background, with the 2021–2026 Computer and System Sciences master's degree before the 2019–2021 Mathematics master's degree. Short navigation menus let visitors jump directly to project cards, repository-directory entries, theoretical papers and computational research.

The shared [Computational Convex Geometry experiment archive](https://souravfrp.github.io/Experiments-on-Random-Walks/) now offers **two distinct pages**: [Experiments on Random Walks](https://souravfrp.github.io/Experiments-on-Random-Walks/) and [Approximation of Mixed Volumes](https://souravfrp.github.io/Experiments-on-Random-Walks/mixed-volumes.html). The second page is a limited independent-sampling demonstration, not the full thesis oracles; the links to both original source repositories remain available.

## Website maintenance

- Website markup and project evidence: [`index.html`](index.html)
- Site styles and mobile layout: [`style.css`](style.css)
- Current HTML CV: [`cv.html`](cv.html)
- The downloadable PDF CV is generated from `cv.html` by GitHub Actions and validated before commit; the original research report PDFs remain preserved.
- GitHub Pages serves this repository through its existing deployment. Changes to code on `main` need to complete publication before they appear on the live URL.

This is a **portfolio presentation update, not a change to the underlying research experiments**. Frozen holdouts, forward forecasts, verification records and historical reports have not been modified.
