// import { collection, addDoc } from "firebase/firestore";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState, useRef, useEffect } from "react";
// import { db } from "../../firebase";

export default function Home() {
	const [csrfToken, setCsrfToken] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [fullNameError, setFullNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const formRef = useRef();

	const validateFullName = (fullName) => {
		return fullName.length >= 3;
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePhone = (phone) => {
		const re = /^\d{10}$/;
		return re.test(phone);
	};

	const handleFullNameChange = (event) => {
		setFullName(event.target.value);
		if (!validateFullName(event.target.value)) {
			setFullNameError("Full name must be at least 3 characters long");
		} else {
			setFullNameError("");
		}
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		if (!validateEmail(event.target.value)) {
			setEmailError("Invalid email address");
		} else {
			setEmailError("");
		}
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
		if (!validatePhone(event.target.value)) {
			setPhoneError("Phone number must be 10 digits long");
		} else {
			setPhoneError("");
		}
	};

	useEffect(() => {
		// Generate a new CSRF token and store it in state
		const newToken =
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15);
		setCsrfToken(newToken);
	}, []);

	const submitContact = async (e) => {
		e.preventDefault();
		if (!csrfToken) {
			alert("CSRF token verification failed");
		}

		// const docRef = await addDoc(collection(db, "users"), {
		// 	name: fullName,
		// 	email,
		// 	phone,
		// 	csrfToken,
		// });
		alert("Form submitted");
		setPhone("");
		setEmail("");
		setFullName("");
	};

	return (
		<>
			<Head>
				<title>Next Firebase Form</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.form}>
					<h1 className={styles.form_header}>{"Contact Us"}</h1>
					<form
						ref={formRef}
						onSubmit={submitContact}
						className={styles.form_content}
					>
						<input
							required
							placeholder="Name*"
							type={"text"}
							minLength={3}
							maxLength={25}
							className={styles.form_input}
							value={fullName}
							onChange={handleFullNameChange}
						/>
						<p className={styles.errorMsg}>{fullNameError}</p>
						<input
							required
							placeholder="Email Address*"
							type={"email"}
							className={styles.form_input}
							value={email}
							onChange={handleEmailChange}
						/>{" "}
						<p className={styles.errorMsg}>{emailError}</p>
						<input
							required
							placeholder="Phone Number*"
							type={"text"}
							className={styles.form_input}
							value={phone}
							onChange={handlePhoneChange}
						/>{" "}
						<p className={styles.errorMsg}>{phoneError}</p>
						<button type="submit" className={styles.button}>
							Send
						</button>
					</form>
				</div>
			</main>
		</>
	);
}
