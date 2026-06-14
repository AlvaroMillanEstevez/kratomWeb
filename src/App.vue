<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, reactive, ref, type Component } from 'vue'
import {
  ArrowRight,
  Boxes,
  Check,
  CircleCheckBig,
  ClipboardCheck,
  FileCheck,
  FlaskConical,
  Globe,
  Leaf,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Play,
  RadioTower,
  Route,
  Scale,
  Send,
  ShieldCheck,
  Sprout,
  Truck,
  UsersRound,
  X,
} from '@lucide/vue'

type IconComponent = Component

const brandName = 'ART Botanical IND'
const contactEmail = 'sales@artbotanicalind.com'
const whatsappNumber = '6285890201952'

const publicAsset = (filename: string) => `${import.meta.env.BASE_URL}${filename}`

const images = {
  logoWide: publicAsset('ARTfullLogohorizontal.png'),
  logoMark: publicAsset('ARTbotanicalLogo.png'),
  productGreen: publicAsset('IMG-20260607-WA0007.jpg'),
  productRed: publicAsset('IMG-20260607-WA0004.jpg'),
  productWhite: publicAsset('IMG-20260607-WA0008.jpg'),
  productExtract: publicAsset('WhatsApp Image 2026-06-14 at 10.34.33.jpeg'),
  samplePacks: publicAsset('WhatsApp Image 2026-06-14 at 10.34.32.jpeg'),
  labGreen: publicAsset('IMG-20260607-WA0005.jpg'),
  boxedShipment: publicAsset('IMG-20260607-WA0009.jpg'),
  cartonCloseup: publicAsset('IMG-20260607-WA0010.jpg'),
  bestSellers: publicAsset('IMG-20260607-WA0002.jpg'),
  effectsGuide: publicAsset('IMG-20260607-WA0011.jpg'),
  farmVideo: publicAsset('WhatsApp Video 2026-06-14 at 10.34.33.mp4'),
  farmPoster: publicAsset('farm-garden-poster.jpg'),
  deliveryOne: publicAsset('shippmentProof (1).png'),
  deliveryTwo: publicAsset('shippmentProof (2).png'),
  deliveryThree: publicAsset('shippmentProof (3).png'),
}

