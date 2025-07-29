# One2One - Peer-to-Peer Video Chat Web App

One2One is a lightweight, anonymous one-on-one video chat application built using WebRTC for peer-to-peer video calling and Socket.IO for real-time signaling. Inspired by Omegle, it allows users to connect instantly with random strangers in their browser — no sign-up, no profile, just fast, seamless video chat.

---

## Key Features

* Real-time one-to-one video and audio communication
* Anonymous chat — no accounts or user names
* "Next" button to instantly switch to a new random peer
* Live chat messaging alongside video
* Works directly in modern web browsers
* Built with simplicity — minimalistic frontend and logic

---

## Technology Stack

Frontend:

* HTML
* CSS
* Vanilla JavaScript
* WebRTC for video and audio communication

Backend:

* Node.js
* Express.js
* Socket.IO for peer signaling

---

## How It Works

1. A user opens the app and connects to the server.
2. They are added to a queue.
3. When another user joins, the server pairs them together.
4. Socket.IO is used to exchange WebRTC signaling data.
5. A peer-to-peer video connection is established directly between browsers.
6. Either user can click “Next” to disconnect and look for a new chat partner.

---

## Getting Started Locally

Step 1: Clone the Repository
`git clone https://github.com/your-username/onetoone.git`
`cd onetoone`

Step 2: Install Server Dependencies
`npm install`

Step 3: Run the Application
`node server.js`

Step 4: Open the App
Visit `http://localhost:3000` in two separate browser windows or tabs to simulate two users.

---
## Use Cases

* Learning how peer-to-peer communication works
* Experimenting with WebRTC and signaling servers
* Building minimal video conferencing tools
* Creating anonymous or random chat experiences

---

## Future Improvements (Optional Ideas)

* Add country-based filtering
* Introduce interests or tags
* Add moderation or reporting system
* Implement mobile responsiveness
* Switch to Golang or other backend languages for scale

---

## License

This project is released under the MIT License.
See LICENSE for details.

---

Let me know if you also want:

* Deployment steps (e.g., Render or Railway)
* A `.gitignore` or `LICENSE` file
* Screenshots, preview GIFs, or demo link section
  Just say the word.
