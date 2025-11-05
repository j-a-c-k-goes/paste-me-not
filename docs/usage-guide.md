# usage guide

## quick start

### 1. include the library

**cdn (recommended):**
```html
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@0.1.0/dist/paste-me-not.min.js"></script>
```

**local file:**
```html
<script src="dist/paste-me-not.min.js"></script>
```

### 2. protect your inputs

```javascript
// protect specific input
pasteMeNot.protect('#delete-confirmation');

// protect multiple inputs
pasteMeNot.protect('.no-paste-allowed');
```

## common use cases

### destructive action confirmation
```html
<input type="text" id="confirm-delete" placeholder="Type DELETE to confirm">
<script>
pasteMeNot.protect('#confirm-delete');
</script>
```

### account deletion
```html
<input type="text" id="account-name" placeholder="Type your username">
<script>
pasteMeNot.protect('#account-name');
</script>
```

### security-critical forms
```html
<form class="critical-form">
  <input type="text" class="protected" placeholder="Type confirmation">
  <input type="password" class="protected" placeholder="Re-enter password">
</form>
<script>
pasteMeNot.protect('.critical-form .protected');
</script>
```

## accessibility support

### enable for all users
```javascript
// auto-enable for screen reader users
if (window.navigator.userAgent.includes('NVDA') || 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  pasteMeNot.enableAccessibility();
}
```

### manual toggle
```html
<button onclick="pasteMeNot.enableAccessibility()">
  enable paste (accessibility)
</button>
<button onclick="pasteMeNot.disableAccessibility()">
  disable paste
</button>
```

## advanced configuration

### adjust cadence detection
```javascript
// more sensitive (faster typing = suspicious)
pasteMeNot.cadenceThreshold = 30;

// less sensitive (allow faster typing)
pasteMeNot.cadenceThreshold = 100;
```

### custom integration
```javascript
// check accessibility mode before other actions
function handleFormSubmit() {
  if (pasteMeNot.accessibilityMode) {
    console.log('User has accessibility mode enabled');
  }
  // continue with form processing...
}
```