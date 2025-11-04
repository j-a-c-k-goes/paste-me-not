const pasteMeNot = {
  accessibilityMode: false, // Allow paste for accessibility users
  
  enableAccessibility() {
    this.accessibilityMode = true;
    console.log('Accessibility mode enabled - paste allowed');
  },
  
  disableAccessibility() {
    this.accessibilityMode = false;
    console.log('Accessibility mode disabled - paste blocked');
  },
  
  protect(selector) {
    const inputs = document.querySelectorAll(selector);
    
    inputs.forEach(input => {
      // Block paste events
      input.addEventListener('paste', (e) => {
        if (!this.accessibilityMode) {
          e.preventDefault();
          this.showFeedback(input, 'paste');
        }
      });
    });
  },

  showFeedback(input, type = 'paste') {
    // Create feedback message
    const messages = {
      paste: 'Paste blocked - type only',
      drop: 'Drop blocked - type only', 
      shortcut: 'Keyboard shortcut blocked - type only',
      context: 'Context menu blocked - type only'
    };
    
    const message = document.createElement('div');
    message.textContent = messages[type] || messages.paste;
    message.className = 'paste-blocked-message';
    
    // Position near input
    const rect = input.getBoundingClientRect();
    message.style.cssText = `
      position: fixed;
      top: ${rect.bottom + 5}px;
      left: ${rect.left}px;
      background: #ff6b6b;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 1000;
      animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(message);
    
    // Remove after animation
    setTimeout(() => {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
    }, 2000);
  }
};

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.pasteMeNot = pasteMeNot;
  });
} else {
  window.pasteMeNot = pasteMeNot;
}