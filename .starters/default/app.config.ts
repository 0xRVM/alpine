export default defineAppConfig({
  alpine: {
    title: 'Primate',
    description: 'Reflexiones sobre Esports y la evolución de Primate',
    image: {
      src: '/primatelogo-blanco.png',  // Ruta de tu logo blanco
      alt: 'Primate Logo',
      width: 400,
      height: 300
    },
    header: {
      position: 'right',  // posible valor: 'left' | 'center' | 'right'
      logo: {
        path: '/primatelogo-blanco.png',  // Ruta del logo blanco
        pathDark: '/primatelogo-negro.png',  // Ruta del logo en modo oscuro
        alt: 'Primate Logo'  // Texto alternativo para el logo
      }
    },
    footer: {
      credits: {
        enabled: true,  // mostrar créditos
        repository: 'https://www.github.com/tu-repo/primate'  // Ruta de tu repositorio
      },
      navigation: true,  // Mostrar la navegación en el footer
      alignment: 'center',  // Alineación del footer: 'none' | 'left' | 'center' | 'right'
      message: 'Reflexiones sobre la evolución de Primate'  // Mensaje en el footer
    },
    socials: {
      twitter: 'https://x.com/primateclan',  // Puedes añadir tus redes sociales o dejar en blanco
      instagram: 'https://www.instagram.com/primateclan/',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/primateclan'  // Ruta de LinkedIn
      }
    },
    form: {
      successMessage: 'Mensaje enviado. ¡Gracias!'  // Mensaje al enviar formulario
    }
  }
})

