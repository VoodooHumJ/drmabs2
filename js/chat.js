// Funcionalidad del chat
function initChat() {
    // Elementos del chat
    var chatDialog = document.getElementById('chatDialog');
    var whatsappFloat = document.getElementById('whatsappFloat');
    var closeChat = document.getElementById('closeChat');
    var sendMessage = document.getElementById('sendMessage');
    
    console.log('Inicializando chat...');
    console.log('chatDialog:', chatDialog);
    console.log('whatsappFloat:', whatsappFloat);
    console.log('closeChat:', closeChat);
    console.log('sendMessage:', sendMessage);
    
    if (chatDialog && whatsappFloat && closeChat && sendMessage) {
        console.log('Elementos del chat encontrados');
        
        // Abrir chat al hacer clic en el botón de WhatsApp
        whatsappFloat.onclick = function(e) {
            e.preventDefault();
            chatDialog.style.display = 'block';
            console.log('Chat abierto');
            return false;
        };
        
        // Cerrar chat
        closeChat.onclick = function() {
            chatDialog.style.display = 'none';
            console.log('Chat cerrado');
            return false;
        };
        
        // Abrir WhatsApp al hacer clic en el botón de enviar
        sendMessage.onclick = function() {
            window.open('https://wa.me/59164296994?text=Hola%20Dr.%20Bolaños%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta', '_blank');
            return false;
        };
    } else {
        console.error('No se encontraron todos los elementos del chat');
        if (!chatDialog) console.error('No se encontró chatDialog');
        if (!whatsappFloat) console.error('No se encontró whatsappFloat');
        if (!closeChat) console.error('No se encontró closeChat');
        if (!sendMessage) console.error('No se encontró sendMessage');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initChat);

// También intentar inicializar inmediatamente si el DOM ya está cargado
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initChat, 1);
}