const navItems = [
  { id: 'origin', label: 'Origin' },
  { id: 'products', label: 'Products' },
  { id: 'quality', label: 'Quality' },
  { id: 'shipping', label: 'Export' },
  { id: 'education', label: 'Knowledge' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { name: 'Instagram', network: 'instagram', href: 'https://instagram.com/artbotanicalind' },
  { name: 'Facebook', network: 'facebook', href: 'https://facebook.com/artbotanicalind' },
  {
    name: 'LinkedIn',
    network: 'linkedin',
    href: 'https://linkedin.com/company/artbotanicalind',
  },
]

const trustItems: Array<{ icon: IconComponent; value: string; label: string }> = [
  { icon: ShieldCheck, value: 'COA', label: 'batch documentation' },
  { icon: Globe, value: 'Legal markets', label: 'buyer-side import check' },
  { icon: PackageCheck, value: 'Bulk ready', label: 'sample packs to cartons' },
  { icon: Leaf, value: 'Indonesia', label: 'local supplier network' },
]

const products = [
  {
    id: 'green-vein',
    name: 'Green Vein Kratom',
    inquiryValue: 'Green vein powder',
    badge: 'Balanced profile',
    image: images.productGreen,
    color: '#2f7d45',
    description:
      'A vivid green powder profile for buyers looking for a balanced catalogue anchor. The current available lab sheet is prepared from a green powder sample.',
    specs: ['Fine powder format', 'Batch COA available', 'Bulk cartons or sample packs', 'Best for flagship SKUs'],
    varieties: ['Green Maeng Da', 'Green Sumatra', 'Green Borneo', 'Green Bali'],
  },
  {
    id: 'red-vein',
    name: 'Red Vein Kratom',
    inquiryValue: 'Red vein powder',
    badge: 'Mature leaf profile',
    image: images.productRed,
    color: '#8f3b2f',
    description:
      'A deeper powder tone typically selected for evening-oriented product ranges. COA slot is prepared and will be attached when the red batch analysis arrives.',
    specs: ['Fine powder format', 'Red COA incoming', 'Sealed inner liners', 'Private label ready'],
    varieties: ['Red Maeng Da', 'Red Sumatra', 'Red Borneo', 'Red Bali'],
  },
  {
    id: 'white-vein',
    name: 'White Vein Kratom',
    inquiryValue: 'White vein powder',
    badge: 'Active catalogue profile',
    image: images.productWhite,
    color: '#81783f',
    description:
      'A lighter powder profile for buyers building a complete green, red and white assortment. Sample formats can be arranged before bulk allocation.',
    specs: ['Fine powder format', 'White COA incoming', 'Sample packs available', 'Export carton packing'],
    varieties: ['White Maeng Da', 'White Sumatra', 'White Borneo', 'White Bali'],
  },
  {
    id: 'extract-powder',
    name: 'Extract Powder',
    inquiryValue: 'Extract powder',
    badge: 'Special extraction',
    image: images.productExtract,
    color: '#7b6335',
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
]

const bestSellerGroups = [
  {
    title: 'Green line',
    items: ['Maeng Da', 'Sumatra', 'Borneo', 'Bali', 'Elephant', 'Malay'],
  },
  {
    title: 'Red line',
    items: ['Maeng Da', 'Sumatra', 'Borneo', 'Bali', 'Horn', 'Aceh'],
  },
  {
    title: 'White line',
    items: ['Maeng Da', 'Sumatra', 'Borneo', 'Bali', 'Hulu', 'Indo'],
  },
]

const qualityCards = [
  {
    title: 'Green powder COA',
    status: 'Available',
    icon: FileCheck,
    image: images.labGreen,
    detail: 'Sentarum Laboratory report for green powder, March 2025, HPLC mitragynine marker shown.',
  },
  {
    title: 'Red powder COA',
    status: 'Incoming',
    icon: FlaskConical,
    image: '',
    detail: 'Reserved report slot for the red vein batch analysis. The document image can be added as soon as it arrives.',
  },
  {
    title: 'White powder COA',
    status: 'Incoming',
    icon: FlaskConical,
    image: '',
    detail: 'Reserved report slot for the white vein batch analysis. The layout is ready for the next laboratory sheet.',
  },
  {
    title: 'Extract powder COA',
    status: 'Incoming',
    icon: FlaskConical,
    image: '',
    detail:
      'Reserved report slot for the extract powder analysis, including concentration ratio and batch-specific verification when available.',
  },
]

const qualityChecks = [
  'HPLC alkaloid marker review by batch',
  'Microbiological, heavy-metal and adulteration checks when requested by buyer specification',
  'Lot traceability from supplier intake through packing',
  'Export documentation reviewed before shipment confirmation',
]

const exportSteps: Array<{ icon: IconComponent; title: string; body: string }> = [
  {
    icon: Scale,
    title: 'Destination legality',
    body: 'We only quote and ship where import, possession and onward sale can be confirmed by the buyer.',
  },
  {
    icon: ClipboardCheck,
    title: 'Batch selection',
    body: 'Samples, vein profile, quantity, mesh, documentation and packaging format are confirmed before allocation.',
  },
  {
    icon: Boxes,
    title: 'Packing workflow',
    body: 'Powder is sealed in inner liners, packed into cartons and prepared for freight or courier routing.',
  },
  {
    icon: Truck,
    title: 'Export coordination',
    body: 'Shipment images and document references are shared so buyers can follow each stage with confidence.',
  },
]

const deliveryProofs = [
  {
    image: images.deliveryOne,
    date: 'May 8, 2026',
    destination: 'United States',
    carrier: 'UPS',
  },
  {
    image: images.deliveryTwo,
    date: 'May 11, 2026',
    destination: 'United States',
    carrier: 'UPS',
  },
  {
    image: images.deliveryThree,
    date: 'May 11, 2026',
    destination: 'United States',
    carrier: 'UPS',
  },
]

const educationProfiles = [
  {
    title: 'Green vein',
    body: 'Often positioned by the market as the balanced middle profile between active and calm catalogue lines.',
  },
  {
    title: 'Red vein',
    body: 'Often positioned as the deeper, mature leaf profile. Communication should avoid medical treatment claims.',
  },
  {
    title: 'White vein',
    body: 'Often positioned as the brighter profile for active product assortments and morning-facing catalogue ranges.',
  },
]

const form = reactive({
  name: '',
  company: '',
  email: '',
  country: '',
  product: 'Green vein powder',
  quantity: '',
  message: '',
})

const isMenuOpen = ref(false)
const formSent = ref(false)
const expandedProductId = ref<string | null>(null)

function scrollToSection(id: string) {
  isMenuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function openProductDetails(productId: string) {
  expandedProductId.value = productId
  nextTick(() => {
    document
      .querySelector<HTMLButtonElement>(`#product-details-${productId} .product-card__close`)
      ?.focus()
  })
}

function closeProductDetails(productId: string) {
  expandedProductId.value = null
  nextTick(() => {
    document
      .querySelector<HTMLButtonElement>(`#product-${productId} .product-card__details-trigger`)
      ?.focus()
  })
}

function requestProduct(product: (typeof products)[number]) {
  form.product = product.inquiryValue
  expandedProductId.value = null
  scrollToSection('contact')
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && expandedProductId.value) {
    closeProductDetails(expandedProductId.value)
  }
}

function handleSubmit() {
  const subject = `${brandName} inquiry from ${form.company || form.name || 'new buyer'}`
  const body = [
    `Name: ${form.name}`,
    `Company: ${form.company}`,
    `Email: ${form.email}`,
    `Country: ${form.country}`,
    `Product: ${form.product}`,
    `Quantity: ${form.quantity}`,
    '',
    form.message,
  ].join('\n')

  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  formSent.value = true
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.06 },
  )

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="site">
    <header id="top" class="hero">
      <img class="hero__image" :src="images.productGreen" alt="" />
      <div class="hero__shade"></div>

      <nav class="nav" aria-label="Primary navigation">
        <a class="nav__brand" href="#top" :aria-label="`${brandName} home`">
          <img :src="images.logoMark" alt="" />
          <span>
            <strong>A.R.T.</strong>
            <small>Botanical IND</small>
          </span>
        </a>

        <div class="nav__links" :class="{ 'nav__links--open': isMenuOpen }">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav__link"
            type="button"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </button>
        </div>

        <div class="nav__actions">
          <button class="nav__cta" type="button" @click="scrollToSection('contact')">
            Quote
            <ArrowRight :size="16" aria-hidden="true" />
          </button>
          <button
            class="nav__toggle"
            type="button"
            :aria-expanded="isMenuOpen"
            aria-label="Toggle navigation"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Menu v-if="!isMenuOpen" :size="22" aria-hidden="true" />
            <X v-else :size="22" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div class="hero__content section-shell">
        <div class="hero__copy reveal">
          <p class="eyebrow">
            <Sprout :size="18" aria-hidden="true" />
            Indonesian origin, export-first sourcing
          </p>
          <h1>Indonesian kratom export, verified from leaf to shipment.</h1>
          <p class="hero__lead">
            ART Botanical IND connects certified local supply in Indonesia with buyers in legal
            receiving markets, combining real product batches, lab documentation and export-ready
            packing.
          </p>

          <div class="hero__actions">
            <button class="button button--primary" type="button" @click="scrollToSection('contact')">
              Request export quote
              <Send :size="18" aria-hidden="true" />
            </button>
            <button class="button button--ghost" type="button" @click="scrollToSection('quality')">
              View quality proof
              <FileCheck :size="18" aria-hidden="true" />
            </button>
          </div>

          <div class="social-row social-row--hero" aria-label="Social channels">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              class="social-button"
              :href="social.href"
              target="_blank"
              rel="noopener"
              :aria-label="social.name"
            >
              <span
                class="social-button__icon"
                :class="`social-button__icon--${social.network}`"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>

    </header>

    <main>
      <section class="proof-section" aria-label="Supply proof highlights">
        <div class="hero__proof section-shell reveal">
          <div v-for="item in trustItems" :key="item.value" class="proof-item">
            <component :is="item.icon" :size="22" aria-hidden="true" />
            <div>
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="origin" class="section section--origin">
        <div class="section-shell origin-grid">
          <div class="section-copy reveal">
            <p class="eyebrow">
              <MapPin :size="18" aria-hidden="true" />
              West Kalimantan supply network
            </p>
            <h2>Indonesia has become one of the key kratom sourcing regions for global buyers.</h2>
            <p>
              Kratom grows naturally across parts of Southeast Asia, and West Kalimantan has built
              a strong farming and processing ecosystem around Mitragyna speciosa. Our sourcing
              model keeps the story close to the people handling the leaf: local suppliers,
              practical quality checks and export documents that buyers can review before payment.
            </p>
            <p>
              A documentary section is prepared for the upcoming field video with suppliers,
              farmers and packing partners. When the video is ready, this block can become the
              storytelling anchor of the site.
            </p>
          </div>

          <div class="documentary reveal">
            <div class="documentary__video" aria-label="Documentary video placeholder">
              <img :src="images.boxedShipment" alt="" loading="lazy" />
              <Play :size="48" aria-hidden="true" />
              <span>Documentary video coming soon</span>
            </div>
            <div class="documentary__caption">
              <img :src="images.logoMark" alt="" />
              <div>
                <strong>Field sourcing documentary</strong>
                <span>Supplier interviews, processing flow and real batch preparation.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="local-suppliers reveal">
          <div class="local-suppliers__copy">
            <p class="eyebrow">
              <UsersRound :size="18" aria-hidden="true" />
              Our local suppliers
            </p>
            <h3>Direct relationships with growers and production gardens.</h3>
            <p>
              This first field video offers a short look at one of the gardens connected to our
              supplier network. Future updates will document leaf harvesting, drying, milling,
              storage and batch preparation directly from the people handling the product.
            </p>
            <div class="supplier-points">
              <span><Sprout :size="17" aria-hidden="true" /> Garden-level sourcing</span>
              <span><Route :size="17" aria-hidden="true" /> Shorter supply chain</span>
              <span><ShieldCheck :size="17" aria-hidden="true" /> Traceable partners</span>
            </div>
          </div>

          <div class="farm-video">
            <video
              :src="images.farmVideo"
              :poster="images.farmPoster"
              controls
              playsinline
              preload="metadata"
              aria-label="Video from a local supplier production garden"
            >
              Your browser does not support HTML video.
            </video>
            <div class="farm-video__label">
              <Sprout :size="18" aria-hidden="true" />
              Production garden, Indonesia
            </div>
          </div>
        </div>
      </section>

      <section id="products" class="section section--products">
        <div class="section-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">
              <Leaf :size="18" aria-hidden="true" />
              Product specifications
            </p>
            <h2>Vein lines and specialty extracts for export catalogues.</h2>
            <p>
              Green, red and white vein profiles are joined by concentrated extract formats, each
              presented with real product visuals and a direct path to request specifications,
              pricing or bulk allocation.
            </p>
          </div>

          <div class="product-grid">
            <article
              v-for="product in products"
              :id="`product-${product.id}`"
              :key="product.name"
              class="product-card reveal"
              :class="{ 'product-card--details': expandedProductId === product.id }"
              :style="{ '--product-color': product.color }"
            >
              <div
                class="product-card__summary"
                :aria-hidden="expandedProductId === product.id"
                :inert="expandedProductId === product.id"
              >
                <div class="product-card__image">
                  <img :src="product.image" :alt="product.name" loading="lazy" />
                  <span>{{ product.badge }}</span>
                </div>
                <div class="product-card__body">
                  <h3>{{ product.name }}</h3>
                  <p class="product-card__format-label">Available formats</p>
                  <div class="variety-list">
                    <span v-for="variety in product.varieties" :key="variety">{{ variety }}</span>
                  </div>
                  <div class="product-card__actions">
                    <button
                      class="product-card__details-trigger"
                      type="button"
                      :aria-expanded="expandedProductId === product.id"
                      :aria-controls="`product-details-${product.id}`"
                      @click="openProductDetails(product.id)"
                    >
                      View specifications
                      <ArrowRight :size="17" aria-hidden="true" />
                    </button>
                    <button class="text-action" type="button" @click="requestProduct(product)">
                      Request a quote
                      <Send :size="16" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <Transition name="product-panel">
                <section
                  v-if="expandedProductId === product.id"
                  :id="`product-details-${product.id}`"
                  class="product-card__details"
                  role="region"
                  :aria-label="`${product.name} specifications`"
                >
                  <button
                    class="product-card__close"
                    type="button"
                    :aria-label="`Back to ${product.name}`"
                    :title="`Back to ${product.name}`"
                    @click="closeProductDetails(product.id)"
                  >
                    <X :size="20" aria-hidden="true" />
                  </button>

                  <p class="product-card__eyebrow">{{ product.badge }}</p>
                  <h3>{{ product.name }}</h3>
                  <p class="product-card__description">{{ product.description }}</p>

                  <strong class="product-card__spec-title">Product specifications</strong>
                  <ul class="check-list product-card__spec-list">
                    <li v-for="spec in product.specs" :key="spec">
                      <Check :size="16" aria-hidden="true" />
                      {{ spec }}
                    </li>
                  </ul>

                  <div class="product-card__details-actions">
                    <button
                      class="product-card__back"
                      type="button"
                      @click="closeProductDetails(product.id)"
                    >
                      <X :size="16" aria-hidden="true" />
                      Back to product
                    </button>
                    <button
                      class="product-card__quote"
                      type="button"
                      @click="requestProduct(product)"
                    >
                      Request quote
                      <ArrowRight :size="16" aria-hidden="true" />
                    </button>
                  </div>
                </section>
              </Transition>
            </article>
          </div>

          <div class="best-sellers reveal">
            <div>
              <p class="eyebrow">Buyer catalogue planning</p>
              <h3>Best-seller families ready for quotation.</h3>
              <p>
                Build a complete range from familiar international names while keeping batch
                documentation and import compliance attached to each order.
              </p>
            </div>
            <div class="best-sellers__groups">
              <div v-for="group in bestSellerGroups" :key="group.title" class="best-sellers__group">
                <strong>{{ group.title }}</strong>
                <span>{{ group.items.join(' / ') }}</span>
              </div>
            </div>
            <div class="best-sellers__image" aria-label="Original best sellers reference crop">
              <img :src="images.bestSellers" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section id="quality" class="section section--quality">
        <div class="section-shell">
          <div class="section-heading section-heading--light reveal">
            <p class="eyebrow">
              <ShieldCheck :size="18" aria-hidden="true" />
              Quality verification
            </p>
            <h2>Laboratory evidence and prepared COA slots across the catalogue.</h2>
            <p>
              The green powder analysis is visible today. Red, white and extract powder report
              positions are ready so the same verification structure can be completed as soon as
              each document arrives.
            </p>
          </div>

          <div class="quality-grid">
            <article v-for="card in qualityCards" :key="card.title" class="quality-card reveal">
              <div v-if="card.image" class="quality-card__image">
                <img :src="card.image" :alt="card.title" loading="lazy" />
              </div>
              <div v-else class="quality-card__placeholder">
                <component :is="card.icon" :size="44" aria-hidden="true" />
                <span>COA image slot</span>
              </div>
              <div class="quality-card__body">
                <span class="status-pill">{{ card.status }}</span>
                <h3>{{ card.title }}</h3>
                <p>{{ card.detail }}</p>
              </div>
            </article>
          </div>

          <div class="quality-checks reveal">
            <div>
              <p class="eyebrow">Documentation workflow</p>
              <h3>Quality language built for serious importers.</h3>
            </div>
            <ul class="check-list check-list--columns">
              <li v-for="check in qualityChecks" :key="check">
                <Check :size="17" aria-hidden="true" />
                {{ check }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="shipping" class="section section--shipping">
        <div class="section-shell shipping-grid">
          <div class="section-copy reveal">
            <p class="eyebrow">
              <Truck :size="18" aria-hidden="true" />
              Packing and export flow
            </p>
            <h2>Real shipment proof, carton packing and buyer-side compliance first.</h2>
            <p>
              Export orders are treated as regulated commercial shipments, not casual parcels. The
              buyer confirms destination legality, then we align batch, documents, packing format
              and route before release.
            </p>
          </div>

          <div class="shipment-gallery reveal">
            <figure>
              <img
                :src="images.samplePacks"
                alt="Labelled kratom varieties prepared for packing"
                loading="lazy"
              />
              <figcaption>Selected varieties</figcaption>
            </figure>
            <figure>
              <img :src="images.boxedShipment" alt="Prepared kratom export cartons" loading="lazy" />
              <figcaption>Bulk cartons</figcaption>
            </figure>
            <figure>
              <img :src="images.cartonCloseup" alt="Sealed carton example" loading="lazy" />
              <figcaption>Sealed shipment</figcaption>
            </figure>
          </div>
        </div>

        <div class="section-shell export-steps">
          <article v-for="step in exportSteps" :key="step.title" class="export-step reveal">
            <component :is="step.icon" :size="26" aria-hidden="true" />
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </article>
        </div>

        <div class="section-shell delivery-tracking">
          <div class="delivery-tracking__heading reveal">
            <div>
              <p class="eyebrow">
                <RadioTower :size="18" aria-hidden="true" />
                Real-time shipment tracking
              </p>
              <h2>From dispatch updates to successful delivery.</h2>
            </div>
            <p>
              Buyers receive carrier references for live shipment monitoring. These recent tracking
              records show three independently delivered consignments, with private tracking data
              concealed.
            </p>
          </div>

          <div class="delivery-grid">
            <article v-for="proof in deliveryProofs" :key="`${proof.date}-${proof.image}`" class="delivery-card reveal">
              <div class="delivery-card__image">
                <img :src="proof.image" alt="Successful shipment delivery tracking confirmation" loading="lazy" />
              </div>
              <div class="delivery-card__body">
                <CircleCheckBig :size="22" aria-hidden="true" />
                <div>
                  <strong>Delivered successfully</strong>
                  <span>{{ proof.carrier }} · {{ proof.destination }} · {{ proof.date }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="education" class="section section--education">
        <div class="section-shell education-grid">
          <div class="education-visual reveal" aria-label="Kratom effect guide visual">
            <img :src="images.effectsGuide" alt="" loading="lazy" />
            <div class="education-visual__overlay">
              <Leaf :size="34" aria-hidden="true" />
              <span>Vein profile guide</span>
            </div>
          </div>

          <div class="section-copy reveal">
            <p class="eyebrow">
              <FlaskConical :size="18" aria-hidden="true" />
              Benefits and effects, responsibly framed
            </p>
            <h2>Clear market education without medical promises.</h2>
            <p>
              Kratom buyers often organise catalogues by green, red and white vein profiles. The
              descriptions below reflect common market positioning and reported user language, not
              treatment claims or medical advice.
            </p>
            <div class="profile-list">
              <article v-for="profile in educationProfiles" :key="profile.title">
                <h3>{{ profile.title }}</h3>
                <p>{{ profile.body }}</p>
              </article>
            </div>
            <div class="compliance-note">
              <ShieldCheck :size="20" aria-hidden="true" />
              <span>
                Kratom is not presented here as a medicine. Importers are responsible for product
                classification, label language and local consumer regulations in their market.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section section--contact">
        <div class="section-shell contact-grid">
          <div class="section-copy reveal">
            <p class="eyebrow">
              <Mail :size="18" aria-hidden="true" />
              Contact ART Botanical IND
            </p>
            <h2>Tell us your destination, vein profile and target quantity.</h2>
            <p>
              We will confirm whether the destination can be served, then prepare pricing,
              documentation status and sample or bulk order options.
            </p>

            <div class="contact-methods">
              <a :href="`mailto:${contactEmail}`">
                <Mail :size="20" aria-hidden="true" />
                {{ contactEmail }}
              </a>
              <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener">
                <Phone :size="20" aria-hidden="true" />
                WhatsApp export desk
              </a>
            </div>
          </div>

          <form class="contact-form reveal" @submit.prevent="handleSubmit">
            <div class="form-row">
              <label>
                Name
                <input v-model="form.name" required name="name" autocomplete="name" />
              </label>
              <label>
                Company
                <input v-model="form.company" name="company" autocomplete="organization" />
              </label>
            </div>
            <div class="form-row">
              <label>
                Email
                <input v-model="form.email" required type="email" name="email" autocomplete="email" />
              </label>
              <label>
                Country
                <input v-model="form.country" required name="country" autocomplete="country-name" />
              </label>
            </div>
            <div class="form-row">
              <label>
                Product
                <select v-model="form.product" name="product">
                  <option>Green vein powder</option>
                  <option>Red vein powder</option>
                  <option>White vein powder</option>
                  <option>Extract powder</option>
                  <option>Resin / paste</option>
                  <option>Liquid extract / tincture</option>
                  <option>Enhanced kratom</option>
                  <option>Mixed sample set</option>
                  <option>Private label bulk order</option>
                </select>
              </label>
              <label>
                Target quantity
                <input v-model="form.quantity" name="quantity" placeholder="Example: 25 kg / 100 kg" />
              </label>
            </div>
            <label>
              Message
              <textarea
                v-model="form.message"
                required
                name="message"
                rows="5"
                placeholder="Destination, required documents, packaging preference, timeline..."
              ></textarea>
            </label>
            <button class="button button--primary contact-form__submit" type="submit">
              Send inquiry
              <Send :size="18" aria-hidden="true" />
            </button>
            <p v-if="formSent" class="form-confirmation">
              Your email client has been opened with the inquiry details.
            </p>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="section-shell footer__inner">
        <div>
          <img class="footer__logo" :src="images.logoWide" :alt="brandName" />
          <p>
            Indonesian kratom sourcing for legal receiving markets, with batch documentation,
            export packing and buyer-side compliance review.
          </p>
        </div>

        <div class="footer__links">
          <button v-for="item in navItems" :key="item.id" type="button" @click="scrollToSection(item.id)">
            {{ item.label }}
          </button>
        </div>

        <div>
          <strong>Follow</strong>
          <div class="social-row social-row--footer" aria-label="Social channels">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              class="social-button"
              :href="social.href"
              target="_blank"
              rel="noopener"
              :aria-label="social.name"
            >
              <span
                class="social-button__icon"
                :class="`social-button__icon--${social.network}`"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div class="section-shell footer__bottom">
        <span>© 2026 ART Botanical IND. All rights reserved.</span>
        <span>For lawful importers and verified buyers only.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
  letter-spacing: 0;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  background: #f6f7f3;
  color: #17221a;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

:global(button),
:global(input),
:global(select),
:global(textarea) {
  font: inherit;
}

:global(button) {
  cursor: pointer;
}

:global(a) {
  color: inherit;
  text-decoration: none;
}

.site {
  --brand-olive: #59653b;
  --brand-olive-dark: #273020;
  --brand-gold: #b68a2a;
  --brand-gold-light: #d8bc70;
  --brand-soft: #f2f1e9;
  min-height: 100vh;
  overflow-x: hidden;
}

.section-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.section {
  padding: 112px 0;
}

.section--origin,
.section--shipping {
  background: #ffffff;
}

.section--origin {
  padding-top: 76px;
}

.section--products {
  background: #eef3ea;
}

.section--quality {
  background: #14251d;
  color: #f8fbf2;
}

.section--education {
  background: #f6f7f3;
}

.section--contact {
  background: #ffffff;
}

.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity 620ms ease,
    transform 620ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
  color: var(--brand-olive);
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.2;
  text-transform: uppercase;
}

.section--quality .eyebrow,
.hero .eyebrow {
  color: var(--brand-gold-light);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 880px;
  margin-bottom: 22px;
  color: #ffffff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 4.75rem;
  font-weight: 700;
  line-height: 0.96;
  overflow-wrap: break-word;
}

h2 {
  margin-bottom: 20px;
  color: #17221a;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 3.15rem;
  font-weight: 700;
  line-height: 1.05;
}

h3 {
  margin-bottom: 12px;
  color: #17221a;
  font-size: 1.24rem;
  line-height: 1.25;
}

p {
  color: #536158;
  font-size: 1rem;
  line-height: 1.75;
}

.section--quality h2,
.section--quality h3,
.section--quality p {
  color: #f8fbf2;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 0 20px;
  font-weight: 800;
  transition:
    transform 180ms ease,
    background 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button--primary {
  background: var(--brand-gold);
  color: #17180f;
  box-shadow: 0 14px 32px rgba(35, 81, 34, 0.24);
}

.button--primary:hover {
  background: #cda846;
}

.button--ghost {
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(12px);
}

.button--ghost:hover {
  background: rgba(255, 255, 255, 0.18);
}

.hero {
  position: relative;
  display: flex;
  min-height: 82svh;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 112px 0 28px;
  background: #102017;
  color: #ffffff;
}

.hero__image,
.hero__shade {
  position: absolute;
  inset: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.04);
}

.hero__shade {
  background:
    linear-gradient(90deg, rgba(12, 24, 17, 0.94) 0%, rgba(12, 24, 17, 0.76) 44%, rgba(12, 24, 17, 0.2) 100%),
    linear-gradient(0deg, rgba(12, 24, 17, 0.5) 0%, rgba(12, 24, 17, 0.05) 42%);
}

.nav {
  position: fixed;
  z-index: 20;
  top: 14px;
  left: 50%;
  display: flex;
  width: min(1180px, calc(100% - 40px));
  min-height: 68px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 8px;
  padding: 10px 12px 10px 18px;
  background: rgba(247, 249, 243, 0.9);
  box-shadow: 0 18px 44px rgba(7, 23, 12, 0.18);
  transform: translateX(-50%);
  backdrop-filter: blur(18px);
}

.nav__brand {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  min-width: 220px;
}

.nav__brand img {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: contain;
}

.nav__brand span,
.nav__brand strong,
.nav__brand small {
  display: block;
}

.nav__brand strong {
  color: #374027;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.08rem;
  line-height: 1;
}

.nav__brand small {
  margin-top: 4px;
  color: #8b6c28;
  font-size: 0.67rem;
  font-weight: 850;
  text-transform: uppercase;
}

.nav__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.nav__link,
.footer__links button {
  border: 0;
  background: transparent;
  color: #26352a;
  font-size: 0.91rem;
  font-weight: 800;
}

.nav__link {
  min-height: 38px;
  border-radius: 8px;
  padding: 0 11px;
  transition:
    background 180ms ease,
    color 180ms ease;
}

.nav__link:hover {
  background: #e6efe2;
  color: #1f6f32;
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav__cta,
.nav__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
}

.nav__cta {
  min-height: 42px;
  gap: 8px;
  padding: 0 15px;
  background: #17221a;
  color: #ffffff;
  font-weight: 800;
}

.nav__toggle {
  display: none;
  width: 42px;
  height: 42px;
  background: #e7efe2;
  color: #17221a;
}

.hero__content {
  position: relative;
  z-index: 2;
}

.hero__copy {
  width: min(850px, 100%);
}

.hero__lead {
  max-width: 720px;
  margin-bottom: 32px;
  color: #e7efe1;
  font-size: 1.18rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.proof-section {
  position: relative;
  z-index: 3;
  margin-top: -1px;
  padding: 0 0 30px;
  background: #102017;
}

.hero__proof {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
}

.proof-item {
  display: flex;
  min-height: 96px;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.08);
}

.proof-item svg {
  flex: 0 0 auto;
  color: var(--brand-gold-light);
}

.proof-item strong,
.proof-item span {
  display: block;
}

.proof-item strong {
  color: #ffffff;
  font-size: 1.02rem;
}

.proof-item span {
  margin-top: 3px;
  color: #dce8d4;
  font-size: 0.86rem;
}

.social-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-row--hero {
  margin-top: 28px;
}

.social-button {
  position: relative;
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease;
}

.social-row--footer .social-button {
  border-color: rgba(182, 138, 42, 0.32);
  background: #f4f1e8;
  color: #17221a;
}

.social-button:hover {
  border-color: rgba(216, 188, 112, 0.9);
  background: rgba(216, 188, 112, 0.18);
  transform: translateY(-2px);
}

.social-button__icon {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
}

.social-button__icon--instagram {
  border: 2px solid currentColor;
  border-radius: 6px;
}

.social-button__icon--instagram::before {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border: 2px solid currentColor;
  border-radius: 50%;
  content: "";
}

.social-button__icon--instagram::after {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
  content: "";
}

.social-button__icon--facebook::before,
.social-button__icon--linkedin::before {
  position: absolute;
  color: currentColor;
  font-family: Arial, sans-serif;
  font-weight: 900;
  line-height: 1;
}

.social-button__icon--facebook::before {
  top: -2px;
  left: 6px;
  content: "f";
  font-size: 25px;
}

.social-button__icon--linkedin {
  border: 2px solid currentColor;
  border-radius: 3px;
}

.social-button__icon--linkedin::before {
  top: 3px;
  left: 2px;
  content: "in";
  font-size: 13px;
  letter-spacing: -1px;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 42px;
}

.section-heading p {
  max-width: 700px;
}

.section-heading--light h2,
.section-heading--light p {
  color: #f8fbf2;
}

.origin-grid,
.shipping-grid,
.education-grid,
.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
  gap: 56px;
  align-items: center;
}

.section-copy p {
  max-width: 680px;
}

.documentary {
  overflow: hidden;
  border-radius: 8px;
  background: #17221a;
  box-shadow: 0 24px 70px rgba(28, 49, 34, 0.16);
}

.documentary__video {
  position: relative;
  display: grid;
  min-height: 340px;
  place-items: center;
  overflow: hidden;
  background: #17221a;
  color: #ffffff;
}

.documentary__video::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(20, 37, 29, 0.9), rgba(40, 86, 52, 0.62));
  content: "";
}

