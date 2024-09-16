export default defineAppConfig({
  alpine: {
    title: 'Primate',
    description: 'Reflexiones sobre Esports y la evolución de Primate',
    image: {
      src: '/primatelogo-blanco.png',
      alt: 'Primate Logo',
      width: 400,
      height: 300
    },
    header: {
      position: 'right',
      logo: {
        path: '/primatelogo-blanco.png',
        pathDark: '/primatelogo-negro.png',
        alt: 'Primate Logo'
      }
    },
    footer: {
      credits: {
        enabled: true,
        text: 'Primate',
        repository: 'https://www.github.com/nuxt-themes/alpine'
      },
      navigation: true,
      alignment: 'center',
      message: 'Follow me on'
    },
    socials: {
      twitter: '',
      instagram: '',
      github: '',
      facebook: '',
      medium: '',
      youtube: ''
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    },
    backToTop: {
      text: 'Back to top',
      icon: 'material-symbols:arrow-upward'
    }
  }
})
