# Sourav Roy — research portfolio

**Live public website:** https://souravfrp.github.io/

This is the source for my public portfolio and HTML CV. I reconciled the project descriptions below with the **`main` branch of each of my six project repositories on 21 October 2026**. This portfolio is the seventh public repository. Research results, limitations, code, charts and source references remain in the project repositories.

## Projects represented on the live site

| Repository | Verified milestone | Important boundary |
| --- | --- | --- |
| [Quant AI Market Lab](https://github.com/Souravfrp/quant-ai-market-lab) | Completed historical `v1.0.0` eight-ETF quantitative market and portfolio study | Historical evidence, not a live investment strategy |
| [Quant Market Lab II](https://github.com/Souravfrp/quant-market-lab-ii) | October baseline evaluated; fixed-cutoff EWMA forecasts and return autocorrelation diagnostics published | November/December target outcomes remain pending in the latest published report |
| [Payment Guard](https://github.com/Souravfrp/payment-guard) | **Completed** chronological synthetic fraud-review ranking experiment: frozen March–April holdout, XGBoost versus logistic, paired review budgets, calibration and feature ablation; **186 local tests passed** | Not real-bank/production performance; synthetic category/type provenance unverified |
| [ResearchAudit](https://github.com/Souravfrp/research-audit) | Rule-based AST screening baseline (34 files), isolated transaction-cost claim checks and 52 test methods | Multi-agent system, full backtest reproduction and independent detection accuracy remain open |
| [Mixed Volume Approximations](https://github.com/Souravfrp/estimates-of-mixed-volume-components) | Thesis-connected Python/C++ random-walk/numerical sampling experiments, exact cube comparisons and pilot timings | Finite experiments do not certify theoretical oracle/mixing/accuracy guarantees |
| [RSA Educational](https://github.com/Souravfrp/rsa-educational) | Preserved 2019 educational RSA implementation and tested 2026 revision | Textbook educational example, not secure production cryptography |
| [Portfolio website source](https://github.com/Souravfrp/Souravfrp.github.io) | This repository: `index.html`, `style.css`, `cv.html` and preserved academic PDFs | The pre-existing downloadable PDF CV is an earlier snapshot; the HTML CV reflects the latest Payment Guard milestone |

## Payment Guard: latest merged research

The [final research account](https://github.com/Souravfrp/payment-guard/blob/main/docs/final_holdout_first_results.md) reports **253,190** synthetic March–April 2026 test transactions and **278** positive labels. At the frozen 1% review budget (**2,532** review slots/model), XGBoost captured **267** positives and logistic regression **254** (**+13** captured labels; 96.04% versus 91.37% recall). Logistic led at the smaller 0.1% budget (225 versus 222 positives). The [recruiter-facing interpretation](https://github.com/Souravfrp/payment-guard/blob/main/docs/what_this_project_can_and_cannot_claim.md) clearly separates demonstrated skills/results from unsupported production or real-world claims.

The homepage includes a seven-repository source directory, project statuses, scope/limitation statements, evidence links and representative figures. The site's HTML CV was refreshed for Payment Guard, but **the existing `Sourav_Roy_CV.pdf` was not regenerated** and is marked as an earlier snapshot rather than represented as the current CV.

## Website maintenance

- Website markup and project evidence: [`index.html`](index.html)
- Site styles and mobile layout: [`style.css`](style.css)
- Current HTML CV: [`cv.html`](cv.html)
- Archived downloadable PDF CV and research reports are preserved as-is.
- GitHub Pages serves this repository through its existing deployment. Changes to code on `main` need to complete publication before they appear on the live URL.

This is a **portfolio presentation update, not a change to the underlying research experiments**. Frozen holdouts, forward forecasts, verification records and historical reports have not been modified.
