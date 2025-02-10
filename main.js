function createBubbles() {
  const bubblesContainer = document.getElementById('bubbles');
  const bubbleCount = 20;
  
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random properties
    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 4;
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.setProperty('--duration', `${duration}s`);
    
    bubblesContainer.appendChild(bubble);
  }
}

function createFloatingMessages() {
  const messages = ["I Love You", "Je t'aime", "Ti amo", "Te amo", "愛してる", "사랑해","я тебя люблю","我爱你","Ich liebe dich","أحبك","Seni seviyorum","أنا أحبك","Szeretlek","Eu te amo","Volim te","Jeg elsker dig","Ma armastan sind","Ik hou van je","Σ'αγαπώ","אני אוהב אותך","मैं तुमसे प्यार करता हूँ","Kocham cię","Nakupenda" ];
  const container = document.body;
  
  function createMessage() {
    const message = document.createElement('div');
    message.className = 'floating-message';
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    // Random starting position along the width of the screen
    const startX = Math.random() * window.innerWidth;
    // Random ending position with some drift
    const endX = startX + (Math.random() - 0.5) * 200;
    
    message.style.setProperty('--start-x', `${startX}px`);
    message.style.setProperty('--end-x', `${endX}px`);
    message.style.setProperty('--float-duration', `${Math.random() * 4 + 6}s`);
    message.style.left = '0';
    message.style.top = '100vh';
    
    container.appendChild(message);
    
    // Remove the message after animation completes
    message.addEventListener('animationend', () => {
      message.remove();
    });
  }
  
  // Create initial batch of messages
  for (let i = 0; i < 10; i++) {
    setTimeout(() => createMessage(), Math.random() * 2000);
  }
  
  // Continuously create new messages
  setInterval(() => {
    createMessage();
  }, 2000);
}

// Initialize both bubbles and floating messages when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createBubbles();
  createFloatingMessages();
});

// Navigation functions
function goToNextPage(page) {
  window.location.href = page;
}