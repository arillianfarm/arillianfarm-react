// src/components/RentalApplicationForm.js

import React, { useState, useEffect, useRef, useMemo } from 'react'; // Added useMemo
// Import 'db' and the new 'firebaseInitialized' flag from your setup
import { db, firebaseInitialized } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';
import {useLocation} from "react-router-dom";


const RentalApplicationForm = () => { // Removed rentalPrice prop
    const location = useLocation();

    // **FIXED LOGIC:** Calculate rentalPrice using useMemo and ensure it's a formatted string.
    const rentalPrice = useMemo(() => {
        const params = new URLSearchParams(location.search);
        // Get formId. It is a string or null.
        const rateId = params.get('formId');

        // 1. Compare to STRING '1'
        // 2. Return a FORMATTED STRING to avoid the Firebase error.
        if (rateId === '1') {
            return '$2,100.00'; // Friends & Family rate
        } else {
            return '$2,500.00'; // Market rate (default)
        }
    }, [location.search]);

    // State for form data (rest remains the same)
    const [formData, setFormData] = useState({
        fullName: '',
        ssn: '',
        dob: '',
        phone: '',
        email: '',
        photoIdType: 'Driver’s License',
        idNumber: '',
        hasPets: 'No',
        petDescription: '',
        numVehicles: '',
        seekLeaseStartDate: '',
        // Current Residence
        residenceType: 'Apartment',
        residenceAddress: '',
        monthlyRent: '',
        leaseStart: '',
        leaseEnd: '',
        reasonForMoving: '',
        // Current Employer
        companyName: '',
        employerAddress: '',
        title: '',
        monthlyIncome: '',
        startDate: '',
        // Consent
        consent: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Use a ref to store the referrer URL safely
    const referrerUrlRef = useRef('');

    // Capture the referrer URL on mount
    useEffect(() => {
        if (typeof document !== 'undefined') {
            referrerUrlRef.current = document.referrer;
        }
    }, []);

    // Static property information (remains the same)
    const propertyInfo = {
        type: 'Home',
        address: '1110 S Mill Ave, Tempe, AZ 85281',
        beds: 3,
        baths: 2,
        sqft: 1401,
        leaseType: 'Fixed term',
        leaseStart: '11/01/2025 or ASAP',
        petsAllowed: 'YES',
        smokingAllowed: 'OUTSIDE ONLY',
        vapingAllowed: 'YES',
        parking: 'Yes 1- 3 cars —Tandem—( gravel uncovered driveway)',
        utilitiesLandlordPays: 'Gas, Water, Sewage, Trash.',
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent) {
            alert('You must agree to the CONSENT & ACKNOWLEDGMENT section to submit the application.');
            return;
        }

        if (!firebaseInitialized || !db) {
            setError("Application service is unavailable. Please try again later.");
            return;
        }

        setIsLoading(true);
        setError(null);

        // 1. Sign in Anonymously
        const auth = getAuth();
        let userUid = 'anonymous';

        try {
            const userCredential = await signInAnonymously(auth);
            userUid = userCredential.user.uid;
        } catch (err) {
            console.error("Anonymous sign-in error:", err);
            setError("Failed to initialize authentication. Please check your connection.");
            setIsLoading(false);
            return;
        }

        // 2. Prepare Data for Firestore
        const applicationData = {
            ...formData,
            // Uses the formatted string from the useMemo calculation
            'monthly-rent-applied': rentalPrice,
            'property-info': propertyInfo,
            'application-date': serverTimestamp(),
            'application-id': uuidv4(),
            'user-uid': userUid,
            'referrer-url': referrerUrlRef.current,
        };

        // 3. Save to Firestore (remains the same)
        try {
            await addDoc(collection(db, 'rental-applicants'), applicationData);

            // Success: clear form and show thank you
            setFormData({
                fullName: '', ssn: '', dob: '', phone: '', email: '', photoIdType: 'Driver’s License',
                idNumber: '', hasPets: 'No', petDescription: '', numVehicles: '', seekLeaseStartDate: '', residenceType: 'Apartment',
                residenceAddress: '', monthlyRent: '', leaseStart: '', leaseEnd: '', reasonForMoving: '',
                companyName: '', employerAddress: '', title: '', monthlyIncome: '', startDate: '', consent: false,
            });
            setIsSubmitted(true); // Show thank you message

        } catch (err) {
            console.error("Error adding rental application: ", err);
            setError("Failed to submit application. Please try again.");
            setIsSubmitted(false);
        } finally {
            setIsLoading(false);
        }
    };

    if (!firebaseInitialized) {
        return <div className="alert alert-danger">Application service is currently unavailable.</div>;
    }

    // A simple, responsive form using Bootstrap classes (assuming you use Bootstrap)
    return (
        <div className="container p-4 my-5 bg-light rounded shadow-lg">
            <h2 className="text-center mb-4">ARIZONA RESIDENTIAL RENTAL APPLICATION</h2>
            {error && <div className="alert alert-danger">{error}</div>}

            {isSubmitted ? (
                <div className="alert alert-success text-center">
                    <h4 className="alert-heading">Application Submitted! Thank You! 🎉</h4>
                    <p>Your application has been successfully submitted for the property at **{propertyInfo.address}**.</p>
                    <p className="mb-0">We will review your information and be in touch soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>

                    {/* Property Details (Non-Editable) */}
                    <div className="card mb-4">
                        <div className="card-header bg-info text-white">THE PROPERTY (FOR APPLICANT INFORMATION)</div>
                        <div className="card-body">
                            <p><strong>Property Address:</strong> {propertyInfo.address}</p>
                            <p><strong>Beds/Baths:</strong> {propertyInfo.beds} / {propertyInfo.baths} ({propertyInfo.sqft} SF)</p>
                            <p><strong>Monthly Rent:</strong> {rentalPrice}/month</p>
                            <p><strong>Deposit:</strong> {rentalPrice}</p>
                            <p><strong>Lease Start Date:</strong> {propertyInfo.leaseStart}</p>
                            <p><strong>Pets/Smoking/Vaping:</strong> Pets: {propertyInfo.petsAllowed} | Smoking: {propertyInfo.smokingAllowed} | Vaping: {propertyInfo.vapingAllowed}</p>
                            <p><strong>Parking:</strong> {propertyInfo.parking}</p>
                            {/* Optional: Show referrer URL for debugging */}
                            {/* <small className="text-muted">Referrer: {referrerUrlRef.current}</small> */}
                        </div>
                    </div>

                    {/* The Applicant Section (rest remains the same) */}
                    <h3 className="mt-4 mb-3 border-bottom pb-2">THE APPLICANT</h3>
                    <div className="row g-3">
                        <div className="col-md-6"><label htmlFor="fullName" className="form-label">Full Name*</label><input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required /></div>
                        <div className="col-md-6"><label htmlFor="ssn" className="form-label">SSN*</label><input type="text" className="form-control" id="ssn" name="ssn" value={formData.ssn} onChange={handleChange} required /></div>
                        <div className="col-md-6"><label htmlFor="dob" className="form-label">Date of Birth*</label><input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /></div>
                        <div className="col-md-6"><label htmlFor="phone" className="form-label">Phone Number*</label><input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /></div>
                        <div className="col-12"><label htmlFor="email" className="form-label">Email*</label><input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required /></div>

                        <div className="col-md-4"><label className="form-label">Photo ID Type*</label><select className="form-select" name="photoIdType" value={formData.photoIdType} onChange={handleChange} required><option value="Driver’s License">Driver’s License</option><option value="Passport">Passport</option><option value="Other">Other</option></select></div>
                        <div className="col-md-8"><label htmlFor="idNumber" className="form-label">ID #*</label><input type="text" className="form-control" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} required /></div>

                        <div className="col-md-4"><label className="form-label">Pet(s)?*</label><select className="form-select" name="hasPets" value={formData.hasPets} onChange={handleChange} required><option value="No">No</option><option value="Yes">Yes</option></select></div>
                        {formData.hasPets === 'Yes' && (
                            <div className="col-md-8"><label htmlFor="petDescription" className="form-label">Pet Description</label><input type="text" className="form-control" id="petDescription" name="petDescription" value={formData.petDescription} onChange={handleChange} placeholder="Breed, weight, age, etc." /></div>
                        )}
                        <div className="col-md-4"><label htmlFor="numVehicles" className="form-label"># Vehicles to park*</label><input type="number" className="form-control" id="numVehicles" name="numVehicles" value={formData.numVehicles} onChange={handleChange} required min="0" max="3" /></div>
                        <div className="col-md-4"><label htmlFor="seekLeaseStartDate" className="form-label">Desired Lease Start Date</label><input type="date"  className="form-control" id="seekLeaseStartDate" name="seekLeaseStartDate" value={formData.seekLeaseStartDate} onChange={handleChange} required min="0" max="3" /></div>
                    </div>

                    {/* Current Residence (rest remains the same) */}
                    <h3 className="mt-5 mb-3 border-bottom pb-2">CURRENT RESIDENCE</h3>
                    <div className="row g-3">
                        <div className="col-md-4"><label className="form-label">Property Type*</label><select className="form-select" name="residenceType" value={formData.residenceType} onChange={handleChange} required><option value="Apartment">Apartment</option><option value="Condominium">Condominium</option><option value="Home">Home</option><option value="Other">Other</option></select></div>
                        <div className="col-12"><label htmlFor="residenceAddress" className="form-label">Property Address*</label><input type="text" className="form-control" id="residenceAddress" name="residenceAddress" value={formData.residenceAddress} onChange={handleChange} required /></div>
                        <div className="col-md-4"><label htmlFor="monthlyRent" className="form-label">Monthly Rent ($)*</label><input type="number" className="form-control" id="monthlyRent" name="monthlyRent" value={formData.monthlyRent} onChange={handleChange} required /></div>
                        <div className="col-md-4"><label htmlFor="leaseStart" className="form-label">Lease Start*</label><input type="date" className="form-control" id="leaseStart" name="leaseStart" value={formData.leaseStart} onChange={handleChange} required /></div>
                        <div className="col-md-4"><label htmlFor="leaseEnd" className="form-label">Lease End*</label><input type="date" className="form-control" id="leaseEnd" name="leaseEnd" value={formData.leaseEnd} onChange={handleChange} required /></div>
                        <div className="col-12"><label htmlFor="reasonForMoving" className="form-label">Reason for Moving*</label><textarea className="form-control" id="reasonForMoving" name="reasonForMoving" rows="2" value={formData.reasonForMoving} onChange={handleChange} required></textarea></div>
                    </div>

                    {/* Current Employer (rest remains the same) */}
                    <h3 className="mt-5 mb-3 border-bottom pb-2">CURRENT EMPLOYER</h3>
                    <div className="row g-3">
                        <div className="col-md-6"><label htmlFor="companyName" className="form-label">Company Name*</label><input type="text" className="form-control" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required /></div>
                        <div className="col-md-6"><label htmlFor="employerAddress" className="form-label">Employer’s Address*</label><input type="text" className="form-control" id="employerAddress" name="employerAddress" value={formData.employerAddress} onChange={handleChange} required /></div>
                        <div className="col-md-6"><label htmlFor="title" className="form-label">Title / Occupation*</label><input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required /></div>
                        <div className="col-md-3"><label htmlFor="monthlyIncome" className="form-label">Monthly Income ($)*</label><input type="number" className="form-control" id="monthlyIncome" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required /></div>
                        <div className="col-md-3"><label htmlFor="startDate" className="form-label">Start Date*</label><input type="date" className="form-control" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required /></div>
                    </div>

                    {/* Consent & Acknowledgement (rest remains the same) */}
                    <h3 className="mt-5 mb-3 border-bottom pb-2">CONSENT & ACKNOWLEDGMENT</h3>
                    <div className="card bg-light p-3 mb-4">
                        <p>I hereby certify that I am at least 18 years of age and that all information given on this application is true and correct. I authorize the Landlord and its agents to obtain an investigative consumer credit report including, but not limited to, credit history, OFAC search, landlord/tenant court record search, criminal record search and registered sex offender search. I authorize the release of information from previous or current landlords, employers, bank representatives, and personal references. I agree to furnish additional credit and/or personal references upon request. I understand incomplete or incorrect information provided in this application may cause a delay in processing which may result in denial of tenancy. This investigation is for resident screening purposes only and is strictly confidential. I hereby hold Landlord and its agents free and harmless of any liability for any damages arising out of any improper use of this information.</p>

                        <p className="fw-bold mt-3">Important information about your rights under the Fair Credit reporting Act:</p>
                        <ul>
                            <li>You have a right to request disclosure of the nature and scope of the investigation.</li>
                            <li>You must be told if information in your file has been used against you.</li>
                            <li>You have a right to know what is in your file, and this disclosure may be free.</li>
                            <li>You have the right to ask for a credit score (there may be a fee for this service).</li>
                            <li>You have the right to dispute incomplete or inaccurate information. Consumer reporting agencies must correct inaccurate, incomplete, or unverifiable information.</li>
                        </ul>
                        <p className="fst-italic small">Consumer Response Center, Room 130-A, Federal Trade Commission, 600 Pennsylvania Avenue N.W., Washington D.C. 20580.</p>

                        <p>
                            <strong>Prior to executing a rental lease agreement, I understand that the property owner/agent will require me to provide a consumer report which may contain public information from one or more of the following consumer reporting agencies:</strong>
                        </p>

                        <ul>
                            <li>Equifax, E.C.I.F., P.O. Box 740241, Atlanta, GA, 30374-0241, (800) 685-1111</li>
                            <li>Trans Union, Regional Disclosure Center, 1561 Orangethorpe Ave., Fullerton, CA, 92631, (714) 738-3800</li>
                            <li>Experian (TRW), Consumer Assistance, P.O. Box 949, Allen, TX, 75002, (888) 397-3742</li>
                        </ul>

                        <div className="form-check mt-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label fw-bold" htmlFor="consent">
                                I acknowledge and consent to the terms above, including the authorization for consumer reports.*
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-success btn-lg" disabled={isLoading || !formData.consent}>
                            {isLoading ? 'Submitting...' : 'Submit Rental Application'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default RentalApplicationForm;