import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Form2 from './components/Form2';
import Namecard1 from './components/Templates2/Namecard1';
import Namecard2 from './components/Templates2/Namecard2';
import Namecard3 from './components/Templates2/Namecard3';
import Namecard4 from './components/Templates2/Namecard4';
import Namecard5 from './components/Templates2/Namecard5';

const App2 = () => {
  const [data, setData] = useState(null);
  const [styleIndex, setStyleIndex] = useState(null);
  const cardRef = useRef();

  const handleSubmit = (vals) => setData(vals);
  const handleSelect = (i) => setStyleIndex(i);

  const handleDownload = () => {
    if (!cardRef.current) return;
    html2canvas(cardRef.current).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'landscape' });
      const w = pdf.internal.pageSize.getWidth();
      const h = (canvas.height * w) / canvas.width;
      pdf.addImage(img, 'PNG', 0, 0, w, h);
      pdf.save(`board_style_${styleIndex || 'all'}.pdf`);
    });
  };

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
      {!data && <Form2 onSubmit={handleSubmit} />}

      {data && styleIndex === null && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Pick a Board Style</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} onClick={() => handleSelect(i)} style={{ cursor: 'pointer' }}>
                {{
                  1: <Namecard1 {...data} />, 
                  2: <Namecard2 {...data} />, 
                  3: <Namecard3 {...data} />, 
                  4: <Namecard4 {...data} />, 
                  5: <Namecard5 {...data} />
                }[i]}
                <p style={{ textAlign: 'center' }}>Style {i}</p>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={() => setData(null)} style={{ padding: '8px 16px' }}>Back</button>
            </div>
          </div>
        </div>
      )}

      {data && styleIndex !== null && (
        <div style={{ textAlign: 'center' }}>
          <div ref={cardRef} style={{ display: 'inline-block' }}>
            {{
              1: <Namecard1 {...data} />, 
              2: <Namecard2 {...data} />, 
              3: <Namecard3 {...data} />, 
              4: <Namecard4 {...data} />, 
              5: <Namecard5 {...data} />
            }[styleIndex]}
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={handleDownload} style={{ padding: '8px 16px', marginRight: '8px' }}>Download PDF</button>
            <button onClick={() => setStyleIndex(null)} style={{ padding: '8px 16px' }}>Change Style</button>
          </div>
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => setData(null)} style={{ padding: '8px 16px' }}>Start Over</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App2;
