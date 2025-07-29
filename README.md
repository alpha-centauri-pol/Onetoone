## One2One: Video Chat app using WebRTC (p2p)
Here is the full content for your `README.md` file for the **onetoone** video chat project, modeled after Omegle but with minimal setup and no custom name features:

---

````markdown
# onetoone

onetoone is a simple one-to-one video chat web app similar to Omegle. Users are randomly matched with strangers for real-time video calls and messaging. Built using WebRTC, Socket.io, and Express.js.

## Features

- One-on-one random video chat
- Real-time chat messaging
- “Next” button to switch to a new random user
- Works directly in the browser
- No sign-up or account system

## Stack

- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js, Socket.io
- **Video**: WebRTC

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/onetoone.git
cd onetoone
````

### 2. Install backend dependencies

```bash
npm install
```

### 3. Run the server

```bash
node server.js
```

Server will run on `http://localhost:3000` by default.

### 4. Open the app

Visit [http://localhost:3000](http://localhost:3000) in two separate browser windows/tabs to simulate a chat.

## Project Structure

```
onetoone/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── README.md
├── package.json
```

* `public/`: Contains all static frontend assets
* `server.js`: Express server and Socket.io signaling logic

## How It Works

* When a user joins, they're added to a queue.
* If another user is waiting, the server matches them and sets up a WebRTC peer connection using Socket.io for signaling.
* Users can disconnect or click “Next” to leave the current room and be matched again.

## License

This project is open source and available under the [MIT License](LICENSE).

```

---

Let me know if you want to include deployment steps (like for Vercel or Render), or if you want a license file or a `preview.gif` section.
```
