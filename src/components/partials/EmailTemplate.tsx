import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
    email: string;
    phoneNumber: string;
    preferredDate: string;
    preferredTime: string;
    consultationType: string;
    healthConcerns: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    phoneNumber,
    preferredDate,
    preferredTime,
    consultationType,
    healthConcerns,
}) => {
    // Create the mailto link with pre-filled subject and body
    const mailtoLink = `mailto:${email}?subject=Appointment Confirmation: ${preferredDate} at ${preferredTime}&body=Dear ${fullName},%0D%0A%0D%0AThank you for requesting an appointment at Dr. Muhammad Zahid Homeopathy Clinic.%0D%0A%0D%0AI am pleased to confirm your ${consultationType} appointment on ${preferredDate} at ${preferredTime}.%0D%0A%0D%0AIf you have any questions before your appointment, please don't hesitate to contact us.%0D%0A%0D%0ABest regards,%0D%0ADr. Muhammad Zahid%0D%0AHomeopathic Physician`;

    return (
        <div style={{
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            color: '#333333',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0',
            lineHeight: '1.6',
            backgroundColor: '#ffffff'
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#0059B3',
                color: 'white',
                padding: '30px 40px',
                borderRadius: '8px 8px 0 0',
                textAlign: 'center'
            }}>
                <h1 style={{
                    margin: '0',
                    fontSize: '24px',
                    fontWeight: '600'
                }}>
                    New Appointment Request
                </h1>
                <p style={{
                    margin: '10px 0 0 0',
                    fontSize: '16px',
                    opacity: '0.9'
                }}>
                    Dr. Muhammad Zahid Homeopathy
                </p>
            </div>

            {/* Introduction */}
            <div style={{
                padding: '30px 40px 20px',
                backgroundColor: '#f8f9fa',
                borderLeft: '1px solid #e9ecef',
                borderRight: '1px solid #e9ecef'
            }}>
                <p style={{
                    margin: '0 0 20px 0',
                    fontSize: '16px',
                    color: '#555'
                }}>
                    You have received a new appointment request from your website:
                </p>

                {/* Patient Information Card */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                    overflow: 'hidden',
                    marginBottom: '25px'
                }}>
                    {/* Patient Name Header */}
                    <div style={{
                        backgroundColor: '#e6f0fa',
                        padding: '15px 20px',
                        borderBottom: '1px solid #e1e8f0'
                    }}>
                        <h2 style={{
                            margin: '0',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#0059B3'
                        }}>
                            Patient Information
                        </h2>
                    </div>

                    {/* Patient Details */}
                    <div style={{ padding: '5px' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse'
                        }}>
                            <tbody>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        width: '40%',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        Full Name:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        {fullName}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        Email:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        <a href={`mailto:${email}`} style={{
                                            color: '#0059B3',
                                            textDecoration: 'none'
                                        }}>
                                            {email}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        Phone Number:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        <a href={`tel:${phoneNumber}`} style={{
                                            color: '#0059B3',
                                            textDecoration: 'none'
                                        }}>
                                            {phoneNumber}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Appointment Details Card */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                    overflow: 'hidden'
                }}>
                    {/* Appointment Header */}
                    <div style={{
                        backgroundColor: '#e6f0fa',
                        padding: '15px 20px',
                        borderBottom: '1px solid #e1e8f0'
                    }}>
                        <h2 style={{
                            margin: '0',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#0059B3'
                        }}>
                            Appointment Details
                        </h2>
                    </div>

                    {/* Appointment Information */}
                    <div style={{ padding: '5px' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse'
                        }}>
                            <tbody>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        width: '40%',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        Preferred Date:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        {preferredDate}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        Preferred Time:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        {preferredTime}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        Consultation Type:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '4px 10px',
                                            backgroundColor: consultationType === 'In-Person' ? '#e6f0fa' : '#f0f7ee',
                                            color: consultationType === 'In-Person' ? '#0059B3' : '#4caf50',
                                            borderRadius: '4px',
                                            fontSize: '13px',
                                            fontWeight: '500'
                                        }}>
                                            {consultationType}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#555',
                                        verticalAlign: 'top'
                                    }}>
                                        Health Concerns:
                                    </td>
                                    <td style={{
                                        padding: '12px 20px',
                                        fontSize: '14px'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#f9f9f9',
                                            padding: '12px 15px',
                                            borderRadius: '4px',
                                            borderLeft: '3px solid #0059B3'
                                        }}>
                                            {healthConcerns}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Action Section */}
            <div style={{
                padding: '25px 40px',
                backgroundColor: '#f8f9fa',
                borderLeft: '1px solid #e9ecef',
                borderRight: '1px solid #e9ecef',
                borderBottom: '1px solid #e9ecef',
                borderRadius: '0 0 8px 8px',
                textAlign: 'center'
            }}>
                <p style={{
                    margin: '0 0 20px 0',
                    fontSize: '16px',
                    color: '#555'
                }}>
                    Please follow up with the patient as soon as possible.
                </p>

                {/* Confirm Appointment Button - Now a functional mailto link */}
                <a
                    href={mailtoLink}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#0059B3',
                        color: 'white',
                        padding: '12px 25px',
                        borderRadius: '4px',
                        fontWeight: '500',
                        fontSize: '14px',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Confirm Appointment
                </a>
            </div>

            {/* Footer */}
            <div style={{
                padding: '20px',
                textAlign: 'center'
            }}>
                <p style={{
                    margin: '0',
                    fontSize: '13px',
                    color: '#888'
                }}>
                    This email was generated from the appointment form on your website.
                </p>
                <p style={{
                    margin: '10px 0 0 0',
                    fontSize: '13px',
                    color: '#888'
                }}>
                    © {new Date().getFullYear()} Dr. Muhammad Zahid Homeopathy. All rights reserved.
                </p>
            </div>
        </div>
    );
};