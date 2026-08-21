/* =========================================================
   CNL DASHBOARD - CENTRAL BUSINESS PORTAL
   =========================================================
   
   HOW TO CHANGE PASSWORD:
   -----------------------
   Har module ke andar "password:" diya hai.
   
   Example:
   password: "Sales@123"
   
   Bas isi value ko change karna hai.
   ========================================================= */


/* =========================================================
   PROJECTS + 10 DASHBOARDS PER MODULE
   ========================================================= */

const projects = [

  /* =======================================================
     SALES
     ======================================================= */

  {
    id: "sales",
    title: "Sales Dashboard",
    description: "Track sales, performance and key business metrics.",
    icon: "↗",
    accent: "#2563eb",
    iconBg: "#eaf2ff",

    // CHANGE SALES PASSWORD HERE
    password: "Sales@123",

    dashboards: [
      {
        name: "Sales Dashboard 01",
        description: "Sales overview and performance",
        url: "#"
      },
      {
        name: "Sales Dashboard 02",
        description: "Daily sales monitoring",
        url: "#"
      },
      {
        name: "Sales Dashboard 03",
        description: "Monthly sales analysis",
        url: "#"
      },
      {
        name: "Sales Dashboard 04",
        description: "Sales team performance",
        url: "#"
      },
      {
        name: "Sales Dashboard 05",
        description: "Primary sales dashboard",
        url: "#"
      },
      {
        name: "Sales Dashboard 06",
        description: "Secondary sales dashboard",
        url: "#"
      },
      {
        name: "Sales Dashboard 07",
        description: "Sales achievement report",
        url: "#"
      },
      {
        name: "Sales Dashboard 08",
        description: "Customer sales analysis",
        url: "#"
      },
      {
        name: "Sales Dashboard 09",
        description: "Region wise sales report",
        url: "#"
      },
      {
        name: "Sales Dashboard 10",
        description: "Management sales report",
        url: "#"
      }
    ]
  },


  /* =======================================================
     INVENTORY
     ======================================================= */

  {
    id: "inventory",
    title: "Inventory Dashboard",
    description: "Monitor inventory, stock levels and product movement.",
    icon: "▦",
    accent: "#0f766e",
    iconBg: "#e8f8f5",

    // CHANGE INVENTORY PASSWORD HERE
    password: "Inventory@123",

    dashboards: [
      {
        name: "Inventory Dashboard 01",
        description: "Inventory overview",
        url: "#"
      },
      {
        name: "Inventory Dashboard 02",
        description: "Stock level monitoring",
        url: "#"
      },
      {
        name: "Inventory Dashboard 03",
        description: "Inventory by location",
        url: "#"
      },
      {
        name: "Inventory Dashboard 04",
        description: "Inventory by category",
        url: "#"
      },
      {
        name: "Inventory Dashboard 05",
        description: "Brand wise inventory",
        url: "#"
      },
      {
        name: "Inventory Dashboard 06",
        description: "Stock movement report",
        url: "#"
      },
      {
        name: "Inventory Dashboard 07",
        description: "SKU analysis",
        url: "#"
      },
      {
        name: "Inventory Dashboard 08",
        description: "Stock value report",
        url: "#"
      },
      {
        name: "Inventory Dashboard 09",
        description: "Warehouse inventory",
        url: "#"
      },
      {
        name: "Inventory Dashboard 10",
        description: "Management inventory report",
        url: "#"
      }
    ]
  },


  /* =======================================================
     TARGET VS ACHIEVEMENT
     ======================================================= */

  {
    id: "target",
    title: "Target vs Achievement",
    description: "Monitor targets, achievements and team performance.",
    icon: "◎",
    accent: "#7c3aed",
    iconBg: "#f1ebff",

    // CHANGE TARGET PASSWORD HERE
    password: "Target@123",

    dashboards: [
      {
        name: "Target Dashboard 01",
        description: "Target vs achievement overview",
        url: "#"
      },
      {
        name: "Target Dashboard 02",
        description: "Primary target analysis",
        url: "#"
      },
      {
        name: "Target Dashboard 03",
        description: "Secondary target analysis",
        url: "#"
      },
      {
        name: "Target Dashboard 04",
        description: "Employee performance",
        url: "#"
      },
      {
        name: "Target Dashboard 05",
        description: "Team achievement report",
        url: "#"
      },
      {
        name: "Target Dashboard 06",
        description: "Monthly target report",
        url: "#"
      },
      {
        name: "Target Dashboard 07",
        description: "Region wise achievement",
        url: "#"
      },
      {
        name: "Target Dashboard 08",
        description: "Sales person performance",
        url: "#"
      },
      {
        name: "Target Dashboard 09",
        description: "Achievement percentage",
        url: "#"
      },
      {
        name: "Target Dashboard 10",
        description: "Management target report",
        url: "#"
      }
    ]
  },


  /* =======================================================
     AUDIT
     ======================================================= */

  {
    id: "audit",
    title: "Audit System",
    description: "Manage internal audits, compliance and reporting.",
    icon: "✓",
    accent: "#ea580c",
    iconBg: "#fff0e8",

    // CHANGE AUDIT PASSWORD HERE
    password: "Audit@123",

    dashboards: [
      {
        name: "Audit Dashboard 01",
        description: "Audit overview",
        url: "#"
      },
      {
        name: "Audit Dashboard 02",
        description: "Audit status report",
        url: "#"
      },
      {
        name: "Audit Dashboard 03",
        description: "Compliance monitoring",
        url: "#"
      },
      {
        name: "Audit Dashboard 04",
        description: "Audit checklist",
        url: "#"
      },
      {
        name: "Audit Dashboard 05",
        description: "Pending audit report",
        url: "#"
      },
      {
        name: "Audit Dashboard 06",
        description: "Completed audit report",
        url: "#"
      },
      {
        name: "Audit Dashboard 07",
        description: "Audit performance",
        url: "#"
      },
      {
        name: "Audit Dashboard 08",
        description: "Location wise audit",
        url: "#"
      },
      {
        name: "Audit Dashboard 09",
        description: "Audit exceptions",
        url: "#"
      },
      {
        name: "Audit Dashboard 10",
        description: "Management audit report",
        url: "#"
      }
    ]
  },


  /* =======================================================
     FMS / MIDAP
     
     NO PASSWORD
     DIRECTLY OPENS MIDAP
     ======================================================= */

  {
    id: "fms",
    title: "FMS / MIDAP",
    description: "Manage workflow, process monitoring and checklist systems.",
    icon: "⌘",
    accent: "#0891b2",
    iconBg: "#e7f8fc",

    directUrl: "https://creativent.midap.in/index.php"
  },


  /* =======================================================
     MIS
     ======================================================= */

  {
    id: "mis",
    title: "MIS Dashboard",
    description: "Management insights, reports and business summaries.",
    icon: "▤",
    accent: "#be185d",
    iconBg: "#fdebf4",

    // CHANGE MIS PASSWORD HERE
    password: "MIS@123",

    dashboards: [
      {
        name: "MIS Dashboard 01",
        description: "Management overview",
        url: "#"
      },
      {
        name: "MIS Dashboard 02",
        description: "Daily MIS report",
        url: "#"
      },
      {
        name: "MIS Dashboard 03",
        description: "Monthly MIS report",
        url: "#"
      },
      {
        name: "MIS Dashboard 04",
        description: "Business performance",
        url: "#"
      },
      {
        name: "MIS Dashboard 05",
        description: "KPI monitoring",
        url: "#"
      },
      {
        name: "MIS Dashboard 06",
        description: "Management summary",
        url: "#"
      },
      {
        name: "MIS Dashboard 07",
        description: "Employee performance",
        url: "#"
      },
      {
        name: "MIS Dashboard 08",
        description: "Operational report",
        url: "#"
      },
      {
        name: "MIS Dashboard 09",
        description: "Business analysis",
        url: "#"
      },
      {
        name: "MIS Dashboard 10",
        description: "Executive MIS report",
        url: "#"
      }
    ]
  },


  /* =======================================================
     MORE PROJECTS
     ======================================================= */

  {
    id: "more",
    title: "More Projects",
    description: "Access additional business systems and future projects.",
    icon: "⊞",
    accent: "#475569",
    iconBg: "#eef2f6",

    // CHANGE MORE PROJECTS PASSWORD HERE
    password: "Projects@123",

    dashboards: [
      {
        name: "Project 01",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 02",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 03",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 04",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 05",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 06",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 07",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 08",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 09",
        description: "Additional business system",
        url: "#"
      },
      {
        name: "Project 10",
        description: "Additional business system",
        url: "#"
      }
    ]
  }

];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const grid = document.getElementById("projectGrid");

