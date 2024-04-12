import React, { useState } from "react";
import './MessageForm.css';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from "./firebase";


export default function MessageForm() {

    // State to store the message
    const [message, setMessage] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    // Function to handle the message change
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        setSubmitSuccess(false);
    };

    // Function to handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (message !== '') {
            try {
                console.log("Attempting to add document", { content: message, createdAt: serverTimestamp() });
                setIsWaiting(true);
                const docRef = await addDoc(collection(db, "messages"), {
                    content: message,
                    createdAt: serverTimestamp(),
                });
                setIsWaiting(false);
                console.log("Document written with ID: ", docRef.id);
                setSubmitSuccess(true);
                setMessage(''); // Clear the message input after successful submission
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }


    return (
        <>
            <div className="main-container">
                <div className="form-container">
                    <h1 className="messageHeading">Secret Speak!!</h1>
                    <form onSubmit={handleSubmit} className="formStyle">
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Enter your message here"
                            className="textareaStyle"
                            onKeyDown={handleKeyDown}
                        />
                        {submitSuccess && <div className="submitSucessMessage">Your message has been submitted!</div>}
                        <button type="submit" className="buttonStyle">{isWaiting?"Please wait...":"Submit Message"}</button>
                    </form>
                </div>
            </div>
        </>
    );
}