import React, { FC, useRef, useState } from 'react'
import { DropFileInputCss } from './DropFileInput.styled'

interface IDropFileInput {
  size: number,
  borderRadius: string,
  name: string,
  onFileChange: Function,
  imagePath: string,
}
const DropFileInput: FC<IDropFileInput> = ({size, borderRadius, name, onFileChange, imagePath }) => {

    const wrapperRef = useRef<HTMLInputElement>(null);

  const [drag, setDrag] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDragStart = (e: any) => {
    e.preventDefault();
    setDrag(true);
    wrapperRef.current?.classList.add("dragover");
  } 
  
  const onDragOver = (e: any) => {
    e.preventDefault();
    setDrag(true);
    wrapperRef.current?.classList.add("dragover");

  }
  const onDragLeave = (e: any) => {
    e.preventDefault();
    setDrag(false);
    wrapperRef.current?.classList.remove("dragover");

  }
  const onDrop = async (e: any) => {
    e.preventDefault();
    wrapperRef.current?.classList.remove("dragover");
    const file = e.dataTransfer.files?.[0];

    console.log("🚀 ~ onDrop ~ file:", file)

    
    if (file) {
     await onFileChange(file)
    }
  }

  return (
    <DropFileInputCss>
      <div style={{ width: `${size}%`, textAlign: "center" }}>
        {drag ? <p>Please, drag inside.</p> : <p>{name}</p>}
      </div>
      <div
        className="drop-file-input"
        ref={wrapperRef}
        onDragEnter={(e) => onDragStart(e)}
        onDragLeave={(e) => onDragLeave(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e)}
        style={{
          width: `100%`,
          height: `${size}%`,
          borderRadius: borderRadius,
        }}
      >
        <input
          className='click-file-input'
          type="file"
          ref={fileInputRef}
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              console.log("🚀 ~ onChange={ ~  e.target.files[0]:",  file)
              await onFileChange(file);
            }
          }}
        />
        <div className="drop-file-input__label">
          <img src={imagePath} alt="add-file" width={50} />
        </div>
      </div>
    </DropFileInputCss>
  );
}


export default DropFileInput