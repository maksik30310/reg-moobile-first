// Убедись, что форма имеет id="regForm"
document.getElementById('regForm').addEventListener('submit', function (e) {
	e.preventDefault()

	// Меняем старые ID на новые: "name" и "password"
	const usernameInput = document.getElementById('name')
	const passwordInput = document.getElementById('password')

	const cleanUser = usernameInput.value.trim().toLowerCase()
	const cleanPass = passwordInput.value.trim().toLowerCase()

	// 1. Получаем текущих юзеров из localStorage
	const users = JSON.parse(localStorage.getItem('users')) || []
	const userExists = users.find(u => u.name === cleanUser)

	if (userExists) {
		alert('Ошибка: Пользователь с таким именем уже зарегистрирован.')
	} else {
		// 2. Сохраняем нового юзера
		users.push({ name: cleanUser, password: cleanPass })
		localStorage.setItem('users', JSON.stringify(users))

		alert('Успех! Регистрация прошла успешно.')
		// Очищаем форму после регистрации
		this.reset()
	}
})
