import React, { useState } from 'react';

function Faq() {
  
    const faqItems = [
        {
          question: 'How do I book a train ticket?',
          answer: 'To book a train ticket, navigate to the booking page, provide your travel details, select a train, and make a payment.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept various payment methods, including credit cards and online payment services. Please check our payment options during the booking process.'
        },
        {
          question: 'Can I cancel my ticket?',
          answer: 'Yes, you can cancel your ticket. Please review our cancellation policy for details and any applicable fees.'
        },
        {
            question: 'Is my personal information secure?',
            answer: 'Yes, we take data security seriously. We use industry-standard encryption to protect your personal information, and we do not share it with third parties without your consent. For more information, please refer to our Privacy Policy.'
            
          },
          {
            question: 'Can I change my travel date after booking?',
            answer: 'Some tickets may be eligible for date changes. Check the terms and conditions for your ticket type. If changes are permitted, you can usually make them online through your account.'
            
          },
          {
            question: 'Can I change my travel date after booking?',
            answer: 'Some tickets may be eligible for date changes. Check the terms and conditions for your ticket type. If changes are permitted, you can usually make them online through your account.'
            
            
          },
          {
            question: 'How do I book a train ticket?',
            answer: 'Enter your departure and arrival stations, along with your travel date.Browse the available trains and select your preferred one,Provide passenger details.Make a secure payment.'
            
            
          },
          {
            question: 'Can I change my travel date after booking?',
            answer: 'Some tickets may be eligible for date changes. Check the terms and conditions for your ticket type. If changes are permitted, you can usually make them online through your account.'
            
            
            
          },
          {
            question: 'What happens if my train is canceled?',
            answer: 'If your train is canceled, you will be eligible for a refund or the option to book another train, depending on the railway operators policy Contact our customer support for assistance.'
            
            
            
          },
    
          {
            question: ' Can I get a refund for a canceled ticket?',
            answer: 'Refund eligibility depends on the type of ticket and the time of cancellation. Review the cancellation policy during the booking process or contact our customer support for details.'
            
            
          },
          {
            question: 'How do I find my ticket after booking?',
            answer: 'After booking, you will receive an email confirmation with your ticket details. You can also log in to your account to access and download your ticket.'
            
            
            
          },
          {
            question: 'What payment methods are accepted?',
            answer: 'We accept various payment methods, including credit cards, debit cards, and online payment services. During the booking process, you can select your preferred payment method.'
            
            
            
          },
          {
            question: 'Are there any additional fees or charges?',
            answer: 'Additional fees, such as service charges or taxes, may apply depending on your booking and payment method. These fees will be displayed before you confirm your booking.'
            
            
          },
          {
            question: 'How do I request an invoice for my booking?',
            answer: 'You can request an invoice for your booking by contacting our customer support team. Please provide your booking details, and we will assist you in generating an invoice.'
            
            
          },
          {
            question: 'Can I choose my seat on the train?',
            answer: 'The availability of seat selection depends on the train operator and ticket type. During the booking process, you may have the option to choose your seat or be assigned one.'
            
            
          },
          {
            question: 'How early should I arrive at the station?',
            answer: 'We recommend arriving at the station at least 30 minutes before your trains departure time to allow for security checks and boarding procedures.'
            
            
          },
          {
            question: 'Can I bring luggage on the train?',
            answer: 'Yes, you can bring luggage on the train. Most trains have designated storage areas for luggage. Be mindful of luggage size and weight restrictions.'
            
            
          },
          {
            question: 'Are pets allowed on trains?',
            answer: 'The policy on pets varies by train operator. Some operators allow small pets, while others may have specific rules and fees. Check with the operator before traveling with pets.'
            
            
          },
          {
            question: 'How can I contact customer support?',
            
            
            answer: 'You can reach our customer support team by visiting our "Contact Us" page on our website. We offer email support and a dedicated phone line for assistance.'
            
            
            
          },
          {
            question: 'What should I do if I encounter a problem during my journey?',
            answer: 'If you encounter any issues during your journey, such as delays or ticket problems, please contact our customer support team immediately for assistance. We are here to help.'
            
            
          },
          {
            question: 'Is there a mobile app available?',
            answer: 'Yes, we offer a mobile app for convenient booking and access to your tickets on the go. You can download it from the App Store or Google Play Store.'
            
            
          },
          {
            question: 'Is it safe to use the mobile app for bookings?',
            answer: 'Yes, our mobile app is secure and uses the same encryption standards as our website. Your payment and personal information are protected.'
            
            
          },
      ];

      const [selectedFaq, setSelectedFaq] = useState(null);

  return (
    <div className='www'>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqItems.map((item, index) => (
          <li key={index} onClick={() => setSelectedFaq(index)}>
            {item.question}
          </li>
        ))}
      </ul>
      {selectedFaq !== null && (
        <div className="terms-container">
             <h2>{faqItems[selectedFaq].question}</h2>
          <p>{faqItems[selectedFaq].answer}</p>
        </div>
      )}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Faq;