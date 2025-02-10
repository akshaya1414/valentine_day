document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('yesBtn').addEventListener('click', function() {
        const responseDiv = document.getElementById('response');
        const responseImg = document.getElementById('responseImg');
        const responseMsg = document.getElementById('responseMsg');

        responseImg.src = 'https://imgcdn.sigstick.com/J5qh9giBfx9PfIGQY8ct/0-1.png'; // Direct URL to the happy image
        responseMsg.textContent = 'Hehe, thanks. I love you too! You mean the world to me da purusha! 🤍🌏';

        responseDiv.style.display = 'block';
    });

    document.getElementById('noBtn').addEventListener('click', function() {
        const responseDiv = document.getElementById('response');
        const responseImg = document.getElementById('responseImg');
        const responseMsg = document.getElementById('responseMsg');

        responseImg.src = 'https://media.tenor.com/lSgJHaor3IAAAAAj/bubu-onetwo.gif'; // Direct URL to the sad image
        responseMsg.textContent = 'Why no? I still love you but think twice! 🥺';

        responseDiv.style.display = 'block';
    });
});