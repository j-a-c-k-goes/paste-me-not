const pasteMeNot = {
  cadenceThreshold: 50, // ms between keystrokes for natural typing
  
  protect(selector) {
    const inputs = document.querySelectorAll(selector);
    
    inputs.forEach(input => {
<<<<<<< HEAD
      this.setupCadenceTracking(input);
=======
      // Block paste events
>>>>>>> m2-2-bypass-attempt-testing
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        this.showFeedback(input, 'paste');
      });
      
      // Block drag & drop
      input.addEventListener('drop', (e) => {
        e.preventDefault();
        this.showFeedback(input, 'drop');
      });
      
      // Block keyboard shortcuts (Ctrl+V, Shift+Insert)
      input.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === 'v') || (e.shiftKey && e.key === 'Insert')) {
          e.preventDefault();
          this.showFeedback(input, 'shortcut');
        }
      });
      
      // Block context menu paste
      input.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.showFeedback(input, 'context');
      });
    });
  },

<<<<<<< HEAD
  setupCadenceTracking(input) {
    let keyTimes = [];
    
    input.addEventListener('keydown', (e) => {
      const now = Date.now();
      keyTimes.push(now);
      
      // Keep only last 5 keystrokes
      if (keyTimes.length > 5) {
        keyTimes.shift();
      }
      
      // Check cadence if we have multiple keystrokes
      if (keyTimes.length > 1) {
        const intervals = [];
        for (let i = 1; i < keyTimes.length; i++) {
          intervals.push(keyTimes[i] - keyTimes[i-1]);
        }
        
        // If all intervals are too fast, likely automated
        const avgInterval = intervals.reduce((a, b) => a + b) / intervals.length;
        if (avgInterval < this.cadenceThreshold) {
          console.log('autonomous typing cadence detected:', avgInterval + 'ms');
        }
      }
    });
  },

  showFeedback(input) {
=======
  showFeedback(input, type = 'paste') {
>>>>>>> m2-2-bypass-attempt-testing
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