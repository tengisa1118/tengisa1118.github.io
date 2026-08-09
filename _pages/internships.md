---
layout: page
permalink: /internships/
title: internships
description: My research internship experiences.
nav: true
nav_order: 3
---

<div class="internships">

  <!-- Jushen Technology -->
  <div class="internship-item">
    <div class="row align-items-center mb-4">
      <div class="col-md-2 text-center">
        <img src="{{ '/assets/img/companies/jushen_logo.png' | relative_url }}"
             alt="Jushen Technology"
             class="company-logo">
      </div>
      <div class="col-md-10">
        <h4>Research Intern</h4>
        <p class="institution">
          <a href="https://www.ju-shen.com/" target="_blank">
            Shanghai Jushen Technology Co., Ltd.
          </a>
          <span class="company-note"> · Unitree Ecosystem Partner</span>
        </p>
        <p class="period">June 2026 - Present</p>
        <p class="description">
          Conducting research on Vision-Language-Action (VLA) models for humanoid loco-manipulation.
        </p>
      </div>
    </div>
  </div>

  <!-- X-Humanoid -->
  <div class="internship-item">
    <div class="row align-items-center mb-4">
      <div class="col-md-2 text-center">
        <img src="{{ '/assets/img/companies/x-humanoid_logo.png' | relative_url }}"
             alt="X-Humanoid"
             class="company-logo">
      </div>
      <div class="col-md-10">
        <h4>Research Intern</h4>
        <p class="institution">
          <a href="https://www.x-humanoid.com/" target="_blank">X-Humanoid</a>
        </p>
        <p class="period">November 2025 - April 2026</p>
        <p class="description">
          Worked on humanoid robotics, focusing on integrating vision-language models
          with world models for decision-making.
        </p>
      </div>
    </div>
  </div>

  <!-- NUS -->
  <div class="internship-item">
    <div class="row align-items-center mb-4">
      <div class="col-md-2 text-center">
        <img src="{{ '/assets/img/companies/NUS_logo.jpg' | relative_url }}"
             alt="NUS"
             class="company-logo">
      </div>
      <div class="col-md-10">
        <h4>Research Intern</h4>
        <p class="institution">
          <a href="https://www.comp.nus.edu.sg/cs/people/shaol/" target="_blank">LinS Lab</a>,
          National University of Singapore
        </p>
        <p class="period">July 2025 - August 2025</p>
        <p class="description">
          Conducted research on bimanual manipulation and robot learning under Prof. Lin Shao.
        </p>
      </div>
    </div>
  </div>

</div>

<style>
.internships {
  margin-top: 2rem;
}

.internship-item {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 10px;
  background: var(--global-card-bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.internship-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.company-logo {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  border-radius: 8px;
}

.internship-item h4 {
  margin-bottom: 0.5rem;
  color: var(--global-theme-color);
  font-weight: 600;
}

.institution {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.institution a {
  color: var(--global-text-color);
  text-decoration: none;
}

.institution a:hover {
  color: var(--global-theme-color);
}

.company-note {
  font-weight: 400;
  color: var(--global-text-color-light);
}

.period {
  color: var(--global-text-color-light);
  font-style: italic;
  margin-bottom: 0.8rem;
}

.description {
  color: var(--global-text-color);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .company-logo {
    max-height: 60px;
    margin-bottom: 1rem;
  }
}
</style>