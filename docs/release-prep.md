# release prep

## npm publish process

### 1. pre-publish verification
```bash
# ensure build is current
npm run build

# test package contents
npm pack --dry-run

# verify package.json
npm config list
```

### 2. npm publish
```bash
# login to npm (if needed)
npm login

# publish package
npm publish

# verify publication
npm view paste-me-not
```

### 3. git version tagging
```bash
# create and push version tag
git tag v0.1.0
git push origin v0.1.0

# verify tag
git tag -l
```

### 4. github release
```bash
# create release via github cli (if available)
gh release create v0.1.0 --title "paste-me-not v0.1.0" --notes-file changelog.md

# or create manually via github web interface:
# - go to repository releases
# - click "create a new release"
# - tag: v0.1.0
# - title: paste-me-not v0.1.0
# - description: copy from changelog.md
```

### 5. cdn verification
```bash
# test jsdelivr (may take 5-10 minutes)
curl -i https://cdn.jsdelivr.net/npm/paste-me-not@0.1.0/dist/paste-me-not.min.js

# test unpkg (usually immediate)
curl -i https://unpkg.com/paste-me-not@0.1.0/dist/paste-me-not.min.js

# test latest version links
curl -i https://cdn.jsdelivr.net/npm/paste-me-not@latest/dist/paste-me-not.min.js
```

## expected results

- npm package available at: https://www.npmjs.com/package/paste-me-not
- github release created with changelog
- git tag v0.1.0 pushed
- cdn links active (jsdelivr may have delay)

## troubleshooting

**npm publish fails:**
- check if package name is available
- verify npm login status
- ensure version number is unique

**cdn not working:**
- jsdelivr: wait 5-10 minutes for sync
- unpkg: usually immediate, check url format
- verify npm package published successfully