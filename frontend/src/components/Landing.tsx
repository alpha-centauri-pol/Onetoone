import { useEffect, useRef, useState } from "react";
import { Room } from "./Room";

export const Landing = () => {
    const [name, setName] = useState("");
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setlocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        const audioTrack = stream.getAudioTracks()[0];
        const videoTrack = stream.getVideoTracks()[0];
        setLocalAudioTrack(audioTrack);
        setlocalVideoTrack(videoTrack);
        if (!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack]);
        videoRef.current.play();
    };

    useEffect(() => {
        if (videoRef && videoRef.current) {
            getCam();
        }
    }, [videoRef]);

    if (!joined) {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f0f4f8" }}>
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <h1 style={{ fontSize: "2rem", color: "#333" }}>Welcome to the Chat Room</h1>
                    <p style={{ color: "#666" }}>Please enter your name and join the room</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                    <video
                        autoPlay
                        ref={videoRef}
                        style={{
                            width: "300px",
                            height: "200px",
                            borderRadius: "10px",
                            border: "2px solid #ccc",
                            backgroundColor: "#000",
                        }}
                    ></video>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            padding: "10px",
                            width: "250px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            fontSize: "1rem",
                        }}
                    />
                    <button
                        onClick={() => setJoined(true)}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "1rem",
                            cursor: "pointer",
                        }}
                    >
                        Join
                    </button>
                </div>
            </div>
        );
    }

    return <Room name={name} localAudioTrack={localAudioTrack} localVideoTrack={localVideoTrack} />;
};