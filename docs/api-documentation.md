# api documentation

## pasteMeNot Object

### methods

#### `protect(selector)`
intent is to protect (targeted) input elements from paste operations and bypass attempts.

**parameters:**
- `selector` (string): css selector for input elements to protect

**example:**
```javascript
pasteMeNot.protect('#confirm-input');
pasteMeNot.protect('.protected-field');
pasteMeNot.protect('input[data-no-paste]');
```

#### `enableAccessibility()`
enables accessibility mode. allows pasting.

**example:**
```javascript
pastemenot.enableAccessibility();
```

#### `disableAccessibility()`
disables accessibility mode. blocks paste operations.

**example:**
```javascript
pasteMeNot.disableAccessibility();
```

### properties

#### `accessibilityMode` (boolean)
actual state of accessibility mode.

**example:**
```javascript
if (pasteMeNot.accessibilityMode) {
  console.log('Paste is allowed');
}
```

#### `cadenceThreshold` (number)
clocks milliseconds between keystrokes. intended as natural typing detection (default: 50) meter.

**example:**
```javascript
pasteMeNot.cadenceThreshold = 100; // More lenient
```

## protected events

this library blocks these bypass attempts:
- **paste events**: ctrl+v, right-click paste
- **keyboard shortcuts**: shift+insert
- **drag & drop**: text dropping into fields
- **context menu**: right-click menu access
- **fast typing**: automated input detection

## browser support

- chrome/edge 120+ [TESTED]
- firefox 120+ [PARTIAL]
- safari 17+ [UNTESTED]