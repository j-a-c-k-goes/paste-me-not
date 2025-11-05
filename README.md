# paste_me_not

micro-library to prevent paste in type-only confirmation inputs.

this addresses a confirmation ux gap.

## problem

many systems use "type x to confirm" for destructive actions.

however, paste circumvents this. and creates a bypass.

## solution

`paste_me_not` blocks paste events on designated inputs, forcing actual typing for confirmation.

## value

  - low overhead implementation
  - addresses security gap in confirmation ux
  - prevents accidental and automated bypasses

## usage

### cdn (recommended)
```html
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@latest/dist/paste-me-not.min.js"></script>
```

### javascript
```javascript
// protect a confirmation input
pasteMeNot.protect('#confirm-input');
```

## demo

**local:** open `demo/index.html` to see it in action.

**live demos:**
- [documentation](https://username.github.io/paste-me-not/docs/)
- [basic demo](https://username.github.io/paste-me-not/demo/index.html)
- [bypass testing](https://username.github.io/paste-me-not/demo/bypass-test.html)
- [accessibility demo](https://username.github.io/paste-me-not/demo/accessibility-test.html)

## installation

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@latest/dist/paste-me-not.min.js"></script>
```

### NPM
```bash
npm install paste-me-not
```

## features

- **paste blocking**: ctrl+v, right-click, shift+insert
- **visual feedback**: animated flash messages  
- **cadence detection**: automated typing prevention
- **accessibility mode**: screen reader support
- **comprehensive inputs**: input, textarea, contenteditable, aria
- **error handling**: graceful degradation
- **zero dependencies**: pure javascript


## design

* core enforcer
  - `paste_me_not` validation enforcer

* demo site proof-of-concept
  - demo html page
  - bypass attempt tests
  - visual feedback for blocked attempts

* cadence detection
  - typing:paste detection accuracy

* package distribution
  - npm distribution
  - cdn distribution
  - repo release paste_me_not_v0.1.0.zip
  - open-source license for usage

## challenges

* accessibility concerns (users who are paste-dependent)
  - factor in accessibility mode triggering

* false positives in cadence detection
  - monitor in proof-of-concept
  - should be lower surface b/c enforcer only works on taret inputs (not an omni listener)

* browser compatibility across paste event handling
  - handle for chromium-based browsers and edge
  - limitations addressed in proof-of-concept