.documentary__video img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.documentary__video svg,
.documentary__video span {
  position: relative;
  z-index: 2;
}

.documentary__video span {
  align-self: end;
  margin-bottom: 36px;
  font-weight: 800;
}

.documentary__caption {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: #ffffff;
}

.documentary__caption img {
  width: 54px;
  height: 54px;
  border-radius: 8px;
  object-fit: contain;
}

.documentary__caption strong,
.documentary__caption span {
  display: block;
}

.documentary__caption strong {
  color: #17221a;
}

.documentary__caption span {
  margin-top: 4px;
  color: #617065;
  font-size: 0.9rem;
}

.local-suppliers {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(420px, 1.15fr);
  margin-top: 64px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--brand-olive-dark);
  box-shadow: 0 24px 70px rgba(28, 49, 34, 0.16);
}

.local-suppliers__copy {
  align-self: center;
  padding: 42px;
}

.local-suppliers__copy .eyebrow {
  color: var(--brand-gold-light);
}

.local-suppliers__copy h3 {
  color: #ffffff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
}

.local-suppliers__copy p {
  color: #d9e0d3;
}

.supplier-points {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.supplier-points span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid rgba(216, 188, 112, 0.3);
  border-radius: 8px;
  padding: 9px 11px;
  background: rgba(216, 188, 112, 0.08);
  color: #f1ead5;
  font-size: 0.82rem;
  font-weight: 800;
}

