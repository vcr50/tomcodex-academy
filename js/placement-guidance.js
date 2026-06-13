const companies = [
  ["Cognizant","Chennai","Global Strategic Partner",["Health Cloud","LWC","Industries"]],
  ["Wipro","Chennai","Global Strategic Partner",["Service Cloud","MuleSoft","Experience Cloud"]],
  ["TCS","Chennai","Global Strategic Partner",["Sales Cloud","Data Migration","FSC"]],
  ["Accenture","Bangalore","Global Strategic Partner",["Agentforce","Commerce Cloud","Vlocity"]],
  ["Deloitte","Bangalore","Global Strategic Partner",["Marketing Cloud","LWC","Commerce"]],
  ["LTIMindtree","Bangalore","Crest Partner",["Data Cloud","Flow Builder","Integrations"]],
  ["Salesforce India","Hyderabad","Corporate Office",["R&D","Support","Implementation"]],
  ["Virtusa","Hyderabad","Crest Partner",["FSC","LWC","App Builder"]],
  ["Persistent Systems","Hyderabad","Crest Partner",["ISV","Shield","Apex"]],
  ["UST Global","Kochi","Crest Partner",["Healthcare","Admin","Lightning"]],
  ["IBS Software","Kochi","Ridge Partner",["Travel","Service Cloud","Triggers"]],
  ["Experion Technologies","Kochi","Base Partner",["Mobile","Sales Cloud","Validation Rules"]]
];
const cityFilter = document.getElementById("cityFilter");
const companyGrid = document.getElementById("companyGrid");
const fields = ["contactName","companyName","studentName","targetRole","messageType"];

function showView(id) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `view-${id}`));
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === id));
}

function renderCompanies() {
  const city = cityFilter.value;
  companyGrid.innerHTML = companies.filter((company) => city === "all" || company[1] === city).map(([name, location, tier, tags]) => {
    const linkedIn = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(`Salesforce ${name} ${location}`)}`;
    return `<article class="company-card"><header><h3>${name}</h3><b>${tier.toUpperCase()}</b></header><p>${location} · Salesforce delivery and career opportunities.</p><div class="tags">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div><div class="card-actions"><button data-company="${name}">Build Pitch</button><a href="${linkedIn}" target="_blank" rel="noopener noreferrer">Find People ↗</a></div></article>`;
  }).join("");
}

function updateMessage() {
  const contact = document.getElementById("contactName").value || "[Contact Name]";
  const company = document.getElementById("companyName").value || "[Company]";
  const student = document.getElementById("studentName").value || "[Your Name]";
  const role = document.getElementById("targetRole").value || "Salesforce professional";
  const type = document.getElementById("messageType").value;
  const messages = {
    referral: `Hi ${contact},\n\nI noticed your Salesforce work at ${company}. I am building hands-on experience across Salesforce automation, security, and delivery projects, and I am currently exploring ${role} opportunities.\n\nI would value your perspective on the team and, if appropriate, any advice on applying or earning a referral.\n\nThank you,\n${student}`,
    recruiter: `Hello ${contact},\n\nI am reaching out regarding ${role} opportunities at ${company}. My Salesforce portfolio demonstrates practical experience with automation, data, security, and implementation scenarios.\n\nCould we schedule a short conversation to discuss where my background may fit your current hiring needs?\n\nBest regards,\n${student}`,
    job: `Hi ${contact},\n\nI recently applied for a ${role} opportunity at ${company}. I wanted to introduce myself and share my strong interest in contributing to the Salesforce team.\n\nI would be glad to provide my project portfolio, certifications, and skill passport for review.\n\nKind regards,\n${student}`
  };
  document.getElementById("messageOutput").value = messages[type];
}

document.querySelectorAll("[data-view], [data-open-view]").forEach((element) => element.addEventListener("click", () => showView(element.dataset.view || element.dataset.openView)));
cityFilter.addEventListener("change", renderCompanies);
companyGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-company]");
  if (!button) return;
  document.getElementById("companyName").value = button.dataset.company;
  showView("outreach");
  updateMessage();
});
fields.forEach((id) => document.getElementById(id).addEventListener("input", updateMessage));
document.getElementById("copyMessage").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.getElementById("messageOutput").value);
  document.getElementById("copyMessage").textContent = "Copied";
  setTimeout(() => document.getElementById("copyMessage").textContent = "Copy Message", 1200);
});
renderCompanies();
updateMessage();
