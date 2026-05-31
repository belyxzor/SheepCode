
async function getDiscordCount() {
    try {
        const response = await fetch('https://discord.com/api/v10/invites/qRrd3EMUkE?with_counts=true');
        const data = await response.json();
        
        if (data.approximate_member_count) {
            document.getElementById('member-count').innerText = data.approximate_member_count;
        }
    } catch (error) {
        document.getElementById('member-count').innerText = "Actif";
    }
}

window.addEventListener('DOMContentLoaded', getDiscordCount);



