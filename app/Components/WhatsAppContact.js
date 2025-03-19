'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WhatsAppContact() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Phone number with India country code
  const phoneNumber = '917276241430';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <div className="whatsapp-badge-container" style={{
      backgroundColor: '#1E1E1E',
      borderRadius: '10px',
      padding: '15px',
      width: '350px',
      border: '1px solid #333',
    }}>
      <h3 style={{ 
        color: 'white', 
        fontSize: '1.25rem', 
        fontWeight: 'bold', 
        marginBottom: '15px',
        borderBottom: '1px solid #333',
        paddingBottom: '10px'
      }}>
        WhatsApp
      </h3>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '15px' 
      }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          marginRight: '15px',
          border: '2px solid #25D366'
        }}>
          <Image 
            src="/My_Pic_Profile.jpg" 
            alt="Profile Picture" 
            width={60} 
            height={60}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px' }}>Omkar Jadhav</h4>
          <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>Available for chat</p>
        </div>
      </div>
      
      <p style={{ 
        color: '#ddd', 
        fontSize: '0.9rem', 
        marginBottom: '15px',
        lineHeight: '1.4'
      }}>
        Feel free to reach out to me directly on WhatsApp for quick responses to your inquiries.
      </p>
      
      <div 
        className="whatsapp-badge"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? '#128C7E' : '#25D366',
          borderRadius: '8px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: isHovered ? '0 4px 12px rgba(37, 211, 102, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
        }}
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <div style={{ marginRight: '12px', position: 'relative', width: '24px', height: '24px' }}>
          <Image 
            src="/whatsapp-logo.svg" 
            alt="WhatsApp" 
            width={24} 
            height={24}
            style={{ 
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)', // Makes the SVG white to match text color
            }}
          />
        </div>
        <div style={{ color: 'white', fontWeight: 'bold' }}>
          Contact me on WhatsApp
        </div>
      </div>
    </div>
  );
} 