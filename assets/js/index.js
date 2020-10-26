
let containerNode = document.getElementById('container');
let headerNode = document.getElementById('header');

const buildList = (data) => {
  let listItem = data.map((accomplishment) => {
    return `<li>${accomplishment}</li>`
  });
  return listItem.join("");
};

const buildMenu = () => {

  let list = "";
  for (section in sections) {
    list += `
      <li>
        <a href=#${sections[section].tag}>${sections[section].name}
        </a>
      </li>
    `;
  };

  let template = `<div id="menu"><ul>${list}</ul></div><br><br><br>`;
  headerNode.insertAdjacentHTML('beforeend',template);
};

const buildHeading = () => {

  // private function
  let buildSocialMedia = () => {
    let anchors = ""
    for(let key in socialMedia) {
      anchors += `
        <a href=${socialMedia[key]}>
          <img src="${key}" alt="icon" width="30" height="30" class="icons">
        </a>
      `;
    };

    return `<div>${anchors}</div>`;
  };

  let template = `
    <div class="section" id="profile">
      <div class="profileHeading">
        <h1 id="name" style="flex-basis: auto">${name}</h1>
        <p id="contactInfo" style="flex-basis: auto; margin-top: 40px">${contactInfo}</p>
      </div>

      <div class="profileHeading">
        <span>${title}</span>
        ${buildSocialMedia()}
      </div>
    </div>
    <br>
  `;

  containerNode.insertAdjacentHTML('beforeend',template);
};

const buildProfileSection = () => {

  let template = `
    <div class="section">
      <span>Profile</span>
      <hr>
      <ul>${buildList(profile)}</ul>
    </div>
    <br>
  `;

  containerNode.insertAdjacentHTML('beforeend',template);
};

const buildTechnicalSkillsSection = () => {
  let buildTechnicalSkills = () => {
    let list = "";
    for(let key in technicalSkills) {
      list += `
        <li style="list-style-type: none;">${key}: &nbsp; ${technicalSkills[key]}</li>
      `
    };
    return `<ul style="padding-left: 0">${list}</ul>`;
  };

  let template = `
    <div class="section" id="technicalSkills">
      <span>Technical Skills</span>
      <hr>
      ${buildTechnicalSkills()}
    </div>
    <br>
  `;
  containerNode.insertAdjacentHTML('beforeend',template);
};

const buildProfessionalExperienceSection = () => {

  // private function
  let buildProfessionalExperience = () => {
    return professionalExperiences.map((exp) => {
      return `
        <div class="experiencePositionHeading">
          <h4>${exp.position}</h4>
          <span class="experienceDate">${exp.date}</span>
        </div>
        <div class="experienceCompany">
          <span><em>${exp.company} ${exp.location}</em><span>
        </div>
        <div class="developmentStack">
          <span><em>Development Stack:&nbsp;</em></span>
          <span><em>${exp.developmentStack}</em></span>
        </div>
        <ul>${buildList(exp.accomplishments)}</ul>
      `
    }).join("");
  };

  let template = `
    <div class="section" id="professionalExperience">
      <span>Professional Experience</span>
      <hr>
      ${buildProfessionalExperience()}
    </div>
    <br>
  `;
  containerNode.insertAdjacentHTML('beforeend',template);
};

const buildProjectsSection = () => {

  let template = `
    <div class="section" id="projects">
      <span>Projects</span>
      <hr>
      <h4 class="projects">${project.name}</h4>
      <p style="flex-wrap: wrap">
        ${project.description}
        &nbsp;
        <a href="${project.link}">Link</a>
      </p>
    </div>
    <br>
  `;

  containerNode.insertAdjacentHTML('beforeend',template);
};

const buildEducationSection = () => {

  let template = `
    <div class="section" id="education">
      <span>Education</span>
      <hr>
      <div class="experiencePositionHeading">
        <h4>${education.title}</h4>
        <p>${education.year}</p>
      </div>
      <span>${education.subTitle}</span>
      <span>${education.location}</span>
    </div>
    <br>
    <br>
    <br>
  `;

  containerNode.insertAdjacentHTML('beforeend',template);
};

const main = () => {
  buildMenu();
  buildHeading();
  buildProfileSection();
  buildTechnicalSkillsSection();
  buildProfessionalExperienceSection();
  buildProjectsSection();
  buildEducationSection();
}

// IIFE
(() => main())();
