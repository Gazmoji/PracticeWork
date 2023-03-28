const chatMessageTextBox = document.getElementById('chatMessageTextBox')
const usernameTextBox = document.getElementById('usernameTextBox')
const sendMessageButton = document.getElementById('sendMessageButton')
const messagesUL = document.getElementById("messagesUL")

sendMessageButton.addEventListener('click', () => {
    const username = usernameTextBox.value 
    const chatMessage = chatMessageTextBox.value 
    // send the message to server 
    socket.emit('Houston', { username: username, message: chatMessage })
})

socket.on('Houston-Joined', chatMessages => {
    const chatMessagesItems = chatMessages.map(chatMessage => {
        return  `<li>${chatMessage.username}: ${chatMessage.message}</li>`
    })

    messagesUL.innerHTML = chatMessagesItems.join('')
})

socket.on('Houston', (chat) => {
    // console.log(chat) // Chrome Dev Tools console
    const chatMessageLI = `<li>${chat.username}: ${chat.message}</li>`
    //messagesUL.innerHTML += chatMessageLI
    messagesUL.insertAdjacentHTML('beforeend', chatMessageLI)
})