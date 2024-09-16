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
        repository: 'https://www.github.com/tu-repo/primate'
      },
      navigation: true,
      alignment: 'center',
      message: 'Reflexiones sobre la evolución de Primate'
    }
  }
})


