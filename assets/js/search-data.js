// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "My research publications in robotics, and embodied AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-internships",
          title: "internships",
          description: "My research internship experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/internships/";
          },
        },{id: "news-received-the-graduate-academic-excellence-award-from-the-school-of-aerospace-engineering-tsinghua-university",
          title: '🏆 Received the Graduate Academic Excellence Award from the School of Aerospace Engineering,...',
          description: "",
          section: "News",},{id: "news-graduated-from-tsinghua-university-with-a-bachelor-s-degree",
          title: '🎓 Graduated from Tsinghua University with a Bachelor’s degree!',
          description: "",
          section: "News",},{id: "news-preprint-robohiman-compositional-generalization-in-long-horizon-manipulation-was-released-on-arxiv",
          title: 'Preprint “RoboHiMan” (Compositional Generalization in Long-horizon Manipulation) was released on arXiv.',
          description: "",
          section: "News",},{id: "news-rotri-diff-was-accepted-to-icra-2026",
          title: '🎉 RoTri-Diff was accepted to ICRA 2026!',
          description: "",
          section: "News",},{id: "news-observe-retarget-and-distill-was-accepted-to-the-dexhand-workshop-at-eccv-2026",
          title: '🎉 Observe, Retarget, and Distill was accepted to the DexHAND Workshop at ECCV...',
          description: "",
          section: "News",},{id: "news-robo-cortex-was-accepted-to-the-ttcl-workshop-at-neurips-2026",
          title: '🎉 Robo-Cortex was accepted to the TTCL Workshop at NeurIPS 2026!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6F%75%69%73%61%63%68%61%6E%31%31%31%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mtYXmkcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
