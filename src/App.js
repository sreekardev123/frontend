import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Form from './components/Form';
// import Form1 from './Form1';  //lasercutshot
import NameCardOne from './components/Templates/NameCardOne';
import NameCardTwo from './components/Templates/NameCardTwo';
import NameCardThree from './components/Templates/NameCardThree';
import NameCardFour from './components/Templates/NameCardFour';
import NameCardFive from './components/Templates/NameCardFive';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templateRef = useRef();

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleTemplateSelect = (index) => {
    setSelectedTemplate(index);
  };

  const downloadPdf = () => {
    if (!templateRef.current) return;
    html2canvas(templateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('namecard.pdf');
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      {!formData && <Form onSubmit={handleFormSubmit} />}

      {formData && selectedTemplate === null && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Choose a Name Card Template</h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div onClick={() => handleTemplateSelect(1)} style={{ cursor: 'pointer' }}>
              <NameCardOne {...formData} />
              <p style={{ textAlign: 'center' }}>Template 1</p>
            </div>
            <div onClick={() => handleTemplateSelect(2)} style={{ cursor: 'pointer' }}>
              <NameCardTwo {...formData} />
              <p style={{ textAlign: 'center' }}>Template 2</p>
            </div>
            <div onClick={() => handleTemplateSelect(3)} style={{ cursor: 'pointer' }}>
              <NameCardThree {...formData} />
              <p style={{ textAlign: 'center' }}>Template 3</p>
            </div>
            <div onClick={() => handleTemplateSelect(4)} style={{ cursor: 'pointer' }}>
              <NameCardFour {...formData} />
              <p style={{ textAlign: 'center' }}>Template 4</p>
            </div>
            <div onClick={() => handleTemplateSelect(5)} style={{ cursor: 'pointer' }}>
              <NameCardFive {...formData} />
              <p style={{ textAlign: 'center' }}>Template 5</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => setFormData(null)} style={{ padding: '10px 20px' }}>
              Back to Form
            </button>
          </div>
        </div>
      )}

      {formData && selectedTemplate !== null && (
        <div style={{ textAlign: 'center' }}>
          <div ref={templateRef} style={{ display: 'inline-block' }}>
            {selectedTemplate === 1 && <NameCardOne {...formData} />}
            {selectedTemplate === 2 && <NameCardTwo {...formData} />}
            {selectedTemplate === 3 && <NameCardThree {...formData} />}
            {selectedTemplate === 4 && <NameCardFour {...formData} />}
            {selectedTemplate === 5 && <NameCardFive {...formData} />}
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={downloadPdf} style={{ marginRight: '10px', padding: '10px 20px' }}>
              Download PDF
            </button>
            <button onClick={() => setSelectedTemplate(null)} style={{ padding: '10px 20px' }}>
              Choose Another Template
            </button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setFormData(null)} style={{ padding: '10px 20px' }}>
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;