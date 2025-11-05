import { Download } from "lucide-react";
import { Button } from "./ui/button";

const DownloadPDF = () => {
  const handleDownload = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.querySelector('main');
    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3] as [number, number, number, number],
      filename: 'TheGigAgency-TearSheet.pdf',
      image: { type: 'jpeg' as 'jpeg', quality: 0.95 },
      html2canvas: { 
        scale: 1.5,
        useCORS: true,
        letterRendering: true,
        logging: false
      },
      jsPDF: { 
        unit: 'in' as 'in', 
        format: 'a4' as 'a4', 
        orientation: 'portrait' as 'portrait',
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(element).save();
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
