<template>
	<div class="container">
		<div id="top" class="inner-container">
			<h1>Happy Holidays 2020 from the Collinsworths</h1>
			<p class="fancy">
				Josh, Erika, Thomas, and Griff
			</p>

			<br>

			<p>
				This has been a long, challenging, and unforgettable year—but also one filled with
				many firsts and milestones, much love, and a new hope for the future.
			</p>

			<p>
				In lieu of sending our traditional holiday card this year, we decided to build this page,
				to share our (<em>many</em>) favorite photos from 2020 with you.
			</p>

			<br>

			<p><strong>Happy holidays and a brighter new year, friends and loved ones.</strong></p>
		</div>

		<div class="lightbox" v-if="lightboxPhoto || lightboxPhoto === 0" @click="lightboxPhoto = null" @keydown="lightboxPhoto++">
			<button v-if="lightboxPhoto > 0" @click.stop="previousPhoto" class="prev-button">&lsaquo;</button>
			<g-image :src="require(`!!assets-loader!@images/2020_images/${photos[lightboxPhoto].name}`)" alt="" />
			<span class="lightbox__info">
				{{ photoDate(photos[lightboxPhoto].name) }}
				• 
				{{ lightboxPhoto + 1 }} of {{ photos.length }}
			</span>
			<button v-if="lightboxPhoto < photos.length - 1" @click.stop="nextPhoto" class="next-button">&rsaquo;</button>
		</div>

		<div id="photo-grid">
			<a v-for="(photo, index) in photos" :href="require(`@/assets/images/2020_images/${photo.name}`)" @click.prevent="startLightbox(index)" :key="photo.name" :class="{ wide: photo.wide, jumbo: photo.jumbo }">
				<g-image :src="require(`!!assets-loader!@images/2020_images/${photo.name}`)" alt="" />
				<span class="date">{{ photoDate(photo.name) }}</span>
			</a>
		</div>

		<div class="inner-container">
			<a href="/2020/#top">Back to top</a>
			&ensp;|&ensp;
			<g-link to="/">Josh's main site</g-link>
		</div>
	</div>
</template>


