const input = document.querySelector('input');
const button = document.querySelector('button');
const messages = document.querySelector('.messages');

button.addEventListener('click', () => {
	const userInput = input.value;
	if (userInput !== '') {
		messages.innerHTML += `
			<li class="user-message">${userInput}</li>
			<li class="bot-message">I'm sorry, I'm just a demo chatbot.</li>
		`;
		input.value = '';
		messages.scrollTop = messages.scrollHeight;
	}
});

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const userInput = input.value;
		if (userInput !== '') {
			messages.innerHTML += `
				<li class="user-message">${userInput}</li>
				<li class="bot-message">I'm sorry, I'm just a demo chatbot.</li>
			`;
			input.value = '';
			messages.scrollTop = messages.scrollHeight;
		}
	}
});

const api = new OpenAI('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');

button.addEventListener('click', () => {
	const userInput = input.value;
	if (userInput !== '') {
		messages.innerHTML += `
			<li class="user-message">${userInput}</li>
			<li class="bot-message">Loading...</li>
		`;
		input.value = '';
		messages.scrollTop = messages.scrollHeight;
		api.complete({
			model: 'davinci',
			prompt: `${userInput}\nAI:`,
			maxTokens: 150,
			n: 1,
			stop: '\n'
		}).then((response) => {
			const botResponse = response.data.choices[0].text.trim();
			messages.innerHTML += `
				<li class="bot-message">${botResponse}</li>
			`;
			messages.scrollTop = messages.scrollHeight;
		}).catch((error) => {
			console.log(error);
		});
	}
});

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const userInput = input.value;
		if (userInput !== '') {
			messages.innerHTML += `
				<li class="user-message">${userInput}</li>
				<li class="bot-message">Loading...</li>
			`;
			input.value = '';
			messages.scrollTop = messages.scrollHeight;
			api.complete({
				model: 'davinci',
				prompt: `${userInput}\nAI:`,
				maxTokens: 150,
				n: 1,
				stop: '\n'
			}).then((response) => {
				const botResponse = response.data.choices[0].text.trim();
				messages.innerHTML += `
					<li class="bot-message">${botResponse}</li>
				`;
				messages.scrollTop = messages.scrollHeight;
			}).catch((error) => {
				console.log(error);
			});
		}
	}
});
