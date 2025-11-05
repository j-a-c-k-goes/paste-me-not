# cdn usage guide

## jsdelivr (recommended)

### latest version
```html
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@latest/dist/paste-me-not.min.js"></script>
```

### specific version
```html
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@0.1.0/dist/paste-me-not.min.js"></script>
```

### development version (unminified)
```html
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@0.1.0/dist/paste-me-not.js"></script>
```

## unpkg

### latest version
```html
<script src="https://unpkg.com/paste-me-not@latest/dist/paste-me-not.min.js"></script>
```

### specific version
```html
<script src="https://unpkg.com/paste-me-not@0.1.0/dist/paste-me-not.min.js"></script>
```

## usage example

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/paste-me-not@latest/dist/paste-me-not.min.js"></script>
</head>
<body>
  <input type="text" id="confirm" placeholder="Type DELETE to confirm">
  
  <script>
    pasteMeNot.protect('#confirm');
  </script>
</body>
</html>
```

## version pinning

**recommended for production:**
```html
<!-- Pin to specific version for stability -->
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@0.1.0/dist/paste-me-not.min.js"></script>
```

**development/testing:**
```html
<!-- Use latest for development -->
<script src="https://cdn.jsdelivr.net/npm/paste-me-not@latest/dist/paste-me-not.min.js"></script>
```

## integrity hashes

for enhanced security, use sri (subresource integrity):

```html
<script 
  src="https://cdn.jsdelivr.net/npm/paste-me-not@0.1.0/dist/paste-me-not.min.js"
  integrity="sha384-[hash-will-be-generated]"
  crossorigin="anonymous">
</script>
```

## cdn features

### jsdelivr benefits
- global cdn with 100+ locations
- automatic minification
- http/2 support
- version browsing at jsdelivr.com
- npm package sync

### unpkg Benefits  
- simple npm-to-cdn mapping
- fast global delivery
- automatic latest version resolution
- file browsing interface