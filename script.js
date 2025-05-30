document.querySelector(".message-input button").addEventListener("click", () => {
  const input = document.querySelector(".message-input input");
  const messages = document.getElementById("messages");
  const typingIndicator = document.getElementById("typingIndicator");
  const text = input.value.trim();

  if (text) {
    typingIndicator.style.display = "block";
    setTimeout(() => {
      typingIndicator.style.display = "none";
      const msg = document.createElement("div");
      msg.className = "message sent fade-in";
      msg.innerHTML = `${text}<div class='timestamp'>${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} <span class='status'>Sent</span></div>`;
      messages.appendChild(msg);
      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }, 800);
  }
});


const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});


const chatList = document.getElementById("chatList");
const chatItems = chatList.querySelectorAll("li");
const chatName = document.getElementById("chatName");
const messages = document.getElementById("messages");

chatItems.forEach(item => {
  item.addEventListener("click", () => {
    chatItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const user = item.getAttribute("data-user");
    chatName.textContent = user;
    messages.innerHTML = `<div class='message received fade-in'>Hey, this is ${user}. How can I help you today?<div class='timestamp'>${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div></div>`;
  });
});
