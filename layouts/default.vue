<script setup></script>

<template>
	<div>
		<TheNavbar />
		<main class="container">
			<slot />
		</main>
	</div>
</template>

<style lang="scss" scoped>
	// .container {
	// 	width: 100%;
	// 	max-width: 1300px;
	// 	margin-inline: auto;
	// 	min-height: 100vh;
	// 	background-image: $clr-bg-teal-linear;
	// }
</style>
