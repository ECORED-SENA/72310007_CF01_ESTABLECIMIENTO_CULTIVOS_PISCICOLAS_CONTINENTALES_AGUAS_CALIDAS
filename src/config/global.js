export default {
  global: {
    Name: 'Establecimiento y manejo de cultivos piscícolas en aguas cálidas',
    Description:
      'La piscicultura en aguas cálidas es una actividad productiva orientada al cultivo de peces en ambientes controlados, destacada por su aporte nutricional, económico y sostenible. Incluye selección de especies, manejo sanitario, control de parámetros fisicoquímicos, bioseguridad y preparación del sistema productivo. Su adecuada planificación favorece el crecimiento de los peces, optimiza recursos, fortalece la seguridad alimentaria y contribuye al desarrollo rural mediante prácticas responsables y sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a la piscicultura en aguas cálidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de piscicultura continental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia productiva y económica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas de producción piscícola',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Especies piscícolas de aguas cálidas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Enfoque de sostenibilidad y bienestar animal ',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Selección de la especie piscícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características bioecológicas de las especies',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios socioeconómicos del mercado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Cultivo de especies piscícolas: selección, manejo y cuidados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cálculos básicos para la siembra',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Requerimientos para la explotación piscícola',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Tipos de explotación aplicados a la selección de especies ',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas Prácticas Piscícolas (BPP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto e importancia de las BPP',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normatividad vigente en piscicultura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Disposiciones para la presiembra y siembra',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Bioseguridad en sistemas piscícolas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Manejo responsable y sostenible del cultivo ',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Parámetros fisicoquímicos del agua y suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Parámetros fisicoquímicos del agua',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Parámetros del suelo en estanques ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo y control de parámetros fisicoquímicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Identificación de alteraciones en el agua',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tratamientos preventivos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tratamientos correctivos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manejo de la calidad del agua',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Seguimiento y control sanitario ',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Preparación de la unidad de cultivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Selección del lugar para la piscifactoría',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Abastecimiento de agua',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Evaluación de la calidad del agua',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Adecuación del suelo',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Adecuación del estanque',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Verificación de condiciones para la siembra',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Aplicación de Buenas Prácticas ',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Selección, manejo y siembra de especies',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Selección de la especie',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Manejo y transporte de alevinos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Técnicas de siembra',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Manejo inicial del cultivo',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Control post-siembra ',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Gestión sanitaria y bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Prevención de enfermedades',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Manejo sanitario',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Protocolos de bioseguridad',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Control de riesgos sanitarios',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Manejo responsable de insumos ',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Control, seguimiento y mejora del sistema productivo ',
            hash: 't_8_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72310007_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alevino',
      significado:
        'pez en etapa temprana de desarrollo, utilizado para iniciar un cultivo piscícola.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas para prevenir la entrada y propagación de enfermedades en el cultivo.',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'condiciones físicas, químicas y biológicas del agua que afectan la vida de los peces.',
    },
    {
      termino: 'Densidad de siembra',
      significado:
        'cantidad de peces sembrados por unidad de área o volumen de agua.',
    },
    {
      termino: 'Estanque',
      significado:
        'estructura natural o artificial donde se realiza el cultivo de peces.',
    },
    {
      termino: 'Fitoplancton',
      significado:
        'microorganismos vegetales presentes en el agua que sirven como alimento natural.',
    },
    {
      termino: 'Mortalidad',
      significado: 'número de peces que mueren durante el ciclo productivo.',
    },
    {
      termino: 'Oxígeno disuelto',
      significado:
        'cantidad de oxígeno disponible en el agua para la respiración de los peces.',
    },
    {
      termino: 'pH',
      significado:
        'medida que indica el nivel de acidez o alcalinidad del agua.',
    },
    {
      termino: 'Piscicultura',
      significado:
        'actividad dedicada a la cría y cultivo de peces en condiciones controladas.',
    },
    {
      termino: 'Policultivo',
      significado:
        'cultivo simultáneo de varias especies compatibles en un mismo sistema.',
    },
    {
      termino: 'Sistema intensivo',
      significado:
        'método de producción con alta densidad de peces y control técnico del cultivo.',
    },
    {
      termino: 'Temperatura',
      significado:
        'factor físico del agua que influye en el metabolismo y crecimiento de los peces.',
    },
    {
      termino: 'Turbidez',
      significado:
        'nivel de partículas suspendidas en el agua que afecta la penetración de la luz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autoridad Nacional de Acuicultura y Pesca [AUNAP]. (2024). Lineamientos técnicos para el desarrollo de la acuicultura en Colombia. ',
      link: '',
    },
    {
      referencia:
        'Boyd, Claude E. (2022). Water quality: An introduction for fish farmers. Springer. ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario [ICA]. (2023). Normatividad sanitaria para la acuicultura en Colombia. ',
      link: '',
    },
    {
      referencia:
        'Instituto de Investigaciones Marinas y Costeras [INVEMAR]. (2023). Estado de los recursos hidrobiológicos en Colombia. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2023). Plan Nacional de Desarrollo Acuícola Sostenible. ',
      link: '',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2024). The state of world fisheries and aquaculture 2024. ',
      link: '',
    },
    {
      referencia:
        'World Organisation for Animal Health. (2024). Código sanitario para los animales acuáticos. ',
      link: '',
    },
    {
      referencia:
        'Universidad de los Llanos. (2022). Manual técnico de piscicultura continental en aguas cálidas. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
