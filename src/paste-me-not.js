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
    // Visual feedback placeholder - will implement in M1.4
    console.log('Paste blocked on:', input);
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