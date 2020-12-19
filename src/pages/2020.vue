<template>
	<div class="container">
		<div class="inner-container">
			<h1>Happy Holidays 2020 from the Collinsworths</h1>
			<p class="fancy">
				Josh, Erika, Thomas, and Griff
			</p>

			<br>

			<p>2020 has been a long, challenging, and unforgettable year—but also one filled with many firsts, much love, and hope for the future. In lieu of sending our traditional Christmas card this year, we elected to share these, our favorite photos of the year (in no particular order).</p>

			<p><strong>Happy holidays and a brighter new year.</strong></p>
		</div>
		<div id="photo-grid">
			<a v-for="photo in photos" :href="require(`@/assets/images/2020_images/${photo}`)" :key="photo">
				<g-image :src="require(`!!assets-loader!@images/2020_images/${photo}`)" alt="" />
			</a>
		</div>
	</div>
</template>


<script>
export default {
	data: () => ({
		photos: [
			"PXL_20201002_133702129.PORTRAIT-01.COVER.jpg",
			"IMG_20200719_201529.jpg",
			"PXL_20201014_161353437.PORTRAIT-01.COVER.jpg",
			"IMG_20200119_113022.jpg",
			"00100lrPORTRAIT_00100_BURST20200904192120016_COVER.jpg",
			"IMG_20200421_195658.jpg",
			"IMG_20200827_120622.jpg",
			"IMG_20200307_114715.jpg",
			"IMG_20200907_131759.jpg",
			"IMG_20200510_133304.jpg",
			"PXL_20201206_152309783~2.jpg",
			"00100lrPORTRAIT_00100_BURST20200828140315229_COVER.jpg",
			"IMG_20200428_140818.jpg",
			"00100sPORTRAIT_00100_BURST20200827171123050_COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200914174715672_COVER.jpg",
			"IMG_20200321_162327.jpg",
			"IMG_20200520_193608_1.jpg",
			"IMG_20200510_180451.jpg",
			"PXL_20201027_002249557.PORTRAIT-01.COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200910134005933_COVER.jpg",
			"PXL_20201031_224830368.PORTRAIT-01.COVER.jpg",
			"PXL_20201214_232914641.MP.jpg",
			"IMG_20200321_162342.jpg",
			"PXL_20201201_005950753.PORTRAIT.jpg",
			"PXL_20201031_224910261.PORTRAIT-01.COVER.jpg",
			"PXL_20201120_003942169.PORTRAIT.jpg",
			"00100lrPORTRAIT_00100_BURST20200919113653830_COVER.jpg",
			"PXL_20200927_225222748.PORTRAIT-01.COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200912174520378_COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200822173254242_COVER.jpg",
			"IMG_20200430_130016.jpg",
			"IMG_20200208_131537.jpg",
			"IMG_20200301_162723.jpg",
			"PXL_20201205_195949360.PORTRAIT.jpg",
			"PXL_20201127_234321438.PORTRAIT.jpg",
			"00100lrPORTRAIT_00100_BURST20200823174408900_COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200826105427509_COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200909172738010_COVER.jpg",
			"PXL_20201025_003403707.PORTRAIT-01.COVER.jpg",
			"PXL_20201123_011304522.PORTRAIT.jpg",
			"IMG_20200224_175456.jpg",
			"PXL_20201011_225038279.PORTRAIT-01.COVER.jpg",
			"PXL_20200923_133851270.PORTRAIT-01.COVER.jpg",
			"IMG_20200624_182040.jpg",
			"00100lrPORTRAIT_00100_BURST20200830132717178_COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200907134248178_COVER.jpg",
			"IMG_20200105_123615.jpg",
			"IMG_20200531_142844.jpg",
			"2020-1-24-78035A.jpg",
			"PXL_20201031_230020570.PORTRAIT-01.COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200830132815676_COVER.jpg",
			"IMG_20200105_180434.jpg",
			"IMG_20200224_175444.jpg",
			"IMG_20200314_140153.jpg",
			"PXL_20201014_224524675.PORTRAIT-01.COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200823092616585_COVER.jpg",
			"PXL_20201011_224807260.PORTRAIT-01.COVER.jpg",
			"PXL_20201027_011120762.MP.jpg",
			"PXL_20201031_221144247.PORTRAIT-01.COVER.jpg",
			"PXL_20201031_230618167.PORTRAIT-01.COVER.jpg",
			"IMG_20200502_180932.jpg",
			"PXL_20201126_155652443.PORTRAIT.jpg",
			"IMG_20200710_181105.jpg",
			"IMG_20200420_172728.jpg",
			"00100lrPORTRAIT_00100_BURST20200821093550634_COVER.jpg",
			"IMG_20200510_133246.jpg",
			"00100lrPORTRAIT_00100_BURST20200829134122906_COVER.jpg",
			"PXL_20201011_225003396.PORTRAIT-01.COVER.jpg",
			"00100lrPORTRAIT_00100_BURST20200904190907145_COVER.jpg",
			"IMG_20200307_172536.jpg",
			"IMG_20200117_190614.jpg",
			"IMG_20200428_173618.jpg",
			"PXL_20200926_134109611.PORTRAIT-01.COVER.jpg",
			"PXL_20201123_011312557.PORTRAIT.jpg",
			"00100lrPORTRAIT_00100_BURST20200912113947860_COVER.jpg",
			"IMG_20200314_140200.jpg",
			"00100lrPORTRAIT_00100_BURST20200907133718890_COVER.jpg",
			"IMG_20200331_094156.jpg",
			"IMG_20200511_195610.jpg",
			"PXL_20201011_225216333.PORTRAIT-01.COVER.jpg",
			"IMG_20200105_082023.jpg",
			"IMG_20200323_193120.jpg",
			"IMG_20200510_135206.jpg",
			"00100lrPORTRAIT_00100_BURST20200828084243060_COVER.jpg",
			"PXL_20201206_152344994.PORTRAIT.jpg",
			"00100lrPORTRAIT_00100_BURST20200908171333765_COVER.jpg",
			"IMG_20200421_185823.jpg",
			"00100lrPORTRAIT_00100_BURST20200905111810380_COVER.jpg",
			"IMG_20200705_192239.jpg",
			"IMG_20200307_162045.jpg",
			"PXL_20200923_224540806.jpg",
			"00100lrPORTRAIT_00100_BURST20200915084527060_COVER.jpg",
			"IMG_20200602_095301_1.jpg",
			"IMG_20200307_174548.jpg",
			"IMG_20200301_162744.jpg",
			"PXL_20201031_224547989._exported_949_1604282242927.jpg",
			"00100lrPORTRAIT_00100_BURST20200822111117205_COVER.jpg",
			"PXL_20201112_145157379.PORTRAIT-01.COVER.jpg",
			"PXL_20201126_185205361.PORTRAIT.jpg",
			"00100lrPORTRAIT_00100_BURST20200826182507383_COVER.jpg",
			"IMG_20200610_133659~2.jpg",
			"IMG_20200803_121602~4.jpg",
			"PXL_20201003_224347441.PORTRAIT-01.COVER.jpg",
			"IMG_20200605_175946.jpg",
			"IMG_20200105_165904.jpg",
			"00100lrPORTRAIT_00100_BURST20200823092350761_COVER.jpg",
			"PXL_20201126_155647239.PORTRAIT.jpg",
			"PXL_20201128_183259249.PORTRAIT.jpg",
			"PXL_20201107_185645772.PORTRAIT-01.COVER.jpg",
			"IMG_20200403_195119.jpg",
			"PXL_20201206_013939889.MP.jpg",
			"PXL_20201123_011247249.PORTRAIT.jpg",
			"PXL_20201120_003917904.PORTRAIT.jpg",
			"IMG_20200620_193427.jpg"
		]
	}),

	mounted() {
		const images = document.querySelectorAll('a')

		images.forEach(image => {
			if (image.width > image.height) {
				console.log(image.width, image.height)
				image.style.gridColumn = "span 2"
			}
		})
	}
}
</script>



<style scoped lang="scss">
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

#photo-grid {
	width: 100vw;
	display: flex;
	/* grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)) */
	flex-direction: column;
	max-height: 4020vw;
	flex-wrap: wrap;

	a {
		width: 100%;
		display: block;
		padding: 0;
		margin: 0;

		img {
			display: block;
			width: 100%;
		}
	}

	@media (min-width: 800px) {
		max-height: 3640vw;


		a {
			width: 50%;
		}
	}


	@media (min-width: 1200px) {
		max-height: 1630vw;

		a {
			width: 33.3%;
		}
	}

}
</style>

