<template>
	<div>
		<h1>Get in touch</h1>
		<p class="fancy">Drop a line if you'd like.</p>
		<form name="contact" method="POST" data-netlify="true">
			<label>Your Name: <input type="text" name="name" /></label>
			<label>Your Email: <input type="email" name="email" /></label>
			<label>Message: <textarea name="message"></textarea></label>
			<button type="submit">Send</button>
		</form>
	</div>
</template>

<style lang="scss">
	form {
		margin-top: 4rem;
	}
	label {
		margin-bottom: 1rem;
	}
</style>
