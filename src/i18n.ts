export const supportedLocales = ['en', 'es', 'id'] as const

export type Locale = (typeof supportedLocales)[number]

export const languageOptions: Array<{ value: Locale; label: string; shortLabel: string }> = [
  { value: 'en', label: 'English', shortLabel: 'EN' },
  { value: 'es', label: 'Español', shortLabel: 'ES' },
  { value: 'id', label: 'Bahasa Indonesia', shortLabel: 'ID' },
]

export const messages = {
  en: {
    meta: {
      description:
        'ART Botanical IND exports Indonesian kratom to legal receiving markets with batch documentation, lab verification and export-ready packing.',
    },
    languageLabel: 'Language',
    nav: {
      aria: 'Primary navigation',
      home: 'ART Botanical IND home',
      toggle: 'Toggle navigation',
      contact: 'Contact us',
      items: {
        origin: 'Origin',
        products: 'Products',
        quality: 'Quality',
        shipping: 'Export',
        education: 'Knowledge',
        contact: 'Contact',
      },
    },
    hero: {
      eyebrow: 'Indonesian origin, export-first sourcing',
      title: 'Indonesian kratom export, verified from leaf to shipment.',
      lead:
        'ART Botanical IND connects certified local supply in Indonesia with buyers in legal receiving markets, combining real product batches, lab documentation and export-ready packing.',
      requestSample: 'Request a sample',
      qualityProof: 'View quality proof',
      socialAria: 'Social channels',
    },
    proof: {
      aria: 'Supply proof highlights',
      items: {
        coa: { value: 'COA', label: 'batch documentation' },
        markets: { value: 'Legal markets', label: 'buyer-side import check' },
        bulk: { value: 'Bulk ready', label: 'sample packs to cartons' },
        indonesia: { value: 'Indonesia', label: 'local supplier network' },
      },
    },
    origin: {
      eyebrow: 'West Kalimantan supply network',
      title: 'Indonesia has become one of the key kratom sourcing regions for global buyers.',
      paragraphs: [
        'Kratom grows naturally across parts of Southeast Asia, and West Kalimantan has built a strong farming and processing ecosystem around Mitragyna speciosa. Our sourcing model keeps the story close to the people handling the leaf: local suppliers, practical quality checks and export documents that buyers can review before payment.',
        'A documentary section is prepared for the upcoming field video with suppliers, farmers and packing partners. When the video is ready, this block can become the storytelling anchor of the site.',
      ],
      documentaryAria: 'Documentary video placeholder',
      documentaryComing: 'Documentary video coming soon',
      documentaryTitle: 'Field sourcing documentary',
      documentaryCaption: 'Supplier interviews, processing flow and real batch preparation.',
      suppliersEyebrow: 'Our local suppliers',
      suppliersTitle: 'Direct relationships with growers and production gardens.',
      suppliersBody:
        'This first field video offers a short look at one of the gardens connected to our supplier network. Future updates will document leaf harvesting, drying, milling, storage and batch preparation directly from the people handling the product.',
      supplierPoints: ['Garden-level sourcing', 'Shorter supply chain', 'Traceable partners'],
      videoAria: 'Video from a local supplier production garden',
      videoUnsupported: 'Your browser does not support HTML video.',
      gardenLabel: 'Production garden, Indonesia',
    },
    products: {
      eyebrow: 'Product specifications',
      title: 'Vein lines and specialty extracts for export catalogues.',
      intro:
        'Green, red and white vein profiles are joined by concentrated extract formats, each presented with real product visuals and a direct path to request specifications, samples or bulk allocation.',
      availableFormats: 'Available formats',
      viewSpecifications: 'View specifications',
      requestSample: 'Request a sample',
      specifications: 'Product specifications',
      backToProduct: 'Back to product',
      items: {
        'green-vein': {
          name: 'Green Vein Kratom',
          badge: 'Balanced profile',
          description:
            'A vivid green powder profile for buyers looking for a balanced catalogue anchor. The current available lab sheet is prepared from a green powder sample.',
          specs: [
            'Fine powder format',
            'Batch COA available',
            'Bulk cartons or sample packs',
            'Best for flagship SKUs',
          ],
          varieties: ['Green Maeng Da', 'Green Sumatra', 'Green Borneo', 'Green Bali'],
        },
        'red-vein': {
          name: 'Red Vein Kratom',
          badge: 'Mature leaf profile',
          description:
            'A deeper powder tone typically selected for evening-oriented product ranges. A COA slot is prepared and will be attached when the red batch analysis arrives.',
          specs: [
            'Fine powder format',
            'Red COA incoming',
            'Sealed inner liners',
            'Private label ready',
          ],
          varieties: ['Red Maeng Da', 'Red Sumatra', 'Red Borneo', 'Red Bali'],
        },
        'white-vein': {
          name: 'White Vein Kratom',
          badge: 'Active catalogue profile',
          description:
            'A lighter powder profile for buyers building a complete green, red and white assortment. Sample formats can be arranged before bulk allocation.',
          specs: [
            'Fine powder format',
            'White COA incoming',
            'Sample packs available',
            'Export carton packing',
          ],
          varieties: ['White Maeng Da', 'White Sumatra', 'White Borneo', 'White Bali'],
        },
        'extract-powder': {
          name: 'Extract Powder',
          badge: 'Special extraction',
          description:
            'Concentrated kratom formats for specialist catalogues. Extract powder can look similar to standard leaf powder, so concentration must be defined by ratio, process and batch documentation rather than appearance alone.',
          specs: [
            'Extract powder: concentrated powder such as 10:1, 20:1 or 50:1',
            'Resin or paste: darker, dense and resinous texture',
            'Liquid extract or tincture: concentrated liquid format',
            'Enhanced kratom: leaf powder blended with extract',
          ],
          varieties: ['Extract powder', 'Resin / paste', 'Liquid extract', 'Enhanced kratom'],
        },
      },
      bestSellers: {
        eyebrow: 'Buyer catalogue planning',
        title: 'Best-seller families ready for sample requests.',
        body:
          'Build a complete range from familiar international names while keeping batch documentation and import compliance attached to each order.',
        imageAria: 'Original best sellers reference crop',
        groups: {
          green: 'Green line',
          red: 'Red line',
          white: 'White line',
        },
      },
    },
    quality: {
      eyebrow: 'Quality verification',
      title: 'Laboratory evidence and prepared COA slots across the catalogue.',
      intro:
        'The green powder analysis is visible today. Red, white and extract powder report positions are ready so the same verification structure can be completed as soon as each document arrives.',
      placeholder: 'COA image slot',
      status: { available: 'Available', incoming: 'Incoming' },
      cards: {
        green: {
          title: 'Green powder COA',
          detail:
            'Sentarum Laboratory report for green powder, March 2025, with the HPLC mitragynine marker shown.',
        },
        red: {
          title: 'Red powder COA',
          detail:
            'Reserved report slot for the red vein batch analysis. The document image can be added as soon as it arrives.',
        },
        white: {
          title: 'White powder COA',
          detail:
            'Reserved report slot for the white vein batch analysis. The layout is ready for the next laboratory sheet.',
        },
        extract: {
          title: 'Extract powder COA',
          detail:
            'Reserved report slot for extract powder analysis, including concentration ratio and batch-specific verification when available.',
        },
      },
      workflowEyebrow: 'Documentation workflow',
      workflowTitle: 'Quality language built for serious importers.',
      checks: [
        'HPLC alkaloid marker review by batch',
        'Microbiological, heavy-metal and adulteration checks when requested by buyer specification',
        'Lot traceability from supplier intake through packing',
        'Export documentation reviewed before shipment confirmation',
      ],
    },
    shipping: {
      eyebrow: 'Packing and export flow',
      title: 'Real shipment proof, carton packing and buyer-side compliance first.',
      body:
        'Export orders are treated as regulated commercial shipments, not casual parcels. The buyer confirms destination legality, then we align batch, documents, packing format and route before release.',
      gallery: {
        selectedAlt: 'Labelled kratom varieties prepared for packing',
        selected: 'Selected varieties',
        cartonsAlt: 'Prepared kratom export cartons',
        cartons: 'Bulk cartons',
        sealedAlt: 'Sealed carton example',
        sealed: 'Sealed shipment',
      },
      steps: {
        legality: {
          title: 'Destination legality',
          body:
            'We only prepare samples and shipments where import, possession and onward sale can be confirmed by the buyer.',
        },
        batch: {
          title: 'Batch selection',
          body:
            'Samples, vein profile, quantity, mesh, documentation and packaging format are confirmed before allocation.',
        },
        packing: {
          title: 'Packing workflow',
          body:
            'Powder is sealed in inner liners, packed into cartons and prepared for freight or courier routing.',
        },
        coordination: {
          title: 'Export coordination',
          body:
            'Shipment images and document references are shared so buyers can follow each stage with confidence.',
        },
      },
      tracking: {
        eyebrow: 'Real-time shipment tracking',
        title: 'From dispatch updates to successful delivery.',
        body:
          'Buyers receive carrier references for live shipment monitoring. These recent tracking records show three independently delivered consignments, with private tracking data concealed.',
        imageAlt: 'Successful shipment delivery tracking confirmation',
        delivered: 'Delivered successfully',
        destination: 'United States',
      },
    },
    education: {
      visualAria: 'Kratom effect guide visual',
      visualLabel: 'Vein profile guide',
      eyebrow: 'Benefits and effects, responsibly framed',
      title: 'Clear market education without medical promises.',
      body:
        'Kratom buyers often organise catalogues by green, red and white vein profiles. The descriptions below reflect common market positioning and reported user language, not treatment claims or medical advice.',
      profiles: {
        green: {
          title: 'Green vein',
          body:
            'Often positioned by the market as the balanced middle profile between active and calm catalogue lines.',
        },
        red: {
          title: 'Red vein',
          body:
            'Often positioned as the deeper, mature leaf profile. Communication should avoid medical treatment claims.',
        },
        white: {
          title: 'White vein',
          body:
            'Often positioned as the brighter profile for active product assortments and morning-facing catalogue ranges.',
        },
      },
      compliance:
        'Kratom is not presented here as a medicine. Importers are responsible for product classification, label language and local consumer regulations in their market.',
    },
    contact: {
      eyebrow: 'Contact ART Botanical IND',
      title: 'Tell us your destination, product profile and target quantity.',
      body:
        'We will confirm whether the destination can be served, then prepare documentation status and sample or bulk order options.',
      whatsapp: 'WhatsApp export desk',
      form: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        country: 'Country',
        product: 'Product',
        quantity: 'Target quantity',
        quantityPlaceholder: 'Example: 25 kg / 100 kg',
        message: 'Message',
        messagePlaceholder:
          'Destination, required documents, packaging preference, timeline...',
        submit: 'Send inquiry',
        sent: 'Your email client has been opened with the inquiry details.',
        productOptions: [
          { value: 'green-vein', label: 'Green vein powder' },
          { value: 'red-vein', label: 'Red vein powder' },
          { value: 'white-vein', label: 'White vein powder' },
          { value: 'extract-powder', label: 'Extract powder' },
          { value: 'resin', label: 'Resin / paste' },
          { value: 'liquid-extract', label: 'Liquid extract / tincture' },
          { value: 'enhanced', label: 'Enhanced kratom' },
          { value: 'mixed-sample', label: 'Mixed sample set' },
          { value: 'private-label', label: 'Private label bulk order' },
        ],
      },
      email: {
        subject: 'ART Botanical IND inquiry from',
        newBuyer: 'new buyer',
        fields: {
          name: 'Name',
          company: 'Company',
          email: 'Email',
          country: 'Country',
          product: 'Product',
          quantity: 'Quantity',
        },
      },
    },
    footer: {
      description:
        'Indonesian kratom sourcing for legal receiving markets, with batch documentation, export packing and buyer-side compliance review.',
      follow: 'Follow',
      rights: '© 2026 ART Botanical IND. All rights reserved.',
      legal: 'For lawful importers and verified buyers only.',
    },
  },
  es: {
    meta: {
      description:
        'ART Botanical IND exporta kratom de Indonesia a mercados donde su recepción es legal, con documentación por lote, análisis de laboratorio y embalaje para exportación.',
    },
    languageLabel: 'Idioma',
    nav: {
      aria: 'Navegación principal',
      home: 'Inicio de ART Botanical IND',
      toggle: 'Abrir o cerrar navegación',
      contact: 'Contáctanos',
      items: {
        origin: 'Origen',
        products: 'Productos',
        quality: 'Calidad',
        shipping: 'Exportación',
        education: 'Información',
        contact: 'Contacto',
      },
    },
    hero: {
      eyebrow: 'Origen indonesio, abastecimiento orientado a la exportación',
      title: 'Kratom de Indonesia para exportación, verificado desde la hoja hasta el envío.',
      lead:
        'ART Botanical IND conecta proveedores locales certificados de Indonesia con compradores en mercados legales, combinando lotes reales, documentación de laboratorio y embalaje preparado para exportación.',
      requestSample: 'Solicitar una muestra',
      qualityProof: 'Ver pruebas de calidad',
      socialAria: 'Redes sociales',
    },
    proof: {
      aria: 'Garantías destacadas del suministro',
      items: {
        coa: { value: 'COA', label: 'documentación por lote' },
        markets: { value: 'Mercados legales', label: 'verificación de importación' },
        bulk: { value: 'Venta a granel', label: 'muestras y cajas de exportación' },
        indonesia: { value: 'Indonesia', label: 'red local de proveedores' },
      },
    },
    origin: {
      eyebrow: 'Red de suministro de Kalimantan Occidental',
      title: 'Indonesia se ha convertido en una región clave de abastecimiento para compradores de kratom.',
      paragraphs: [
        'El kratom crece de forma natural en distintas zonas del Sudeste Asiático y Kalimantan Occidental ha desarrollado un sólido ecosistema agrícola y de procesamiento alrededor de Mitragyna speciosa. Nuestro modelo mantiene la historia cerca de quienes trabajan la hoja: proveedores locales, controles de calidad prácticos y documentos de exportación que el comprador puede revisar antes del pago.',
        'Hemos preparado un espacio para el próximo documental de campo con proveedores, agricultores y colaboradores de embalaje. Cuando el vídeo esté terminado, este bloque se convertirá en el eje narrativo de la web.',
      ],
      documentaryAria: 'Espacio reservado para el vídeo documental',
      documentaryComing: 'Documental disponible próximamente',
      documentaryTitle: 'Documental sobre el abastecimiento',
      documentaryCaption: 'Entrevistas, proceso de producción y preparación real de lotes.',
      suppliersEyebrow: 'Nuestros proveedores locales',
      suppliersTitle: 'Relaciones directas con agricultores y jardines de producción.',
      suppliersBody:
        'Este primer vídeo de campo ofrece una breve mirada a uno de los jardines conectados con nuestra red de proveedores. Las próximas actualizaciones documentarán la cosecha, el secado, la molienda, el almacenaje y la preparación de lotes junto a las personas que trabajan directamente con el producto.',
      supplierPoints: ['Abastecimiento desde el jardín', 'Cadena de suministro más corta', 'Colaboradores trazables'],
      videoAria: 'Vídeo de un jardín de producción de un proveedor local',
      videoUnsupported: 'Tu navegador no admite vídeo HTML.',
      gardenLabel: 'Jardín de producción, Indonesia',
    },
    products: {
      eyebrow: 'Especificaciones del producto',
      title: 'Variedades por vena y extractos especiales para catálogos de exportación.',
      intro:
        'Los perfiles verde, rojo y blanco se complementan con formatos de extracto concentrado, todos presentados con imágenes reales y un acceso directo para solicitar especificaciones, muestras o asignaciones a granel.',
      availableFormats: 'Formatos disponibles',
      viewSpecifications: 'Ver especificaciones',
      requestSample: 'Solicitar una muestra',
      specifications: 'Especificaciones del producto',
      backToProduct: 'Volver al producto',
      items: {
        'green-vein': {
          name: 'Kratom de vena verde',
          badge: 'Perfil equilibrado',
          description:
            'Un polvo de verde intenso para compradores que buscan una referencia equilibrada en su catálogo. El análisis disponible actualmente corresponde a una muestra de polvo verde.',
          specs: [
            'Formato de polvo fino',
            'COA del lote disponible',
            'Cajas a granel o paquetes de muestra',
            'Ideal como referencia principal',
          ],
          varieties: ['Green Maeng Da', 'Green Sumatra', 'Green Borneo', 'Green Bali'],
        },
        'red-vein': {
          name: 'Kratom de vena roja',
          badge: 'Perfil de hoja madura',
          description:
            'Un polvo de tono más profundo, normalmente elegido para líneas de catálogo orientadas a perfiles nocturnos. El espacio del COA está preparado y se completará cuando llegue el análisis del lote rojo.',
          specs: [
            'Formato de polvo fino',
            'COA rojo pendiente',
            'Bolsas interiores selladas',
            'Preparado para marca privada',
          ],
          varieties: ['Red Maeng Da', 'Red Sumatra', 'Red Borneo', 'Red Bali'],
        },
        'white-vein': {
          name: 'Kratom de vena blanca',
          badge: 'Perfil activo de catálogo',
          description:
            'Un perfil de polvo más claro para compradores que desean completar un surtido verde, rojo y blanco. Es posible preparar formatos de muestra antes de la asignación a granel.',
          specs: [
            'Formato de polvo fino',
            'COA blanco pendiente',
            'Paquetes de muestra disponibles',
            'Embalaje en cajas de exportación',
          ],
          varieties: ['White Maeng Da', 'White Sumatra', 'White Borneo', 'White Bali'],
        },
        'extract-powder': {
          name: 'Extracto en polvo',
          badge: 'Extracción especial',
          description:
            'Formatos concentrados de kratom para catálogos especializados. El extracto en polvo puede parecer similar al polvo de hoja normal, por lo que la concentración debe definirse mediante la proporción, el proceso y la documentación del lote, no solo por su aspecto.',
          specs: [
            'Extracto en polvo: concentraciones como 10:1, 20:1 o 50:1',
            'Resina o pasta: textura más oscura, densa y resinosa',
            'Extracto líquido o tintura: formato líquido concentrado',
            'Kratom enhanced: polvo de hoja mezclado con extracto',
          ],
          varieties: ['Extracto en polvo', 'Resina / pasta', 'Extracto líquido', 'Kratom enhanced'],
        },
      },
      bestSellers: {
        eyebrow: 'Planificación del catálogo',
        title: 'Familias superventas disponibles para solicitar muestras.',
        body:
          'Crea una gama completa con nombres reconocidos internacionalmente, manteniendo la documentación del lote y el cumplimiento de importación asociados a cada pedido.',
        imageAria: 'Imagen original de referencia de productos superventas',
        groups: {
          green: 'Línea verde',
          red: 'Línea roja',
          white: 'Línea blanca',
        },
      },
    },
    quality: {
      eyebrow: 'Verificación de calidad',
      title: 'Pruebas de laboratorio y espacios de COA preparados para todo el catálogo.',
      intro:
        'El análisis del polvo verde ya está disponible. Los espacios para los informes rojo, blanco y de extracto están preparados para completar la misma estructura de verificación en cuanto llegue cada documento.',
      placeholder: 'Espacio para imagen del COA',
      status: { available: 'Disponible', incoming: 'Pendiente' },
      cards: {
        green: {
          title: 'COA de polvo verde',
          detail:
            'Informe del laboratorio Sentarum para polvo verde, de marzo de 2025, con el marcador de mitraginina mediante HPLC.',
        },
        red: {
          title: 'COA de polvo rojo',
          detail:
            'Espacio reservado para el análisis del lote de vena roja. La imagen del documento se añadirá en cuanto llegue.',
        },
        white: {
          title: 'COA de polvo blanco',
          detail:
            'Espacio reservado para el análisis del lote de vena blanca. El diseño está preparado para el próximo informe.',
        },
        extract: {
          title: 'COA de extracto en polvo',
          detail:
            'Espacio reservado para el análisis del extracto, incluida la proporción de concentración y la verificación específica del lote.',
        },
      },
      workflowEyebrow: 'Proceso documental',
      workflowTitle: 'Información de calidad pensada para importadores profesionales.',
      checks: [
        'Revisión por lote de marcadores de alcaloides mediante HPLC',
        'Controles microbiológicos, de metales pesados y adulteración según las especificaciones del comprador',
        'Trazabilidad del lote desde la recepción del proveedor hasta el embalaje',
        'Revisión de la documentación de exportación antes de confirmar el envío',
      ],
    },
    shipping: {
      eyebrow: 'Proceso de embalaje y exportación',
      title: 'Pruebas reales de envío, embalaje en cajas y cumplimiento del comprador.',
      body:
        'Los pedidos de exportación se tratan como envíos comerciales regulados, no como paquetes informales. El comprador confirma la legalidad del destino y después coordinamos el lote, la documentación, el formato de embalaje y la ruta antes de la salida.',
      gallery: {
        selectedAlt: 'Variedades de kratom etiquetadas y preparadas para el embalaje',
        selected: 'Variedades seleccionadas',
        cartonsAlt: 'Cajas preparadas para la exportación de kratom',
        cartons: 'Cajas a granel',
        sealedAlt: 'Ejemplo de caja sellada',
        sealed: 'Envío sellado',
      },
      steps: {
        legality: {
          title: 'Legalidad del destino',
          body:
            'Solo preparamos muestras y envíos cuando el comprador puede confirmar la legalidad de la importación, posesión y venta posterior.',
        },
        batch: {
          title: 'Selección del lote',
          body:
            'Antes de la asignación se confirman muestras, perfil, cantidad, malla, documentación y formato de embalaje.',
        },
        packing: {
          title: 'Proceso de embalaje',
          body:
            'El polvo se sella en bolsas interiores, se coloca en cajas y se prepara para transporte de carga o mensajería.',
        },
        coordination: {
          title: 'Coordinación de exportación',
          body:
            'Compartimos imágenes del envío y referencias documentales para que el comprador siga cada etapa con confianza.',
        },
      },
      tracking: {
        eyebrow: 'Seguimiento del envío en tiempo real',
        title: 'Desde las actualizaciones de salida hasta la entrega satisfactoria.',
        body:
          'Los compradores reciben referencias del transportista para seguir el envío en directo. Estos registros recientes muestran tres entregas independientes, ocultando los datos privados de seguimiento.',
        imageAlt: 'Confirmación de seguimiento de una entrega realizada correctamente',
        delivered: 'Entregado correctamente',
        destination: 'Estados Unidos',
      },
    },
    education: {
      visualAria: 'Guía visual de perfiles del kratom',
      visualLabel: 'Guía de perfiles por vena',
      eyebrow: 'Beneficios y efectos explicados con responsabilidad',
      title: 'Información clara de mercado sin promesas médicas.',
      body:
        'Los compradores suelen organizar sus catálogos por perfiles de vena verde, roja y blanca. Las descripciones reflejan el posicionamiento habitual del mercado y el lenguaje comunicado por usuarios, no afirmaciones terapéuticas ni consejo médico.',
      profiles: {
        green: {
          title: 'Vena verde',
          body:
            'Suele presentarse en el mercado como el perfil equilibrado entre las líneas activas y las más tranquilas.',
        },
        red: {
          title: 'Vena roja',
          body:
            'Suele presentarse como un perfil de hoja más profundo y maduro. La comunicación debe evitar afirmaciones médicas.',
        },
        white: {
          title: 'Vena blanca',
          body:
            'Suele presentarse como el perfil más luminoso para gamas activas y catálogos orientados a la mañana.',
        },
      },
      compliance:
        'El kratom no se presenta aquí como medicamento. Los importadores son responsables de la clasificación, el etiquetado y la normativa local aplicable al consumidor.',
    },
    contact: {
      eyebrow: 'Contacta con ART Botanical IND',
      title: 'Indícanos el destino, el producto y la cantidad deseada.',
      body:
        'Confirmaremos si podemos atender el destino y prepararemos el estado de la documentación junto con las opciones de muestra o pedido a granel.',
      whatsapp: 'Atención de exportación por WhatsApp',
      form: {
        name: 'Nombre',
        company: 'Empresa',
        email: 'Correo electrónico',
        country: 'País',
        product: 'Producto',
        quantity: 'Cantidad deseada',
        quantityPlaceholder: 'Ejemplo: 25 kg / 100 kg',
        message: 'Mensaje',
        messagePlaceholder:
          'Destino, documentos necesarios, preferencia de embalaje, plazos...',
        submit: 'Enviar consulta',
        sent: 'Se ha abierto tu cliente de correo con los datos de la consulta.',
        productOptions: [
          { value: 'green-vein', label: 'Polvo de vena verde' },
          { value: 'red-vein', label: 'Polvo de vena roja' },
          { value: 'white-vein', label: 'Polvo de vena blanca' },
          { value: 'extract-powder', label: 'Extracto en polvo' },
          { value: 'resin', label: 'Resina / pasta' },
          { value: 'liquid-extract', label: 'Extracto líquido / tintura' },
          { value: 'enhanced', label: 'Kratom enhanced' },
          { value: 'mixed-sample', label: 'Conjunto de muestras variadas' },
          { value: 'private-label', label: 'Pedido a granel con marca privada' },
        ],
      },
      email: {
        subject: 'Consulta para ART Botanical IND de',
        newBuyer: 'nuevo comprador',
        fields: {
          name: 'Nombre',
          company: 'Empresa',
          email: 'Correo electrónico',
          country: 'País',
          product: 'Producto',
          quantity: 'Cantidad',
        },
      },
    },
    footer: {
      description:
        'Abastecimiento de kratom de Indonesia para mercados legales, con documentación por lote, embalaje de exportación y revisión del cumplimiento del comprador.',
      follow: 'Síguenos',
      rights: '© 2026 ART Botanical IND. Todos los derechos reservados.',
      legal: 'Solo para importadores legales y compradores verificados.',
    },
  },
  id: {
    meta: {
      description:
        'ART Botanical IND mengekspor kratom Indonesia ke pasar tujuan yang legal dengan dokumentasi batch, verifikasi laboratorium, dan kemasan siap ekspor.',
    },
    languageLabel: 'Bahasa',
    nav: {
      aria: 'Navigasi utama',
      home: 'Beranda ART Botanical IND',
      toggle: 'Buka atau tutup navigasi',
      contact: 'Hubungi kami',
      items: {
        origin: 'Asal',
        products: 'Produk',
        quality: 'Kualitas',
        shipping: 'Ekspor',
        education: 'Informasi',
        contact: 'Kontak',
      },
    },
    hero: {
      eyebrow: 'Asal Indonesia, sumber pasokan berorientasi ekspor',
      title: 'Ekspor kratom Indonesia, terverifikasi dari daun hingga pengiriman.',
      lead:
        'ART Botanical IND menghubungkan pasokan lokal bersertifikat di Indonesia dengan pembeli di pasar tujuan yang legal, melalui batch produk nyata, dokumentasi laboratorium, dan kemasan siap ekspor.',
      requestSample: 'Minta sampel',
      qualityProof: 'Lihat bukti kualitas',
      socialAria: 'Media sosial',
    },
    proof: {
      aria: 'Jaminan utama pasokan',
      items: {
        coa: { value: 'COA', label: 'dokumentasi per batch' },
        markets: { value: 'Pasar legal', label: 'pemeriksaan impor pembeli' },
        bulk: { value: 'Siap grosir', label: 'sampel hingga karton ekspor' },
        indonesia: { value: 'Indonesia', label: 'jaringan pemasok lokal' },
      },
    },
    origin: {
      eyebrow: 'Jaringan pasokan Kalimantan Barat',
      title: 'Indonesia menjadi salah satu wilayah sumber kratom utama bagi pembeli global.',
      paragraphs: [
        'Kratom tumbuh alami di berbagai wilayah Asia Tenggara, dan Kalimantan Barat telah membangun ekosistem pertanian serta pengolahan Mitragyna speciosa yang kuat. Model pasokan kami tetap dekat dengan orang-orang yang menangani daun: pemasok lokal, pemeriksaan kualitas yang praktis, dan dokumen ekspor yang dapat ditinjau pembeli sebelum pembayaran.',
        'Bagian dokumenter telah disiapkan untuk video lapangan mendatang bersama pemasok, petani, dan mitra pengemasan. Setelah video selesai, bagian ini akan menjadi pusat cerita situs.',
      ],
      documentaryAria: 'Tempat video dokumenter',
      documentaryComing: 'Video dokumenter segera hadir',
      documentaryTitle: 'Dokumenter sumber pasokan lapangan',
      documentaryCaption: 'Wawancara pemasok, alur pengolahan, dan persiapan batch nyata.',
      suppliersEyebrow: 'Pemasok lokal kami',
      suppliersTitle: 'Hubungan langsung dengan petani dan kebun produksi.',
      suppliersBody:
        'Video lapangan pertama ini memberikan gambaran singkat tentang salah satu kebun dalam jaringan pemasok kami. Pembaruan berikutnya akan mendokumentasikan pemanenan daun, pengeringan, penggilingan, penyimpanan, dan persiapan batch bersama orang-orang yang menangani produk secara langsung.',
      supplierPoints: ['Pasokan langsung dari kebun', 'Rantai pasokan lebih pendek', 'Mitra yang dapat ditelusuri'],
      videoAria: 'Video kebun produksi milik pemasok lokal',
      videoUnsupported: 'Peramban Anda tidak mendukung video HTML.',
      gardenLabel: 'Kebun produksi, Indonesia',
    },
    products: {
      eyebrow: 'Spesifikasi produk',
      title: 'Varian urat dan ekstrak khusus untuk katalog ekspor.',
      intro:
        'Profil urat hijau, merah, dan putih dilengkapi dengan format ekstrak pekat, semuanya ditampilkan melalui foto produk nyata dan akses langsung untuk meminta spesifikasi, sampel, atau alokasi grosir.',
      availableFormats: 'Format tersedia',
      viewSpecifications: 'Lihat spesifikasi',
      requestSample: 'Minta sampel',
      specifications: 'Spesifikasi produk',
      backToProduct: 'Kembali ke produk',
      items: {
        'green-vein': {
          name: 'Kratom Urat Hijau',
          badge: 'Profil seimbang',
          description:
            'Profil bubuk hijau cerah bagi pembeli yang mencari produk utama dengan karakter seimbang. Lembar laboratorium yang tersedia saat ini dibuat dari sampel bubuk hijau.',
          specs: [
            'Format bubuk halus',
            'COA batch tersedia',
            'Karton grosir atau paket sampel',
            'Cocok untuk SKU utama',
          ],
          varieties: ['Green Maeng Da', 'Green Sumatra', 'Green Borneo', 'Green Bali'],
        },
        'red-vein': {
          name: 'Kratom Urat Merah',
          badge: 'Profil daun matang',
          description:
            'Bubuk dengan warna lebih dalam yang umumnya dipilih untuk lini katalog berprofil malam. Tempat COA telah disiapkan dan akan dilengkapi saat analisis batch merah diterima.',
          specs: [
            'Format bubuk halus',
            'COA merah segera tersedia',
            'Lapisan dalam tersegel',
            'Siap untuk merek privat',
          ],
          varieties: ['Red Maeng Da', 'Red Sumatra', 'Red Borneo', 'Red Bali'],
        },
        'white-vein': {
          name: 'Kratom Urat Putih',
          badge: 'Profil katalog aktif',
          description:
            'Profil bubuk lebih terang untuk pembeli yang ingin melengkapi rangkaian hijau, merah, dan putih. Format sampel dapat disiapkan sebelum alokasi grosir.',
          specs: [
            'Format bubuk halus',
            'COA putih segera tersedia',
            'Paket sampel tersedia',
            'Kemasan karton ekspor',
          ],
          varieties: ['White Maeng Da', 'White Sumatra', 'White Borneo', 'White Bali'],
        },
        'extract-powder': {
          name: 'Bubuk Ekstrak',
          badge: 'Ekstraksi khusus',
          description:
            'Format kratom pekat untuk katalog khusus. Bubuk ekstrak dapat terlihat seperti bubuk daun biasa, sehingga konsentrasinya harus ditentukan berdasarkan rasio, proses, dan dokumentasi batch, bukan hanya dari tampilannya.',
          specs: [
            'Bubuk ekstrak: konsentrasi seperti 10:1, 20:1, atau 50:1',
            'Resin atau pasta: tekstur lebih gelap, padat, dan menyerupai resin',
            'Ekstrak cair atau tincture: format cair pekat',
            'Enhanced kratom: bubuk daun yang dicampur ekstrak',
          ],
          varieties: ['Bubuk ekstrak', 'Resin / pasta', 'Ekstrak cair', 'Enhanced kratom'],
        },
      },
      bestSellers: {
        eyebrow: 'Perencanaan katalog pembeli',
        title: 'Keluarga produk terlaris siap untuk permintaan sampel.',
        body:
          'Bangun rangkaian lengkap dari nama-nama yang dikenal secara internasional sambil menjaga dokumentasi batch dan kepatuhan impor pada setiap pesanan.',
        imageAria: 'Potongan gambar referensi produk terlaris asli',
        groups: {
          green: 'Lini hijau',
          red: 'Lini merah',
          white: 'Lini putih',
        },
      },
    },
    quality: {
      eyebrow: 'Verifikasi kualitas',
      title: 'Bukti laboratorium dan tempat COA yang siap untuk seluruh katalog.',
      intro:
        'Analisis bubuk hijau telah tersedia. Tempat laporan untuk bubuk merah, putih, dan ekstrak telah disiapkan agar struktur verifikasi yang sama dapat dilengkapi segera setelah setiap dokumen diterima.',
      placeholder: 'Tempat gambar COA',
      status: { available: 'Tersedia', incoming: 'Segera tersedia' },
      cards: {
        green: {
          title: 'COA bubuk hijau',
          detail:
            'Laporan Laboratorium Sentarum untuk bubuk hijau, Maret 2025, dengan penanda mitragynine HPLC.',
        },
        red: {
          title: 'COA bubuk merah',
          detail:
            'Tempat laporan disiapkan untuk analisis batch urat merah. Gambar dokumen dapat ditambahkan segera setelah diterima.',
        },
        white: {
          title: 'COA bubuk putih',
          detail:
            'Tempat laporan disiapkan untuk analisis batch urat putih. Tata letak siap untuk lembar laboratorium berikutnya.',
        },
        extract: {
          title: 'COA bubuk ekstrak',
          detail:
            'Tempat laporan disiapkan untuk analisis bubuk ekstrak, termasuk rasio konsentrasi dan verifikasi khusus batch.',
        },
      },
      workflowEyebrow: 'Alur dokumentasi',
      workflowTitle: 'Informasi kualitas untuk importir profesional.',
      checks: [
        'Peninjauan penanda alkaloid HPLC per batch',
        'Pemeriksaan mikrobiologi, logam berat, dan adulterasi sesuai spesifikasi pembeli',
        'Ketertelusuran lot dari penerimaan pemasok hingga pengemasan',
        'Peninjauan dokumen ekspor sebelum konfirmasi pengiriman',
      ],
    },
    shipping: {
      eyebrow: 'Alur pengemasan dan ekspor',
      title: 'Bukti pengiriman nyata, kemasan karton, dan kepatuhan pembeli.',
      body:
        'Pesanan ekspor diperlakukan sebagai pengiriman komersial yang diatur, bukan paket biasa. Pembeli mengonfirmasi legalitas tujuan, kemudian kami menyelaraskan batch, dokumen, format kemasan, dan rute sebelum pengiriman.',
      gallery: {
        selectedAlt: 'Varian kratom berlabel yang disiapkan untuk pengemasan',
        selected: 'Varian terpilih',
        cartonsAlt: 'Karton ekspor kratom yang telah disiapkan',
        cartons: 'Karton grosir',
        sealedAlt: 'Contoh karton tersegel',
        sealed: 'Pengiriman tersegel',
      },
      steps: {
        legality: {
          title: 'Legalitas tujuan',
          body:
            'Kami hanya menyiapkan sampel dan pengiriman jika legalitas impor, kepemilikan, dan penjualan kembali dapat dikonfirmasi oleh pembeli.',
        },
        batch: {
          title: 'Pemilihan batch',
          body:
            'Sampel, profil urat, jumlah, ukuran mesh, dokumentasi, dan format kemasan dikonfirmasi sebelum alokasi.',
        },
        packing: {
          title: 'Alur pengemasan',
          body:
            'Bubuk disegel dalam lapisan dalam, dimasukkan ke karton, dan disiapkan untuk angkutan barang atau kurir.',
        },
        coordination: {
          title: 'Koordinasi ekspor',
          body:
            'Foto pengiriman dan referensi dokumen dibagikan agar pembeli dapat mengikuti setiap tahap dengan yakin.',
        },
      },
      tracking: {
        eyebrow: 'Pelacakan pengiriman waktu nyata',
        title: 'Dari pembaruan keberangkatan hingga barang diterima.',
        body:
          'Pembeli menerima referensi kurir untuk memantau pengiriman secara langsung. Catatan terbaru ini menunjukkan tiga kiriman yang telah diterima secara terpisah, dengan data pelacakan pribadi disamarkan.',
        imageAlt: 'Konfirmasi pelacakan pengiriman yang berhasil diterima',
        delivered: 'Berhasil diterima',
        destination: 'Amerika Serikat',
      },
    },
    education: {
      visualAria: 'Panduan visual profil kratom',
      visualLabel: 'Panduan profil urat',
      eyebrow: 'Manfaat dan efek yang dijelaskan secara bertanggung jawab',
      title: 'Edukasi pasar yang jelas tanpa janji medis.',
      body:
        'Pembeli kratom sering menyusun katalog berdasarkan profil urat hijau, merah, dan putih. Uraian berikut mencerminkan posisi umum di pasar dan bahasa yang dilaporkan pengguna, bukan klaim pengobatan atau saran medis.',
      profiles: {
        green: {
          title: 'Urat hijau',
          body:
            'Sering diposisikan di pasar sebagai profil seimbang antara lini aktif dan lini yang lebih tenang.',
        },
        red: {
          title: 'Urat merah',
          body:
            'Sering diposisikan sebagai profil daun yang lebih dalam dan matang. Komunikasi harus menghindari klaim pengobatan.',
        },
        white: {
          title: 'Urat putih',
          body:
            'Sering diposisikan sebagai profil lebih cerah untuk rangkaian aktif dan katalog yang berorientasi pagi hari.',
        },
      },
      compliance:
        'Kratom tidak disajikan di sini sebagai obat. Importir bertanggung jawab atas klasifikasi produk, bahasa label, dan peraturan konsumen setempat di pasar mereka.',
    },
    contact: {
      eyebrow: 'Hubungi ART Botanical IND',
      title: 'Sampaikan negara tujuan, profil produk, dan jumlah yang dibutuhkan.',
      body:
        'Kami akan mengonfirmasi apakah tujuan dapat dilayani, kemudian menyiapkan status dokumentasi serta opsi sampel atau pesanan grosir.',
      whatsapp: 'Layanan ekspor WhatsApp',
      form: {
        name: 'Nama',
        company: 'Perusahaan',
        email: 'Email',
        country: 'Negara',
        product: 'Produk',
        quantity: 'Jumlah yang dibutuhkan',
        quantityPlaceholder: 'Contoh: 25 kg / 100 kg',
        message: 'Pesan',
        messagePlaceholder: 'Tujuan, dokumen yang diperlukan, pilihan kemasan, jadwal...',
        submit: 'Kirim pertanyaan',
        sent: 'Aplikasi email Anda telah dibuka dengan detail pertanyaan.',
        productOptions: [
          { value: 'green-vein', label: 'Bubuk urat hijau' },
          { value: 'red-vein', label: 'Bubuk urat merah' },
          { value: 'white-vein', label: 'Bubuk urat putih' },
          { value: 'extract-powder', label: 'Bubuk ekstrak' },
          { value: 'resin', label: 'Resin / pasta' },
          { value: 'liquid-extract', label: 'Ekstrak cair / tincture' },
          { value: 'enhanced', label: 'Enhanced kratom' },
          { value: 'mixed-sample', label: 'Paket sampel campuran' },
          { value: 'private-label', label: 'Pesanan grosir merek privat' },
        ],
      },
      email: {
        subject: 'Pertanyaan ART Botanical IND dari',
        newBuyer: 'pembeli baru',
        fields: {
          name: 'Nama',
          company: 'Perusahaan',
          email: 'Email',
          country: 'Negara',
          product: 'Produk',
          quantity: 'Jumlah',
        },
      },
    },
    footer: {
      description:
        'Pasokan kratom Indonesia untuk pasar tujuan yang legal, dengan dokumentasi batch, kemasan ekspor, dan pemeriksaan kepatuhan pembeli.',
      follow: 'Ikuti kami',
      rights: '© 2026 ART Botanical IND. Hak cipta dilindungi.',
      legal: 'Hanya untuk importir legal dan pembeli terverifikasi.',
    },
  },
} as const
