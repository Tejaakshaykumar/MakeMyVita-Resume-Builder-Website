import React, { useState } from 'react';
import faqData from './FaqData';
import "./pagestyles.css"

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = faqData.filter((faq) =>
      faq.question.toLowerCase().includes(value)
    );
    setFilteredQuestions(filtered);
  };

  const handleClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <div className='faq'>
    <div className="faq-container">
      <h1>How can we help?</h1>
      <input
        type="text"
        placeholder="Type your question"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="faq-list">
        {filteredQuestions.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleClick(index)}>
              {faq.question}
            </div>
            {selectedQuestion === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
                {/* <div className="related-articles">
                  <h4>Related articles</h4>
                  <ul>
                    {faq.related.map((article, i) => (
                      <li key={i}>{article}</li>
                    ))}
                  </ul>
                </div> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
