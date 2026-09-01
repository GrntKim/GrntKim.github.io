const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");

function toggleSidebar() {
  sidebar.classList.toggle('-translate-x-full');
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('pointer-events-none');
}