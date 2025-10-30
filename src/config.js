module.exports = {
  siteTitle: 'Sandeep Lodhi',
  siteDescription:
    'Sandeep Lodhi is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Sandeep Lodhi, Yashita, Namdeo, yashitanamdeo, software engineer, web developer, javascript, python, java, svvv, indore',
  siteUrl: 'https://Sandeep-Lodhi.github.io/sandeeplodhi',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sandeep Lodhi',
  location: 'Delhi, India',
  email: 'officialsandeeplodhi@gmail.com',
  github: 'https://github.com/Sandeep-Lodhi',
  twitterHandle: '@Sandeep98546666',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Sandeep-Lodhi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sandeep-lodhi-30293620b',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/sandeep-lodhi',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/i_sandeeprajpoot/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Sandeep98546666',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
