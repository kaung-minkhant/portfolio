import { Tests } from "./tests.styles"

export const TestsComponent = () => {
  function download() {
    fetch("https://public-files-store-bucket.s3.ap-southeast-1.amazonaws.com/cv.pdf", {
      mode: 'cors'
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], {
          type: 'application/pdf'
        }))
        const link = document.createElement('a')
        link.href = url
        link.download = "downloaded-file.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  }
  return (
    <Tests>
      <button onClick={download}>Click me</button>
    </Tests>
  )
}