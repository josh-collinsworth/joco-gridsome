<template>
	<Layout>
		<h1>Get in touch</h1>

		<p class="fancy details">Happy to chat.</p>

		<noscript><h2>Sorry, this form won't work without JavaScript enabled.</h2></noscript>

		<form
			name="contact"
			method="post"
			v-on:submit.prevent="handleSubmit"
			action="/success/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label>
					Don’t fill this out: <input name="bot-field" />
				</label>
			</p>
			<div class="sender-info">
				<div>
					<label for="name" class="label" >Your name</label>
					<input type="text" name="name" v-model="formData.name" />
				</div>
				<div>
					<label for="email">Your email address</label>
					<input type="email" name="email" v-model="formData.email" />
				</div>
			</div>

			<div class="message-wrapper">
				<label for="message">What's on your mind?</label>
				<textarea name="message" v-model="formData.message"></textarea>
			</div>

			<button type="submit">Send</button>
		</form>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			formData: {},
  	}
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
				.join('&')
		},
		handleSubmit(e) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: this.encode({
					'form-name': e.target.getAttribute('name'),
					...this.formData,
				}),
			})
			.then(() => this.$router.push('/success'))
			.catch(error => alert(error))
		}
	}
}
</script>

<style lang="scss">

</style>