const modal = document.getElementById("passwordModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const passwordInput =
  document.getElementById("passwordInput");

const passwordForm =
  document.getElementById("passwordForm");

const errorMessage =
  document.getElementById("errorMessage");

const togglePassword =
  document.getElementById("togglePassword");

const modalClose =
  document.getElementById("modalClose");

const toast =
  document.getElementById("toast");


let selectedProject = null;


/* =========================================================
   RENDER MAIN PROJECTS
   ========================================================= */

function renderProjects() {

  grid.classList.remove("dashboard-mode");

  grid.innerHTML = projects.map(project => `

    <article
      class="project-card"
      style="--accent:${project.accent};--icon-bg:${project.iconBg}"
    >

      <div class="project-icon">
        ${project.icon}
      </div>

      <h3>
        ${project.title}
      </h3>

      <p>
        ${project.description}
      </p>

      <div class="card-bottom">

        <span class="lock-label">
          ${
            project.directUrl
              ? "↗ Direct Access"
              : "🔒 Protected module"
          }
        </span>

        <button
          class="card-btn"
          data-project="${project.id}"
        >
          ${
            project.directUrl
              ? "Open Module →"
              : "Enter Password →"
          }
        </button>

      </div>

    </article>

  `).join("");


  document
    .querySelectorAll(".card-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        openProject(button.dataset.project);

      });

    });

}


