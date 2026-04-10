import "./contact.css";
import Header from "./Header";

export default function Contact() {
	return (
        <div className="container">
			<Header />
		{/* contact form */}
            <div className="contact-page">
                <div className="contact-container">
                    <h2>Contact Form</h2>

                    <form className="contact-form">
                        {/* Name */}
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your name" required />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your email" required />
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Your phone number" />
                        </div>

                        {/* Service */}
                        <div className="form-group">
                            <label>Service Needed</label>
                            <select required>
                                <option value="">Select a service</option>
                                <option>Carpentry</option>
                                <option>Painting</option>
                                <option>Remodeling</option>
                                <option>Flooring</option>
                                <option>Drywall</option>
                                <option>Fencing</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label>Project Details</label>
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={5}
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="submit-btn">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
	);
}
