# Sourav Roy — research portfolio

**Live public website:** https://souravfrp.github.io/

This repository is the source for my public research portfolio and HTML CV. **As of 26 October 2026**, I checked the published main branches of my eight public repositories: seven research/software projects plus this website source. The homepage links to all eight, describes reproducible milestones and their limitations, and features the [interactive random-walk research website](https://souravfrp.github.io/Experiments-on-Random-Walks/). Project code, experimental records, figures and detailed methodological limitations remain in their respective repositories.

## Projects represented on the live site

| Repository | Verified milestone | Important boundary |
| --- | --- | --- |
| [Quant AI Market Lab](https://github.com/Souravfrp/quant-ai-market-lab) | Completed historical `v1.0.0` eight-ETF quantitative market and portfolio study | Historical evidence, not a live investment strategy |
| [Quant Market Lab II](https://github.com/Souravfrp/quant-market-lab-ii) | October baseline evaluated; fixed-cutoff EWMA forecasts and return autocorrelation diagnostics published | November/December target outcomes remain pending in the latest published report |
| [Payment Guard](https://github.com/Souravfrp/payment-guard) | **Completed** chronological synthetic fraud-review ranking experiment: frozen March–April holdout, XGBoost versus logistic, paired review budgets, calibration and feature ablation; **186 local tests passed** | Not real-bank/production performance; synthetic category/type provenance unverified |
| [ResearchAudit](https://github.com/Souravfrp/research-audit) | Rule-based Python audit (34 files, 52 test methods), isolated transaction-cost checks, locally executed LangChain.js/Ollama/Qwen3 keyword-RAG and citation-validation utilities (13 JavaScript tests passed locally) | Citation validation remains narrow; no embedding retrieval, four-agent implementation, independent detection-accuracy benchmark or full backtest reproduction |
| [Experiments on Random Walks](https://github.com/Souravfrp/Experiments-on-Random-Walks) · [Live research website](https://souravfrp.github.io/Experiments-on-Random-Walks/#run-experiment) | Five cube walks in explicit and optimized Python/C++17; dimension-1–10 comparison figures, an n=20 example, empirical diagnostics and browser-side interactive experiments | Empirical checkpoints do not certify total-variation mixing; browser JavaScript computation is not a native Python/C++ benchmark |
| [Mixed Volume Approximations](https://github.com/Souravfrp/estimates-of-mixed-volume-components) | Thesis-connected Python/C++ random-walk/numerical sampling experiments, exact cube comparisons and pilot timings | Finite experiments do not certify theoretical oracle/mixing/accuracy guarantees |
| [RSA Educational](https://github.com/Souravfrp/rsa-educational) | Preserved 2019 educational RSA implementation and tested 2026 revision | Textbook educational example, not secure production cryptography |
| [Portfolio website source](https://github.com/Souravfrp/Souravfrp.github.io) | HTML/CSS/JavaScript research and CV website, with an eight-repository directory and original research links | Presentation of documented research, not a separate empirical validation |

## Selected research milestones

### ResearchAudit — local LLM, retrieval and citation milestone (26 October 2026)

The [ResearchAudit baseline](https://github.com/Souravfrp/research-audit) screened 34 frozen Python files, reviewed ten candidate findings, and recorded 52 passing Python test methods. For the later [local LangChain.js/Ollama/Qwen3 workflow](https://github.com/Souravfrp/research-audit/tree/main/integrations/langchain-ollama-js), keyword-based RAG retrieved passages from three allowlisted local source files with line ranges and SHA-256 fingerprints. A completed [local trial record](https://github.com/Souravfrp/research-audit/blob/main/docs/local_llm_trial_2026-10-24.md) documents both correct identification of two previously known transaction-cost input-validation gaps and flaws in Qwen3's citations and interpretation. Thirteen JavaScript tests passed locally for retrieval and selected citation checks. This does **not** establish broad mathematical correctness, independently discovered defects or a built four-agent system.


### Experiments on Random Walks — added 23 October 2026

The [GitHub research repository](https://github.com/Souravfrp/Experiments-on-Random-Walks) contains explicit and optimized implementations of five Markov chains on the centred n-dimensional cube, mathematical explanations, documented Mac measurements and comparison graphs for n=1,…,10. Its [research website](https://souravfrp.github.io/Experiments-on-Random-Walks/) offers two separate interfaces: running a new, local JavaScript experiment in the visitor's browser and searching previously curated numerical records. Visitors can inspect the implementation or explore the empirical results directly. The browser engine is independent of the native Python and C++ code, and its results do not constitute proof of total-variation mixing.

### Payment Guard — evaluated synthetic holdout

The [final research account](https://github.com/Souravfrp/payment-guard/blob/main/docs/final_holdout_first_results.md) reports **253,190** synthetic March–April 2026 test transactions and **278** positive labels. At the frozen 1% review budget (**2,532** review slots/model), XGBoost captured **267** positives and logistic regression **254** (**+13** captured labels; 96.04% versus 91.37% recall). Logistic led at the smaller 0.1% budget (225 versus 222 positives). The [recruiter-facing interpretation](https://github.com/Souravfrp/payment-guard/blob/main/docs/what_this_project_can_and_cannot_claim.md) clearly separates demonstrated skills/results from unsupported production or real-world claims.

The homepage includes seven research/software project cards and an eight-repository GitHub directory (including this portfolio source), project statuses, scope/limitation statements, evidence links and representative figures, with separate direct links to the Random Walks research website and the GitHub code. The CV has been refreshed to foreground my Computer and System Sciences and Mathematics degrees, recent computational random-walk work and quantitative research direction. Its existing HTML typography and A4 PDF generation workflow are retained.

## Homepage research navigation

The homepage introduces the transition as **Mathematics & Algorithms → Quantitative Research & Data Science** and retains the detailed academic background, with the 2021–2026 Computer and System Sciences master's degree before the 2019–2021 Mathematics master's degree. Short navigation menus let visitors jump directly to project cards, repository-directory entries, theoretical papers and computational research.

The shared [Computational Convex Geometry experiment archive](https://souravfrp.github.io/Experiments-on-Random-Walks/) now offers **two distinct pages**: [Experiments on Random Walks](https://souravfrp.github.io/Experiments-on-Random-Walks/) and [Approximation of Mixed Volumes](https://souravfrp.github.io/Experiments-on-Random-Walks/mixed-volumes.html). The second page is a limited independent-sampling demonstration, not the full thesis oracles; the links to both original source repositories remain available.

## Website maintenance

- Website markup and project evidence: [`index.html`](index.html)
- Site styles and mobile layout: [`style.css`](style.css)
- Current print source for the downloadable CV PDF: [`cv.html`](cv.html)
- The downloadable PDF CV is generated from `cv.html` by GitHub Actions and validated before commit; the original research report PDFs remain preserved.
- GitHub Pages serves this repository through its existing deployment. Changes to code on `main` need to complete publication before they appear on the live URL.

The 26 October update adds the completed local LLM/RAG and citation-testing milestone to the existing research summaries, while retaining the website's original layout and CV publication workflow. This is a **portfolio presentation update, not a change to the underlying research experiments**. Frozen holdouts, forward forecasts, verification records and historical reports have not been modified.
