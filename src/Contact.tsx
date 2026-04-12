import "./contact.css";
import Header from "./Header";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
	const [state, handleSubmit] = useForm("xyklgbra");

	if (state.succeeded) {
		return (
			<div className="container">
				<Header />
				<div className="contact-page">
					<div className="contact-container">
						<h2>Thanks for reaching out!</h2>
						<p>
							Your request has been sent successfully. We will get back to you
							as soon as possible.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container">
			<Header />
			<div className="contact-page">
				<div className="contact-container">
					<h2>Contact Form</h2>

					<form className="contact-form" onSubmit={handleSubmit}>
						{/* Name */}
						<div className="form-group">
							<label htmlFor="name">Full Name</label>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Your name"
								required
							/>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
							/>
						</div>

						{/* Email */}
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Your email"
								required
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
						</div>

						{/* Phone */}
						<div className="form-group">
							<label htmlFor="phone">Phone Number</label>
							<input
								id="phone"
								type="tel"
								name="phone"
								placeholder="Your phone number"
							/>
						</div>

						{/* Service */}
						<div className="form-group">
							<label htmlFor="service">Service Needed</label>
							<select id="service" name="service" required>
								<option value="">Select a service</option>
								<option value="Carpentry">Carpentry</option>
								<option value="Painting">Painting</option>
								<option value="Remodeling">Remodeling</option>
								<option value="Flooring">Flooring</option>
								<option value="Drywall">Drywall</option>
								<option value="Fencing">Fencing</option>
								<option value="Other">Other</option>
							</select>
						</div>

						{/* Message */}
						<div className="form-group">
							<label htmlFor="message">Project Details</label>
							<textarea
								id="message"
								name="message"
								placeholder="Tell us about your project..."
								rows={5}
								required
							/>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
						</div>

						{/* Submit */}
						<button
							type="submit"
							className="submit-btn"
							disabled={state.submitting}
						>
							Submit Request
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
