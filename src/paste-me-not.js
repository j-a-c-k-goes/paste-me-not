const pasteMeNot = {
  protect(selector) {
    const inputs = document.querySelectorAll(selector);
    
    inputs.forEach(input => {
      input.addEventListener('paste', (e) => {
        e.preventDefault();
        this.showFeedback(input);
      });
    });
  },

  showFeedback(input) {
    // Create feedback message
    const message = document.createElement('div');
    message.textContent = 'Paste blocked - type only';
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