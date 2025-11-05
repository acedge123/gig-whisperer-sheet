import { Download } from "lucide-react";
import { Button } from "./ui/button";

const DownloadPDF = () => {
  const handleDownload = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.querySelector('main');
    const opt = {
      margin: 0.5,
      filename: 'TheGigAgency-TearSheet.pdf',
      image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in' as 'in', format: 'letter' as 'letter', orientation: 'portrait' as 'portrait' }
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
