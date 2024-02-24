import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookPicture from "../../assets/book.png";
import "./BookPreview.scss";

export function BookPreview() {
  const [data, setData] = useState({});
  const [pdfBlob, setPdfBlob] = useState(null);

  console.log(data);

  const fetchPdf = async () => {
    try {
      if (data.pdfName) {
        const response = await fetch(
          `http://localhost:4000/api/get-pdf/${data.pdfName}.pdf`,
          {
            headers: {
              "Content-Type": "application/pdf",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch PDF. Status: ${response.status}`);
        }
        const blob = await response.blob();
        setPdfBlob(blob);
      }
    } catch (error) {
      console.error("Error fetching PDF:", error.message);
    }
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    fetchPdf();
  }, [data]);

  const handleDownload = () => {
    if (pdfBlob) {
      // Create a download link
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfBlob);
      link.download = `${data.pdfName}.pdf`;

      // Append the link to the document and trigger the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    }
  };

  return (
    <div className="book-preview__container">
      {data && (
        <div key={data.id} className="book-preview">
          <img className="book-preview--picture" src={bookPicture} alt="book" />
          <div className="book-preview__content">
            <div className="column">
              <span className="book-preview__content--title">{data.title}</span>
              <span className="book-preview__content--author">
                {data.author}
              </span>
            </div>
            <p className="book-preview__content--description">
              {data.largeDescription}
            </p>
          </div>
          <button onClick={handleDownload} className="book-preview__download">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
