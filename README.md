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

```javascript
// protect a confirmation input
pastemenot.protect('#confirm-input');
```

## demo

open `demo/index.html` to see it in action.

## status

phase 1: foundation (mvp) - in development

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
  - factor in accessibility mode and how this can be triggered

* false positives in cadence detection
  - monitor in proof-of-concept
  - should be lower surface b/c enforcer only works on taret inputs (not an omni listener)

* browser compatibility across paste event handling
  - handle for chromium-based browsers (covers a few browsers) and edge
  - present limitations in proof-of-concept