.supplier-points svg {
  color: var(--brand-gold-light);
}

.farm-video {
  position: relative;
  min-height: 390px;
  background: #0f140d;
}

.farm-video video {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 390px;
  object-fit: cover;
}

.farm-video__label {
  position: absolute;
  top: 18px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 10px 12px;
  background: rgba(18, 26, 16, 0.82);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 850;
  backdrop-filter: blur(10px);
}

.farm-video__label svg {
  color: var(--brand-gold-light);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.product-card {
  position: relative;
  height: 580px;
  overflow: hidden;
  border: 1px solid #dfe9da;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 18px 50px rgba(22, 47, 29, 0.08);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;
}

.product-card:hover {
  box-shadow: 0 26px 70px rgba(22, 47, 29, 0.12);
  transform: translateY(-4px);
}

.product-card--details:hover {
  transform: none;
}

.product-card__summary {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.product-card__image {
  position: relative;
  flex: 0 0 auto;
  height: 220px;
  overflow: hidden;
  background: #dce8d4;
}

.product-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms ease;
}

.product-card:hover .product-card__image img {
  transform: scale(1.05);
}

.product-card__image span {
  position: absolute;
  right: 14px;
  bottom: 14px;
  border-radius: 8px;
  padding: 8px 11px;
  background: var(--product-color);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 900;
}

.product-card__body {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  padding: 24px;
}

.product-card__body h3 {
  margin-bottom: 8px;
}

.product-card__format-label {
  margin: 0;
  color: #738078;
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.04em;
  line-height: 1.3;
  text-transform: uppercase;
}

.check-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: #334338;
  font-size: 0.94rem;
  line-height: 1.45;
}