<script>
export default {
	data: () => ({
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

		photos: [
			{ name: "IMG_20200105_082023.jpg", wide: true },
			{ name: "IMG_20200105_123615.jpg", wide: false },
			{ name: "IMG_20200105.jpg", wide: false },
			{ name: "IMG_20200105_165904.jpg", wide: false },
			{ name: "IMG_20200105_180434.jpg", wide: false },
			{ name: "IMG_20200117_190614.jpg", wide: false },
			{ name: "IMG_20200119_113022.jpg", wide: false },
			{ name: "IMG_20200124_212536~3.jpg", wide: false },
			{ name: "20200124-78035A.jpg", wide: true },
			{ name: "IMG_20200126_181646_01.jpg", wide: true },
			{ name: "IMG_20200126_181907_01.jpg", wide: false },
			{ name: "IMG_20200127_150701_01.jpg", wide: true },
			{ name: "IMG_20200127_150724_01.jpg", wide: true },
			{ name: "IMG_20200127_150734_01.jpg", wide: true },
			{ name: "IMG_20200127_150753_01.jpg", wide: true },
			{ name: "IMG_20200127_150832_01.jpg", wide: false, jumbo: true },
			{ name: "IMG_20200127_150843_01.jpg", wide: true },
			{ name: "IMG_20200208_131537.jpg", wide: false },
			{ name: "IMG_20200224_175444.jpg", wide: true },
			{ name: "IMG_20200224_175456.jpg", wide: true },
			{ name: "IMG_20200301_162723.jpg", wide: false },
			{ name: "IMG_20200301_162744.jpg", wide: false },
			{ name: "IMG_20200307_114715.jpg", wide: false },
			{ name: "IMG_20200307_162045.jpg", wide: true },
			{ name: "IMG_20200307_172536.jpg", wide: true },
			{ name: "IMG_20200307_174548.jpg", wide: false },
			{ name: "IMG_20200314_140153.jpg", wide: false },
			{ name: "IMG_20200314_140200.jpg", wide: false },
			{ name: "IMG_20200321_162327.jpg", wide: false },
			{ name: "IMG_20200321_162342.jpg", wide: false },
			{ name: "IMG_20200323_193120.jpg", wide: false },
			{ name: "IMG_20200331_094156.jpg", wide: false, jumbo: true },
			{ name: "IMG_20200403_195119.jpg", wide: false },
			{ name: "IMG_20200420_172728.jpg", wide: false },
			{ name: "IMG_20200421_185823.jpg", wide: false },
			{ name: "IMG_20200421_195658.jpg", wide: true },
			{ name: "IMG_20200428_140818.jpg", wide: false },
			{ name: "IMG_20200428_173618.jpg", wide: false },
			{ name: "IMG_20200430_130016.jpg", wide: true },
			{ name: "IMG_20200502_180932.jpg", wide: false },
			{ name: "IMG_20200510_133246.jpg", wide: false },
			{ name: "IMG_20200510_133304.jpg", wide: false },
			{ name: "IMG_20200510_135206.jpg", wide: false },
			{ name: "IMG_20200510_180451.jpg", wide: false },
			{ name: "IMG_20200511_195440.jpg", wide: false },
			{ name: "IMG_20200511_195610.jpg", wide: false },
			{ name: "IMG_20200520_193608_1.jpg", wide: false },
			{ name: "IMG_20200531_142844.jpg", wide: false },
			{ name: "IMG_20200602_095301_1.jpg", wide: true },
			{ name: "IMG_20200605_175946.jpg", wide: true },
			{ name: "IMG_20200610_133659~2.jpg", wide: false },
			{ name: "IMG_20200620_193427.jpg", wide: false },
			{ name: "MVIMG_20200621_142719.jpg", wide: false },
			{ name: "IMG_20200623_180734_1.jpg", wide: false },
			{ name: "IMG_20200624_182040.jpg", wide: false },
			{ name: "IMG_20200705_192239.jpg", wide: false },
			{ name: "IMG_20200707_201747.jpg", wide: true },
			{ name: "20200708.jpg", wide: false },
			{ name: "IMG_20200710_181105.jpg", wide: false },
			{ name: "IMG_20200719_144230.jpg", wide: false },
			{ name: "IMG_20200719_201529.jpg", wide: true },
			{ name: "IMG_20200803_121602~4.jpg", wide: true },
			{ name: "00100lrPORTRAIT_00100_BURST20200821093550634_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200822111117205_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200822173254242_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200823092350761_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200823092616585_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200823174408900_COVER.jpg", wide: false, jumbo: true },
			{ name: "00100lrPORTRAIT_00100_BURST20200826105427509_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200826182507383_COVER.jpg", wide: false },
			{ name: "00100sPORTRAIT_00100_BURST20200827171123050_COVER.jpg", wide: false },
			{ name: "IMG_20200827_120622.jpg", wide: true },
			{ name: "00100lrPORTRAIT_00100_BURST20200828084243060_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200828140315229_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200829134122906_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200830132717178_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200830132815676_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200904190907145_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200904192120016_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200905111810380_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200907133718890_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200907134248178_COVER.jpg", wide: false },
			{ name: "IMG_20200907_131759.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200908171333765_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200909172738010_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200910134005933_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200912113947860_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200912174520378_COVER.jpg", wide: false },
			{ name: "IMG_20200912_182032.jpg", wide: false, jumbo: true },
			{ name: "00100lrPORTRAIT_00100_BURST20200914174715672_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200915084527060_COVER.jpg", wide: false },
			{ name: "00100lrPORTRAIT_00100_BURST20200919113653830_COVER.jpg", wide: false },
			{ name: "PXL_20200923_133851270.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20200923_224540806.jpg", wide: false },
			{ name: "PXL_20200926_134109611.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20200927_225222748.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201002_133702129.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201003_224347441.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201011_224807260.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201011_225003396.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201011_225038279.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201011_225216333.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201014_161353437.PORTRAIT-01.COVER.jpg", wide: false, jumbo: true },
			{ name: "PXL_20201014_224524675.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201025_003403707.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201027_002249557.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201027_011120762.MP.jpg", wide: true },
			{ name: "PXL_20201031_221144247.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201031_224547989._exported_949_1604282242927.jpg", wide: false },
			{ name: "PXL_20201031_224830368.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201031_224910261.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201031_230020570.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201031_230618167.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201107_185645772.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201112_145157379.PORTRAIT-01.COVER.jpg", wide: false },
			{ name: "PXL_20201120_003917904.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201120_003942169.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201123_011247249.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201123_011304522.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201123_011312557.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201126_155647239.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201126_155652443.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201126_185205361.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201127_004522287~2.jpg", wide: false, jumbo: true },
			{ name: "PXL_20201127_234321438.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201128_183259249.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201201_005950753.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201205_195949360.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201206_013939889.MP.jpg", wide: false },
			{ name: "PXL_20201206_152309783~2.jpg", wide: false },
			{ name: "PXL_20201206_152344994.PORTRAIT.jpg", wide: false },
			{ name: "PXL_20201214_232914641.MP.jpg", wide: false },
		],
		lightboxPhoto: null
	}),

	mounted() {
		if (typeof window === 'undefined') return

		window.addEventListener('keydown', (e) => {
			if (!e.key) return

			if (e.key === 'ArrowRight') {
				this.nextPhoto()
			} else if (e.key === 'ArrowLeft') {
				this.previousPhoto()
			} else if (e.key === 'Escape') {
				this.lightboxPhoto = null
			}
		})
	},

	methods: {
		startLightbox(index) {
			this.lightboxPhoto = index
		},

		previousPhoto() {
			if (this.lightboxPhoto && this.lightboxPhoto > 0) {
				this.lightboxPhoto -= 1
			}

			this.scrollToPhoto()
		},

		nextPhoto() {
			if ((this.lightboxPhoto || this.lightboxPhoto === 0) && this.lightboxPhoto < this.photos.length - 1) {
				this.lightboxPhoto += 1
			}

			this.scrollToPhoto()
		},

		scrollToPhoto() {
			document.querySelectorAll('#photo-grid a')[this.lightboxPhoto].scrollIntoView()
		},

		photoDate(photo) {
			const date = photo.match(/2020[0-9]{4}/)[0]

			if (!date) return

			const month = date.substr(4, 2)
			const day = parseInt(date.substr(6, 2))
			const readableMonth = this.months[parseInt(month -1)]

			return `${readableMonth} ${day}`
		}
	}
}
</script>



