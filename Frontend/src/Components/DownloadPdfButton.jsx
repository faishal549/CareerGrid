


import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const DownloadPdfButton = ({ resumeRef }) => {
    const handleDownload = async () => {
        const input = resumeRef.current;
        if (!input) {
            alert("Resume not found!");
            return;
        }

        // Clean fix for unsupported color: canvases ignore CSS variables and weird color functions
        // But just in case, override here if needed

        // Disable print:hidden for PDF print
        try {
            const canvas = await html2canvas(input, {
                backgroundColor: "#ffffff", // Fix background to white
                useCORS: true, // if you have images from other domains
                // Remove scale if images look blurry: scale: 2,
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(
                imgData,
                'PNG',
                0, 0,
                canvas.width, canvas.height
            );
            pdf.save('resume.pdf');

        } catch (error) {
            alert("PDF Generation failed: " + error.message);
            console.log(error);
        }
    };

    return (
        <button
            className="btn btn-primary"
            onClick={handleDownload}
        >
            Download as PDF
        </button>
    );
};
export default DownloadPdfButton;