/* =========================================================
   OPEN PROJECT
   ========================================================= */

function openProject(id) {

  selectedProject =
    projects.find(project => project.id === id);

  if (!selectedProject) return;


  /* -------------------------------------------------------
     DIRECT MODULE
     
     FMS / MIDAP opens directly.
     No password.
     No dashboard directory.
     ------------------------------------------------------- */

  if (selectedProject.directUrl) {

    window.location.href =
      selectedProject.directUrl;

    return;
  }


  /* -------------------------------------------------------
     PASSWORD MODULE
     ------------------------------------------------------- */

  modalTitle.textContent =
    selectedProject.title;

  modalDescription.textContent =
    `Enter the password for ${selectedProject.title}.`;

  passwordInput.value = "";

  errorMessage.textContent = "";

  passwordInput.type = "password";

  togglePassword.textContent = "Show";

  modal.hidden = false;

  document.body.style.overflow = "hidden";


  setTimeout(() => {

    passwordInput.focus();

  }, 80);

}


/* =========================================================
   CLOSE PASSWORD MODAL
   ========================================================= */

function closeModal() {

  modal.hidden = true;

  document.body.style.overflow = "";

  selectedProject = null;

}


/* =========================================================
   SHOW TOAST
   ========================================================= */

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 2800);

}


/* =========================================================
   PASSWORD LOGIN
   ========================================================= */

passwordForm.addEventListener(
  "submit",
  function (e) {

    e.preventDefault();


    const enteredPassword =
      passwordInput.value;


    /* -------------------------------------------------------
       CHECK SELECTED MODULE'S OWN PASSWORD
       ------------------------------------------------------- */

    if (
      selectedProject &&
      enteredPassword === selectedProject.password
    ) {

      const project = selectedProject;

      closeModal();

      showProjectDashboards(project);

    }

    else {

      errorMessage.textContent =
        "Incorrect password. Please try again.";

      passwordInput.value = "";

      passwordInput.focus();

    }

  }
);