.check-list svg {
  flex: 0 0 auto;
  margin-top: 2px;
  color: var(--brand-olive);
}

.variety-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-content: flex-start;
  margin: 16px 0 22px;
}

.product-card__actions {
  display: grid;
  gap: 13px;
  margin-top: auto;
}

.variety-list span {
  border: 1px solid color-mix(in srgb, var(--product-color), #ffffff 70%);
  border-radius: 8px;
  padding: 7px 9px;
  background: color-mix(in srgb, var(--product-color), #ffffff 90%);
  color: #17221a;
  font-size: 0.78rem;
  font-weight: 800;
}

.text-action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  color: var(--product-color);
  font-weight: 900;
  line-height: 1.35;
  padding: 0;
}

.product-card__actions .text-action {
  justify-content: center;
  min-height: 30px;
}

.product-card__details-trigger,
.product-card__quote,
.product-card__back {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  padding: 0 14px;
  font-weight: 850;
  transition:
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.product-card__details-trigger {
  width: 100%;
  border: 1px solid color-mix(in srgb, var(--product-color), #ffffff 55%);
  background: color-mix(in srgb, var(--product-color), #ffffff 90%);
  color: var(--product-color);
}

.product-card__details-trigger:hover,
.product-card__back:hover {
  border-color: var(--product-color);
  background: color-mix(in srgb, var(--product-color), #ffffff 84%);
}

.product-card__details {
  position: absolute;
  z-index: 3;
  inset: 0;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  border-top: 4px solid var(--product-color);
  padding: 28px 24px 24px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--product-color), #ffffff 94%), #ffffff 42%);
  scrollbar-color: color-mix(in srgb, var(--product-color), #ffffff 50%) transparent;
  scrollbar-width: thin;
}

.product-card__close {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8e2d4;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.88);
  color: #27352b;
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.product-card__close:hover {
  background: #ffffff;
  transform: rotate(4deg);
}

.product-card__eyebrow {
  margin: 2px 48px 12px 0;
  color: var(--product-color);
  font-size: 0.76rem;
  font-weight: 900;
  line-height: 1.3;
  text-transform: uppercase;
}

.product-card__details h3 {
  margin-bottom: 12px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.65rem;
  line-height: 1.08;
}

.product-card__description {
  margin: 0 0 20px;
  color: #435148;
  font-size: 0.92rem;
  line-height: 1.62;
}

.product-card__spec-title {
  display: block;
  margin-bottom: 12px;
  color: #1b2a20;
  font-size: 0.84rem;
  text-transform: uppercase;
}

.product-card__spec-list {
  gap: 9px;
}

.product-card__spec-list li {
  font-size: 0.88rem;
}

.product-card__spec-list svg {
  color: var(--product-color);
}

.product-card__details-actions {
  display: grid;
  gap: 10px;
  margin-top: auto;
  padding-top: 24px;
}

.product-card__back {
  border: 1px solid #d4ded0;
  background: #ffffff;
  color: #37463b;
}

.product-card__quote {
  border: 1px solid var(--product-color);
  background: var(--product-color);
  color: #ffffff;
}

.product-card__quote:hover {
  box-shadow: 0 10px 22px color-mix(in srgb, var(--product-color), transparent 74%);
  transform: translateY(-1px);
}

.product-panel-enter-active,
.product-panel-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.product-panel-enter-from,
.product-panel-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

.best-sellers {
  display: grid;
  grid-template-columns: 1.05fr 1.2fr 0.85fr;
  gap: 24px;
  align-items: center;
  margin-top: 24px;
  border: 1px solid #dbe7d5;
  border-radius: 8px;
  padding: 28px;
  background: #ffffff;
}

.best-sellers h3 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.8rem;
}

.best-sellers__groups {
  display: grid;
  gap: 10px;
}

.best-sellers__group {
  display: grid;
  grid-template-columns: 95px 1fr;
  gap: 14px;
  border-bottom: 1px solid #e4ecdf;
  padding-bottom: 10px;
}

.best-sellers__group strong {
  color: #17221a;
}

.best-sellers__group span {
  color: #617065;
  line-height: 1.5;
}

.best-sellers__image {
  height: 190px;
  overflow: hidden;
  border-radius: 8px;
  background: #eef3ea;
}

.best-sellers__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 52%;
  transform: scale(1.18);
}

.quality-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.quality-card {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
}

.quality-card__image,
.quality-card__placeholder {
  height: 380px;
  background: rgba(255, 255, 255, 0.08);
}

.quality-card__image {
  overflow: hidden;
}

.quality-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.quality-card__placeholder {
  display: grid;
  place-items: center;
  color: var(--brand-gold-light);
}

.quality-card__placeholder span {
  margin-top: 70px;
  color: #dce8d4;
  font-weight: 800;
}

.quality-card__body {
  padding: 22px;
}

.quality-card__body p {
  color: #d8e5d2;
}

.status-pill {
  display: inline-flex;
  margin-bottom: 14px;
  border: 1px solid rgba(216, 188, 112, 0.45);
  border-radius: 8px;
  padding: 6px 9px;
  background: rgba(216, 188, 112, 0.1);
  color: #ead391;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
}

.quality-checks {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 30px;
  margin-top: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.06);
}

.check-list--columns {
  grid-template-columns: repeat(2, 1fr);
}

.section--quality .check-list li {
  color: #e5efdd;
}

.shipment-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 190px;
  gap: 12px;
}

.shipment-gallery figure {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  background: #e6eadf;
}

.shipment-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 320ms ease;
}

