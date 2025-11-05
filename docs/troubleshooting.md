# troubleshooting guide

## common issues

### paste still works
**problem:** protection enabled yet pasting still a performable action..

**solutions:**
1. check if accessibility mode is enabled:
   ```javascript
   console.log(pasteMeNot.accessibilityMode); // Should be false
   ```

2. verify selector is correct:
   ```javascript
   // make sure elements exist
   console.log(document.querySelectorAll('#your-selector'));
   ```

3. check browser compatibility:
   - firefox: may have partial support
   - safari: untested - may need additional css

**workaround for firefox:**
```css
.protected-input {
  user-select: none;
  -moz-user-select: none;
}
```

### visual feedback not showing
**problem:** 'paste blocked' yet no flash message (visual feedback event).

**solutions:**
1. check css animations are enabled:
   ```css
   @keyframes fadeInOut {
     0% { opacity: 0; transform: translateY(-10px); }
     20% { opacity: 1; transform: translateY(0); }
     80% { opacity: 1; transform: translateY(0); }
     100% { opacity: 0; transform: translateY(-10px); }
   }
   ```

2. verify z-index conflicts:
   ```javascript
   // messages use z-index: 2147483647 (maximum)
   // should appear above all other elements
   ```

### cadence detection too sensitive
**problem:** normal typing triggers "suspicious" warnings.

**solution:**
```javascript
// increase threshold for more lenient detection
pasteMeNot.cadenceThreshold = 100; // default is 50ms
```

### accessibility mode not working
**problem:** screen reader users can't paste when needed.

**solutions:**
1. manual enable:
   ```javascript
   pasteMeNot.enableAccessibility();
   ```

2. auto-detection improvement:
   ```javascript
   // enhanced detection
   if (window.speechSynthesis || 
       window.navigator.userAgent.includes('NVDA') ||
       window.navigator.userAgent.includes('JAWS') ||
       window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
     pasteMeNot.enableAccessibility();
   }
   ```

## browser-specific issues

### firefox
- **context menu blocking**: may not work consistently
- **keyboard shortcuts**: some combinations might bypass
- **workaround**: add css `user-select: none`

### safari (ios/macos)
- **touch events**: may need additional handling
- **webkit differences**: event timing variations
- **testing needed**: requires actual device testing

### mobile browsers
- **touch paste**: different behavior than desktop
- **virtual keyboards**: may have paste buttons
- **recommendation**: additional mobile-specific testing

## performance issues

### memory leaks
**problem:** multiple protections causing memory issues.

**solution:**
```javascript
// clean up when removing elements
function cleanupProtection(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    // remove event listeners before removing element
    el.removeEventListener('paste', /* handler */);
  });
}
```

### slow performance
**problem:** cadence detection causing lag.

**solutions:**
1. reduce tracking window:
   ```javascript
   // modify library to track fewer keystrokes
   // default tracks last 5, reduce to 3
   ```

2. disable cadence detection:
   ```javascript
   // comment out cadence tracking in source
   // keep only paste blocking
   ```

## debugging

### enable debug mode
```javascript
// add to console for debugging
pasteMeNot.debug = true;

// override showfeedback for debugging
const originalShowFeedback = pasteMeNot.showFeedback;
pasteMeNot.showFeedback = function(input, type) {
  console.log('blocked:', type, 'on', input);
  originalShowFeedback.call(this, input, type);
};
```

### test protection status
```javascript
function testProtection(selector) {
  const elements = document.querySelectorAll(selector);
  console.log(`found ${elements.length} protected elements`);
  
  elements.forEach((el, i) => {
    console.log(`element ${i}:`, el);
    // test paste event
    const event = new ClipboardEvent('paste');
    el.dispatchEvent(event);
  });
}
```