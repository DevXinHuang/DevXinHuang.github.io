const username = "DevXinHuang";
const repoList = document.getElementById("repo-list");
const statusEl = document.getElementById("repo-status");
const yearEl = document.getElementById("year");
const profilePhoto = document.getElementById("profile-photo");
const heroPhotoWrap = document.getElementById("hero-photo-wrap");

async function loadRepos() {
  if (!repoList || !statusEl) {
    return;
  }

  const endpoint = `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`;

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) {
      throw new Error(`GitHub request failed with ${response.status}`);
    }

    const repos = await response.json();
    const activeRepos = repos
      .filter((repo) => !repo.fork)
      .slice(0, 6);

    repoList.innerHTML = "";

    if (!activeRepos.length) {
      statusEl.textContent = "No public repositories found yet.";
      return;
    }

    for (const repo of activeRepos) {
      const item = document.createElement("li");
      const language = repo.language || "Mixed";
      const stars = repo.stargazers_count ?? 0;
      const description = repo.description ? ` - ${repo.description}` : "";

      item.innerHTML = `
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">
          <span><strong>${repo.name}</strong>${description}</span>
          <span class="repo-meta">${language} | ★ ${stars}</span>
        </a>
      `;

      repoList.appendChild(item);
    }

    statusEl.textContent = "Auto-updated from GitHub.";
  } catch (error) {
    statusEl.textContent = "Could not load live repos right now.";
    repoList.innerHTML = "";
  }
}

function updateYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function handlePhotoFallback() {
  if (!profilePhoto || !heroPhotoWrap) {
    return;
  }

  profilePhoto.addEventListener("error", () => {
    heroPhotoWrap.classList.add("is-missing");
  });
}

updateYear();
loadRepos();
handlePhotoFallback();
