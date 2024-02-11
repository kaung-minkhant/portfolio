import { useEffect, useState } from "react";
import { Tests } from "./tests.styles"
import Markdown from "react-markdown";

export const TestsComponent = () => {
  const [fileContent, setFileContent] = useState();
  const [fileBase64, setFileBase64] = useState();
  const [markdown, setMarkdown] = useState("");

  function getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      setFileBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  useEffect(() => {
    if (fileContent) {
      console.log({ fileContent })
      getBase64(fileContent)
    }
  }, [fileContent])
  useEffect(() => {
    console.log(markdown)
  }, [markdown])
  function upload() { 
    fetch("https://2qr5qnup9a.execute-api.ap-southeast-1.amazonaws.com/development/file_upload", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        type: fileContent.type,
        folder: "testing",
        fileName: fileContent.name,
        file: fileBase64,
      })
    })
    .then((response) => response.json())
    .then(json => console.log({json}))
  }

  return (
    <Tests>
      <input type="file" onChange={e => setFileContent(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
      <div>
        <textarea cols="30" rows="10" onChange={e => {
          setMarkdown(e.target.value.split('\n').join("  \n"))
          // setMarkdown(e.target.value)
        }}></textarea>
      </div>
      <div>
        <Markdown>
          {
            markdown
          }


          {/*  */}
        </Markdown>
      </div>
    </Tests>
  )
}