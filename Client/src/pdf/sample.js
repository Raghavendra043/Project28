import WebViewer from '@pdftron/webviewer';
import {useEffect, useRef} from 'react';


function MyComponent () {
  const viewerDiv = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
      },
      viewerDiv.current ).then((instance) => {
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewerDiv} style={{height: "100vh"}}></div>
    </div>
  );
}

export default MyComponent;