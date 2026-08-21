const projects = [
  {
    id: "sales",
    title: "Sales Dashboard",
    description: "Track sales, performance and key business metrics.",
    icon: "↗",
    accent: "#2563eb",
    iconBg: "#eaf2ff",
    path: "/sales"
  },
  {
    id: "inventory",
    title: "Inventory Dashboard",
    description: "Monitor inventory, stock levels and product movement.",
    icon: "▦",
    accent: "#0f766e",
    iconBg: "#e8f8f5",
    path: "/inventory"
  },
  {
    id: "target",
    title: "Target vs Achievement",
    description: "Monitor targets, achievements and team performance.",
    icon: "◎",
    accent: "#7c3aed",
    iconBg: "#f1ebff",
    path: "/target"
  },
  {
    id: "audit",
    title: "Audit System",
    description: "Manage internal audits, compliance and reporting.",
    icon: "✓",
    accent: "#ea580c",
    iconBg: "#fff0e8",
    path: "/audit"
  },
  {
    id: "fms",
    title: "FMS / MIDAP",
    description: "Manage workflow, process monitoring and checklist systems.",
    icon: "⌘",
    accent: "#0891b2",
    iconBg: "#e7f8fc",
    path: "/fms"
  },
  {
    id: "mis",
    title: "MIS Dashboard",
    description: "Management insights, reports and business summaries.",
    icon: "▤",
    accent: "#be185d",
    iconBg: "#fdebf4",
    path: "/mis"
  },
  {
    id: "more",
    title: "More Projects",
    description: "Access additional business systems and future projects.",
    icon: "⊞",
    accent: "#475569",
    iconBg: "#eef2f6",
    path: "/projects"
  }
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("passwordModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const passwordInput = document.getElementById("passwordInput");
const passwordForm = document.getElementById("passwordForm");
const errorMessage = document.getElementById("errorMessage");
const togglePassword = document.getElementById("togglePassword");
const modalClose = document.getElementById("modalClose");
const toast = document.getElementById("toast");
let selectedProject = null;

function renderProjects() {
  grid.innerHTML = projects.map(project => `
    <article class="project-card" style="--accent:${project.accent};--icon-bg:${project.iconBg}">
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="card-bottom">
        <span class="lock-label">🔒 Protected module</span>
        <button class="card-btn" data-project="${project.id}">Enter Password →</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".card-btn").forEach(btn => {
    btn.addEventListener("click", () => openProject(btn.dataset.project));
  });
}

function openProject(id) {
  selectedProject = projects.find(p => p.id === id);
  if (!selectedProject) return;
  modalTitle.textContent = selectedProject.title;
  modalDescription.textContent = `Enter the password for ${selectedProject.title}.`;
  passwordInput.value = "";
  errorMessage.textContent = "";
  passwordInput.type = "password";
  togglePassword.textContent = "Show";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => passwordInput.focus(), 80);
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  selectedProject = null;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

passwordForm.addEventListener("submit", e => {
  e.preventDefault();
  /*
    IMPORTANT:
    This demo does NOT contain real passwords.
    Do not add production passwords here.
    Replace this handler with a server-side authentication/API call.
  */
  errorMessage.textContent = "Secure authentication is not connected yet. Add your server-side login before going live.";
  passwordInput.focus();
});

togglePassword.addEventListener("click", () => {
  const hidden = passwordInput.type === "password";
  passwordInput.type = hidden ? "text" : "password";
  togglePassword.textContent = hidden ? "Hide" : "Show";
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();

document.querySelectorAll(".main-nav a, .footer-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".main-nav a").forEach(a => a.classList.remove("active"));
    const target = link.getAttribute("href");
    const active = document.querySelector(`.main-nav a[href="${target}"]`);
    if (active) active.classList.add("active");
  });
});
