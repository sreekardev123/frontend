import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Form1 from './Form1';
import NameCards1 from './components/Templates1/NameCards1';
import NameCards2 from './components/Templates1/NameCards2';
import NameCards3 from './components/Templates1/NameCards3';
import NameCards4 from './components/Templates1/NameCards4';
import NameCards5 from './components/Templates1/NameCards5';

// ss name plates
const App1 = () => {
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
      const pdf = new jsPDF({ orientation: 'landscape' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`namecard_${selectedTemplate}.pdf`);
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Form Step */}
      {!formData && <Form1 onSubmit={handleFormSubmit} />}

      {/* Template Selection Step */}
      {formData && selectedTemplate === null && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Select a Name Card Style</h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div onClick={() => handleTemplateSelect(1)} style={{ cursor: 'pointer' }}>
              <NameCards1 {...formData} />
              <p style={{ textAlign: 'center' }}>Style 1</p>
            </div>
            <div onClick={() => handleTemplateSelect(2)} style={{ cursor: 'pointer' }}>
              <NameCards2 {...formData} />
              <p style={{ textAlign: 'center' }}>Style 2</p>
            </div>
            <div onClick={() => handleTemplateSelect(3)} style={{ cursor: 'pointer' }}>
              <NameCards3 {...formData} />
              <p style={{ textAlign: 'center' }}>Style 3</p>
            </div>
            <div onClick={() => handleTemplateSelect(4)} style={{ cursor: 'pointer' }}>
              <NameCards4 {...formData} />
              <p style={{ textAlign: 'center' }}>Style 4</p>
            </div>
            <div onClick={() => handleTemplateSelect(5)} style={{ cursor: 'pointer' }}>
              <NameCards5 {...formData} />
              <p style={{ textAlign: 'center' }}>Style 5</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => setFormData(null)} style={{ padding: '10px 20px' }}>
              Back to Form
            </button>
          </div>
        </div>
      )}

      {/* PDF Download Step */}
      {formData && selectedTemplate !== null && (
        <div style={{ textAlign: 'center' }}>
          <div ref={templateRef} style={{ display: 'inline-block' }}>
            {selectedTemplate === 1 && <NameCards1 {...formData} />}
            {selectedTemplate === 2 && <NameCards2 {...formData} />}
            {selectedTemplate === 3 && <NameCards3 {...formData} />}
            {selectedTemplate === 4 && <NameCards4 {...formData} />}
            {selectedTemplate === 5 && <NameCards5 {...formData} />}
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={downloadPdf} style={{ marginRight: '10px', padding: '10px 20px' }}>
              Download PDF
            </button>
            <button onClick={() => setSelectedTemplate(null)} style={{ padding: '10px 20px' }}>
              Choose Another Style
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

export default App1;