/* =========================================================
   SHOW / HIDE PASSWORD
   ========================================================= */

togglePassword.addEventListener(
  "click",
  () => {

    const hidden =
      passwordInput.type === "password";


    passwordInput.type =
      hidden ? "text" : "password";


    togglePassword.textContent =
      hidden ? "Hide" : "Show";

  }
);


/* =========================================================
   SHOW 10 DASHBOARDS
   ========================================================= */

function showProjectDashboards(project) {

  if (!project) return;


  grid.classList.add("dashboard-mode");


  /* -------------------------------------------------------
     SAFETY CHECK
     ------------------------------------------------------- */

  if (
    !project.dashboards ||
    project.dashboards.length === 0
  ) {

    showToast(
      "No dashboards available for this module."
    );

    return;
  }


  grid.innerHTML = `

    <div class="dashboard-directory">


      <!-- ===============================================
           DIRECTORY HEADER
           =============================================== -->

      <div class="dashboard-directory-header">

        <div>

          <button
            class="back-projects-btn"
            id="backToProjects"
          >
            ← Back to Projects
          </button>


          <div
            class="eyebrow"
            style="margin-top:20px"
          >
            SECURE PROJECT DIRECTORY
          </div>


          <h2>
            ${project.title}
          </h2>


          <p>
            Select a dashboard below to continue.
          </p>

        </div>


        <div
          class="directory-status"
          style="
            --accent:${project.accent};
            --icon-bg:${project.iconBg}
          "
        >

          <span class="directory-status-icon">
            ${project.icon}
          </span>

          <div>

            <strong>
              Access Granted
            </strong>

            <small>
              ${project.dashboards.length}
              dashboards available
            </small>

          </div>

        </div>

      </div>


      <!-- ===============================================
           DASHBOARD GRID
           =============================================== -->

      <div class="dashboard-grid">

        ${project.dashboards.map(
          (dashboard, index) => `

          <article
            class="dashboard-card"
            style="--accent:${project.accent}"
          >

            <div class="dashboard-number">
              ${String(index + 1).padStart(2, "0")}
            </div>


            <div class="dashboard-card-content">

              <h3>
                ${dashboard.name}
              </h3>

              <p>
                ${dashboard.description}
              </p>

            </div>


            ${
              dashboard.url &&
              dashboard.url !== "#"

                ? `

                  <a
                    href="${dashboard.url}"
                    class="dashboard-open-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Dashboard →
                  </a>

                `

                : `

                  <button
                    class="
                      dashboard-open-btn
                      dashboard-disabled
                    "
                    type="button"
                    onclick="
                      showToast(
                        'Dashboard link has not been added yet.'
                      )
                    "
                  >
                    Add Link →
                  </button>

                `
            }


          </article>

        `
        ).join("")}

      </div>

    </div>

  `;


  /* =======================================================
     BACK TO PROJECTS
     ======================================================= */

  const backButton =
    document.getElementById("backToProjects");


  if (backButton) {

    backButton.addEventListener(
      "click",
      () => {

        renderProjects();


        const projectsSection =
          document.getElementById("projects");


        if (projectsSection) {

          projectsSection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  }

}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener(
  "click",
  e => {

    if (e.target === modal) {

      closeModal();

    }

  }
);


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape" &&
      !modal.hidden
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   YEAR
   ========================================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   INITIAL LOAD
   ========================================================= */

renderProjects();


/* =========================================================
   NAVIGATION ACTIVE STATE
   ========================================================= */

document
  .querySelectorAll(
    ".main-nav a, .footer-links a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".main-nav a")
          .forEach(a => {

            a.classList.remove("active");

          });


        const target =
          link.getAttribute("href");


        const active =
          document.querySelector(
            `.main-nav a[href="${target}"]`
          );


        if (active) {

          active.classList.add("active");

        }

      }
    );

  });