.shipment-gallery figure:hover img {
  transform: scale(1.035);
}

.shipment-gallery figure:first-child {
  grid-row: span 2;
}

.shipment-gallery figure:first-child img {
  object-position: center;
}

.shipment-gallery figcaption {
  position: absolute;
  right: 12px;
  bottom: 12px;
  border-radius: 8px;
  padding: 8px 10px;
  background: rgba(18, 26, 16, 0.82);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 850;
  backdrop-filter: blur(8px);
}

.export-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 44px;
}

.export-step {
  min-height: 245px;
  border: 1px solid #dfe9da;
  border-radius: 8px;
  padding: 24px;
  background: #ffffff;
}

.export-step svg {
  margin-bottom: 18px;
  color: var(--brand-olive);
}

.export-step p {
  margin-bottom: 0;
  font-size: 0.94rem;
}

.delivery-tracking {
  margin-top: 72px;
  border-top: 1px solid #dfe7d9;
  padding-top: 72px;
}

.delivery-tracking__heading {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 0.7fr);
  gap: 48px;
  align-items: end;
  margin-bottom: 34px;
}

.delivery-tracking__heading h2,
.delivery-tracking__heading p {
  margin-bottom: 0;
}

.delivery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.delivery-card {
  overflow: hidden;
  border: 1px solid #dfe7d9;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 18px 50px rgba(22, 47, 29, 0.07);
}

