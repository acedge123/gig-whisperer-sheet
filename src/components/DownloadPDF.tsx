import { Download } from "lucide-react";
import { Button } from "./ui/button";

const DownloadPDF = () => {
  const handleDownload = () => {
    window.print();
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
