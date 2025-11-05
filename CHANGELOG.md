# changelog

changes to `paste-me-not` are documented in this file.

## [0.1.2] - 2025 november 5

### added
- initial paste-me-not library (custom pml license)
- core paste blocking functionality for confirmation inputs
- visual feedback system with animations
- typing cadence detection for automated input prevention
- comprehensive bypass attempt blocking (keyboard shortcuts, drag & drop, context menu)
- accessibility mode toggle for screen reader users
- support for contenteditable elements and aria roles
- cross-browser compatibility (chrome/edge primary, firefox partial)
- error handling and graceful degradation
- npm package distribution
- cdn support via jsdelivr and unpkg
- complete documentation suite

### features
- **paste blocking**: prevents ctrl+v, right-click paste, shift+insert
- **visual feedback**: red flash messages with maximum z-index positioning
- **cadence detection**: identifies suspiciously fast typing patterns
- **accessibility**: toggle mode for users who need paste functionality
- **input validation**: supports input, textarea, contenteditable, aria textbox
- **error resilience**: try/catch blocks with fallback mechanisms
- **zero dependencies**: pure javascript implementation

### browser support
- chrome 120+ [TESTED]
- edge 120+ [TESTED]
- firefox 120+ (partial support)
- safari 17+ (untested)

### documentation
- api reference
- usage guide with examples
- integration guide for react/vue/angular
- troubleshooting guide
- browser compatibility report
- cdn usage instructions