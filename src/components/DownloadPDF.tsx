import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { jsPDF } from "jspdf";

const DownloadPDF = () => {
  const handleDownload = async () => {
    const html2canvas = (await import("html2canvas")).default;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    
    // Get all sections
    const sections = document.querySelectorAll('main > section');
    
    // Page 1: Hero + Snapshot
    const page1Container = document.createElement('div');
    page1Container.style.width = '210mm';
    page1Container.style.background = '#050505';
    page1Container.style.color = '#fafafa';
    page1Container.style.padding = '20px';
    page1Container.appendChild(sections[0].cloneNode(true));
    page1Container.appendChild(sections[1].cloneNode(true));
    document.body.appendChild(page1Container);
    
    const canvas1 = await html2canvas(page1Container, { 
      scale: 2, 
      useCORS: true,
      backgroundColor: '#050505'
    });
    const img1 = canvas1.toDataURL('image/jpeg', 0.95);
    const imgWidth1 = pageWidth - (margin * 2);
    const imgHeight1 = (canvas1.height * imgWidth1) / canvas1.width;
    pdf.addImage(img1, 'JPEG', margin, margin, imgWidth1, imgHeight1);
    document.body.removeChild(page1Container);
    
    // Page 2: Remaining sections
    pdf.addPage();
    const page2Container = document.createElement('div');
    page2Container.style.width = '210mm';
    page2Container.style.background = '#050505';
    page2Container.style.color = '#fafafa';
    page2Container.style.padding = '20px';
    for (let i = 2; i < sections.length; i++) {
      page2Container.appendChild(sections[i].cloneNode(true));
    }
    document.body.appendChild(page2Container);
    
    const canvas2 = await html2canvas(page2Container, { 
      scale: 2, 
      useCORS: true,
      backgroundColor: '#050505'
    });
    const img2 = canvas2.toDataURL('image/jpeg', 0.95);
    const imgWidth2 = pageWidth - (margin * 2);
    const imgHeight2 = (canvas2.height * imgWidth2) / canvas2.width;
    pdf.addImage(img2, 'JPEG', margin, margin, imgWidth2, imgHeight2);
    document.body.removeChild(page2Container);
    
    pdf.save('TheGigAgency-TearSheet.pdf');
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-50 bg-accent hover:bg-accent/90 text-background font-bold shadow-lg"
      size="lg"
    >
      <Download className="mr-2 h-5 w-5" />
      Download PDF
    </Button>
  );
};

export default DownloadPDF;
