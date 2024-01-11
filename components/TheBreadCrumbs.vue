<script setup>
	const route = useRoute();

	const breadcrumbs = computed(() => {
		const pathArr = route.fullPath.substring(1).split("/");
		const crumbs = [];
		let path = "";

		pathArr.forEach((crumb, index) => {
			const titleWithoutNumber = crumb.match(/^\d+-(.*)/);
			const titleFiltered = titleWithoutNumber
				? titleWithoutNumber[1]
				: crumb;
			const titleWithoutHyphens = titleFiltered.split("-").join(" ");
			const title = titleWithoutHyphens.split("_").join("/");
			path = `${path}/${crumb}`;

			crumbs.push({
				title: title,
				path: path,
			});
		});

		return crumbs;
	});
</script>

<template>
	<nav class="breadcrumbs">
		<ol class="breadcrumbs__list">
			<li class="breadcrumbs__item">
				<NuxtLink to="/">home</NuxtLink>
			</li>
			<li
				v-for="(crumb, index) in breadcrumbs"
				:key="index"
				class="breadcrumbs__item"
			>
				<NuxtLink :to="crumb.path">{{ crumb.title }}</NuxtLink>
			</li>
		</ol>
	</nav>
</template>

<style lang="scss" scoped>
	.breadcrumbs {
		margin-bottom: 4rem;
		text-transform: uppercase;
		font-size: 1.4rem;
	}
	.breadcrumbs__list {
		display: flex;
	}
	.breadcrumbs__item {
		color: $clr-txt-inactive;
		&::after {
			content: "|";
			opacity: 0.2;
			margin-inline: 1rem;
		}

		&:last-of-type {
			&::after {
				content: none;
			}
		}

		&:hover,
		&:focus {
			color: $clr-txt-light;
			transition: $tr-02;
		}
	}
</style>
