# Run the bilingual onboarding demo

This is a dependency-free, local browser prototype. From the repository root, start a static HTTP server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. The app is responsive for narrow Android screens and includes a web app manifest. Stop the server with `Ctrl+C`.

The walkthrough uses fictional content only. Choose the one-tap sample simulation to explore a verification result; it does not send or check an OTP. Simulated provider outcomes never verify a person, and the app does not connect to external services. Sample progress is kept in this browser's local storage; use **Start over** to clear it. Export and deletion controls only show the identity-check gate and do not create, download, or delete data.
