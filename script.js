AOS.init()

document.addEventListener('DOMContentLoaded', function () {
	const header = document.getElementById('header')
	const container = document.querySelector('.container')
	const containerTop = container.offsetTop

	window.addEventListener('scroll', function () {
		if (window.scrollY >= containerTop) {
			header.classList.add('fixed-header')
		} else {
			header.classList.remove('fixed-header')
		}
	})

	// Smooth scroll with offset
	document.querySelectorAll('nav ul li a').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			const targetId = this.getAttribute('href').substring(1)
			const targetElement = document.getElementById(targetId)

			window.scrollTo({
				top: targetElement.offsetTop - 100,
				behavior: 'smooth',
			})
		})
	})
})

window.addEventListener('scroll', () => {
	const sections = document.querySelectorAll('section')
	const navLi = document.querySelectorAll('nav ul li a')
	let current = ''

	sections.forEach(section => {
		const sectionTop = section.offsetTop - 100
		if (pageYOffset >= sectionTop) {
			current = section.getAttribute('id')
		}
	})

	navLi.forEach(a => {
		a.classList.remove('active')
		if (a.classList.contains(current)) {
			a.classList.add('active')
		}
	})
})
