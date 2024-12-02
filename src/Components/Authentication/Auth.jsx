

import { useEffect, useState } from "react";

export default function Auth({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(3); // Track remaining login attempts
    const [isLocked, setIsLocked] = useState(false); // Track if the user is locked out

    const handleSubmit = (e) => {
        e.preventDefault();

        // Normalize email for case-insensitive comparison
        const normalizedEmail = email.toLowerCase();

        // Correct login credentials
        if (normalizedEmail === 'mahal' && password === '120320') {
            setAttempts(3); // Reset attempts
            setIsLocked(false); // Unlock if locked
            onLogin(); // Notify parent component about successful login
        } else {
            setAttempts((prev) => {
                const newAttempts = prev - 1; // Decrease attempts on failure
                if (newAttempts <= 0) {
                    setIsLocked(true); // Lock account after 3 failed attempts
                }
                return newAttempts;
            });
        }
    };

    useEffect(() => {
        // If the account is locked, reset attempts after 1 minute
        if (isLocked) {
            const timer = setTimeout(() => {
                setAttempts(3); // Reset attempts
                setIsLocked(false); // Unlock account
            }, 60000); // 1 minute (60000 ms)

            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }
    }, [isLocked]);

    return (
        <section className="flex items-center justify-center h-[100vh] max-w-lg mx-auto">
            <div className="w-full text-white font-bold p-10 bg-[#669bbc] rounded-md">
                <h1 className="text-5xl">Login</h1>
                <p className="text-lg">
                    Take Note: You have only {attempts} chance{attempts !== 1 ? 's' : ''} to log in!
                </p>
                {isLocked && (
                    <div className="text-red-500 mt-2">
                        <p>Tips: The Email is our CS and the Password is our anniversary.</p>
                        <p>Your account is locked due to too many failed login attempts.</p>
                        <p>Just wait 1 minute to try again.</p>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5 text-black">
                    <input
                        type="text"
                        placeholder="Username"
                        className="h-14 rounded-sm px-5 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLocked}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="h-14 rounded-sm px-5 outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLocked}
                    />
                    <button
                        type="submit"
                        className="bg-[#f5ebe0] h-14 text-black rounded-sm outline-none"
                        disabled={isLocked}
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}
