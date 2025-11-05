# integration guide

## framework integration

### vanilla javascript
```html
<!DOCTYPE html>
<html>
<head>
  <script src="dist/paste-me-not.min.js"></script>
</head>
<body>
  <input type="text" id="protected" placeholder="No paste allowed">
  <script>
    pasteMeNot.protect('#protected');
  </script>
</body>
</html>
```

### react
```jsx
import { useEffect } from 'react';

function ProtectedInput() {
  useEffect(() => {
    // Load paste-me-not script
    const script = document.createElement('script');
    script.src = 'dist/paste-me-not.min.js';
    script.onload = () => {
      window.pasteMeNot.protect('#react-protected');
    };
    document.head.appendChild(script);
  }, []);

  return (
    <input 
      id="react-protected" 
      type="text" 
      placeholder="Type DELETE to confirm" 
    />
  );
}
```

### vue.js
```vue
<template>
  <input 
    ref="protectedInput"
    type="text" 
    placeholder="Type CONFIRM" 
  />
</template>

<script>
export default {
  mounted() {
    // Ensure paste-me-not is loaded
    if (window.pasteMeNot) {
      window.pasteMeNot.protect(this.$refs.protectedInput);
    }
  }
}
</script>
```

### angular
```typescript
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-protected-input',
  template: '<input #protectedInput type="text" placeholder="No paste">'
})
export class ProtectedInputComponent implements AfterViewInit {
  @ViewChild('protectedInput') inputRef!: ElementRef;

  ngAfterViewInit() {
    if ((window as any).pasteMeNot) {
      (window as any).pasteMeNot.protect(this.inputRef.nativeElement);
    }
  }
}
```

## build tool integration

### webpack
```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  externals: {
    'paste-me-not': 'pasteMeNot'
  }
};
```

### vite
```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['paste-me-not'],
      output: {
        globals: {
          'paste-me-not': 'pasteMeNot'
        }
      }
    }
  }
}
```

## content security policy (csp)

add to your csp header:
```
script-src 'self' https://cdn.jsdelivr.net;
```

## performance considerations

- **file size**: 2kb minified + gzipped
- **runtime impact**: minimal - only active on protected inputs
- **memory usage**: ~1kb per protected input
- **browser compatibility**: modern browsers only

## testing integration

```javascript
// test if paste is blocked
function testPasteBlocking() {
  const input = document.getElementById('test-input');
  const pasteEvent = new ClipboardEvent('paste', {
    clipboardData: new DataTransfer()
  });
  
  input.dispatchEvent(pasteEvent);
  // should be prevented if protection is active
}
```