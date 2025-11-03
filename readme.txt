# paste_me_not 

micro-library for addressing this confirmation ux gap: pasting is allowed for type-only inputs.

below, is the product specification.

## problem

many systems use "type x to confirm" for destructive actions.

however, paste can circumvent this.

represents gap in 'confirmation ux'

## solution

`paste_me_not`, a script-based solution which:

  - detects paste events in inputs where keystrokes are expected
  - does typing cadenece/rhythm listening on target inputs
  - disables paste function on inputs_to_protect
  - provides visual feedback when paste_attempted

## value

  - low overhead implementation
  - addresses security gap in confirmation ux
  - prevents accidental and automated bypasses

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