.delivery-card__image {
  height: 470px;
  overflow: hidden;
  background: #f4f5f0;
}

.delivery-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 320ms ease;
}

.delivery-card:hover .delivery-card__image img {
  transform: scale(1.025);
}

.delivery-card__body {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px;
}

.delivery-card__body svg {
  flex: 0 0 auto;
  color: var(--brand-olive);
}

.delivery-card__body strong,
.delivery-card__body span {
  display: block;
}

.delivery-card__body strong {
  color: #17221a;
}

.delivery-card__body span {
  margin-top: 4px;
  color: #647067;
  font-size: 0.84rem;
  line-height: 1.4;
}

.education-grid {
  grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1fr);
}

.education-visual {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border-radius: 8px;
  background: #1f3427;
  box-shadow: 0 24px 70px rgba(28, 49, 34, 0.16);
}

.education-visual img {
  width: 100%;
  height: 100%;
  min-height: 560px;
  object-fit: cover;
  object-position: 19% center;
  filter: saturate(0.9);
}

.education-visual::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(20, 37, 29, 0.06), rgba(20, 37, 29, 0.78));
  content: "";
}

.education-visual__overlay {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.9);
  color: #17221a;
  font-weight: 900;
}

.profile-list {
  display: grid;
  gap: 12px;
  margin-top: 28px;
}

.profile-list article {
  border-left: 4px solid var(--brand-gold);
  border-radius: 8px;
  padding: 18px 20px;
  background: #ffffff;
}

.profile-list h3 {
  margin-bottom: 6px;
}

.profile-list p {
  margin-bottom: 0;
}

