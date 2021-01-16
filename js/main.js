const requestUrl = 'https://reqres.in/api/users?page=2',
	  wrapper = document.getElementById('users');
let usersList = [];

const createTemlate = data => {
	return template = `
	<div class="user">
		<img src="${data.avatar}" alt="${data.first_name}" class="user__avatar">
		<div class="user__data">
			<h4 class="user__firstname">First Name: ${data.first_name}</h4>
			<h4 class="user__lastname">Last Name: ${data.last_name}</h4>
			<p class="user__id">ID: ${data.id}</p>
			<p class="user__email">E-MAIL: <a href="mailto:${data.email}" class="user__email-link">${data.email}</a></p>
		</div>
	</div>
	`
}

const getUser = url => {
	fetch(url)
		.then(response => response.json())
		.then(json => {
			console.log(json);
			usersList = json.data;
			usersList.forEach(item => {
				wrapper.innerHTML +=createTemlate(item)
			});
		})
}

getUser(requestUrl);