<style scoped lang="scss">
body {
	scroll-behavior: smooth;
}

.inner-container {
	width: 100%;
	margin: 4rem 2rem;
	max-width: 800px;

	@media (min-width: 800px) {
		margin: 4rem 3rem;
	}

	@media (min-width: 1200px) {
		margin: 4rem;
	}
}

.lightbox {
	width: 100vw;
	height: 100vh;
	background: rgba(16,16,16,0.9);
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	&__info {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0.5rem;
		text-align: center;
		font-size: .7rem;
		font-style: italic;
		z-index: 3;
		color: var(--white);
		text-shadow: 0 0 1em black, 0 0 .25em rgba(0,0,0,.5);
	}

	.next-button,
	.prev-button {
		font-size: 2rem;
		width: 2em;
		height: 2em;
		text-align: center;
		line-height: 0.4;
		position: absolute;
		left: 1rem;
		z-index: 5;
		bottom: 1rem;
		border: 1px solid;
		padding: 5px .5rem .5rem;
		opacity: 0.3;
		color: var(--white);

		&:hover,
		&:focus,
		&:active {
			opacity: 0.4;
			background: transparent;
		}

		@media (min-width: 800px) {
			bottom: calc(50vh - 1em);
		}
	}

	.next-button {
		left: unset;
		right: 1rem;
	}

	img {
		max-height: 100vh;
		max-width: 100%;
		object-fit: contain;
	}
}

#photo-grid {
	width: 100vw;
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: 1fr;

	@media (min-width: 660px) {
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		grid-template-rows: repeat(auto-fit, calc(24rem + 10vw));

		a {
			&.wide {
				grid-column: span 2;
			}

			&.jumbo {
				grid-column: span 2;
				grid-row: span 2;
			}
		}
	}

	a {
		width: 100%;
		display: block;
		padding: 0;
		margin: 0;
		height: 100%;
		position: relative;
		overflow: hidden;
		min-height: calc(24rem + 10vw);

		&:hover {
			img {
				transform: scale(1.05);
			}
		}

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform .2s ease-out;
		}

		.date {
			font-size: 0.7rem;
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: 2;
			padding: .2rem .5rem;
			background: rgba(0,0,0,.5);
			color: var(--white);
		}
	}
}
</style>