.compliance-note {
  display: flex;
  gap: 12px;
  margin-top: 18px;
  border: 1px solid #d5e2cf;
  border-radius: 8px;
  padding: 16px;
  background: #eef3ea;
  color: #334338;
  line-height: 1.55;
}

.compliance-note svg {
  flex: 0 0 auto;
  margin-top: 2px;
  color: var(--brand-olive);
}

.contact-grid {
  align-items: start;
}

.contact-methods {
  display: grid;
  gap: 12px;
  margin-top: 28px;
}

.contact-methods a {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  border: 1px solid #d5e2cf;
  border-radius: 8px;
  padding: 12px 14px;
  background: #f6f7f3;
  color: #17221a;
  font-weight: 850;
}

.contact-methods svg {
  color: var(--brand-olive);
}

.contact-form {
  display: grid;
  gap: 16px;
  border: 1px solid #dfe9da;
  border-radius: 8px;
  padding: 28px;
  background: #f8faf6;
  box-shadow: 0 20px 60px rgba(22, 47, 29, 0.08);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

label {
  display: grid;
  gap: 8px;
  color: #26352a;
  font-size: 0.88rem;
  font-weight: 900;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid #cfdcc8;
  border-radius: 8px;
  padding: 13px 14px;
  background: #ffffff;
  color: #17221a;
  outline: 0;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

textarea {
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--brand-gold);
  box-shadow: 0 0 0 4px rgba(182, 138, 42, 0.16);
}

.contact-form__submit {
  width: 100%;
}

.form-confirmation {
  margin-bottom: 0;
  color: var(--brand-olive);
  font-weight: 800;
}

.footer {
  background: #101a14;
  color: #ffffff;
  padding: 54px 0 28px;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 0.7fr;
  gap: 40px;
  align-items: start;
}

.footer__logo {
  display: block;
  width: 290px;
  max-width: 100%;
  height: 112px;
  margin-bottom: 18px;
  border-radius: 8px;
  background: #ffffff;
  object-fit: contain;
}

.footer p {
  max-width: 480px;
  color: #c7d2c2;
}

.footer strong {
  display: block;
  margin-bottom: 14px;
  color: #ffffff;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 9px;
}

.footer__links button {
  width: fit-content;
  color: #c7d2c2;
  padding: 0;
  text-align: left;
}

.footer__links button:hover {
  color: var(--brand-gold-light);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 38px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 20px;
  color: #9aa897;
  font-size: 0.88rem;
}

@media (max-width: 1080px) {
  h1 {
    font-size: 3.7rem;
  }

  h2 {
    font-size: 2.55rem;
  }

  .nav__links {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    left: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid #dce8d4;
    border-radius: 8px;
    padding: 10px;
    background: rgba(247, 249, 243, 0.98);
    box-shadow: 0 18px 40px rgba(7, 23, 12, 0.16);
  }

  .nav__links--open {
    display: flex;
  }

  .nav__link {
    justify-content: flex-start;
    text-align: left;
  }

  .nav__toggle {
    display: inline-flex;
  }

  .hero__proof,
  .product-grid,
  .quality-grid,
  .export-steps,
  .footer__inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-card__body {
    min-height: 0;
  }

  .best-sellers,
  .origin-grid,
  .shipping-grid,
  .education-grid,
  .contact-grid,
  .quality-checks,
  .local-suppliers,
  .delivery-tracking__heading {
    grid-template-columns: 1fr;
  }

  .delivery-grid {
    grid-template-columns: repeat(3, minmax(240px, 1fr));
    overflow-x: auto;
    padding-bottom: 12px;
    scroll-snap-type: x mandatory;
  }

  .delivery-card {
    scroll-snap-align: start;
  }

  .education-visual {
    min-height: 420px;
  }

  .education-visual img {
    min-height: 420px;
  }
}

@media (max-width: 720px) {
  .section-shell {
    width: calc(100% - 28px);
  }

  .section {
    padding: 74px 0;
  }

  h1 {
    max-width: 330px;
    font-size: 2.24rem;
    line-height: 1.03;
  }

  h2 {
    font-size: 2.05rem;
  }

  .hero {
    min-height: 88svh;
    padding-top: 98px;
  }

  .hero__lead {
    max-width: 330px;
    font-size: 1.02rem;
  }

  .nav {
    top: 10px;
    right: 12px;
    left: 12px;
    width: auto;
    min-height: 60px;
    padding: 8px;
    transform: none;
  }

  .nav__links {
    position: fixed;
    top: 82px;
    right: 12px;
    left: 12px;
  }

  .nav__brand {
    min-width: 0;
  }

  .nav__brand img {
    width: 42px;
    height: 42px;
  }

  .nav__brand strong {
    font-size: 0.96rem;
  }

  .nav__brand small {
    font-size: 0.6rem;
  }

  .nav__toggle {
    position: fixed;
    z-index: 31;
    top: 20px;
    right: 20px;
  }

  .nav__cta {
    display: none;
  }

  .button,
  .hero__actions {
    width: 100%;
  }

  .social-row--hero {
    justify-content: flex-start;
  }

  .product-card {
    height: 620px;
  }

  .product-card__image {
    height: 240px;
  }

  .hero__proof,
  .product-grid,
  .quality-grid,
  .export-steps,
  .delivery-grid,
  .check-list--columns,
  .form-row,
  .footer__inner,
  .footer__bottom {
    grid-template-columns: 1fr;
  }

  .proof-item {
    min-height: 82px;
  }

  .best-sellers {
    padding: 22px;
  }

  .best-sellers__group {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .quality-card__image,
  .quality-card__placeholder {
    height: 360px;
  }

  .shipment-gallery {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }

  .shipment-gallery figure:first-child {
    grid-row: auto;
  }

  .local-suppliers {
    margin-top: 44px;
  }

  .local-suppliers__copy {
    padding: 26px 22px;
  }

  .local-suppliers__copy h3 {
    font-size: 1.65rem;
  }

  .farm-video,
  .farm-video video {
    min-height: 250px;
  }

  .delivery-tracking {
    margin-top: 52px;
    padding-top: 52px;
  }

  .delivery-tracking__heading {
    gap: 18px;
  }

  .delivery-grid {
    overflow: visible;
    padding-bottom: 0;
  }

  .delivery-card__image {
    height: 420px;
  }

  .contact-form {
    padding: 20px;
  }

  .footer__bottom {
    display: grid;
  }
}

@media (prefers-reduced-motion: reduce) {
  :global(html) {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .product-card,
  .product-card__image img,
  .shipment-gallery img,
  .delivery-card__image img,
  .button,
  .social-button {
    transition: none;
  }
}
</style>
