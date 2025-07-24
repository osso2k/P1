import React,{useCallback , useState} from 'react'
import { useDropzone } from 'react-dropzone'


interface FileUploaderProps {
    onFileSelect?:(file:File | null)=>void;
}
const FileUploader = ({onFileSelect}:FileUploaderProps) => {
    const [file,setFile] = useState()
    const onDrop = useCallback((acceptedFiles:File[]) => {
    // Do something with the files
        const file = acceptedFiles[0] || null
        onFileSelect?.(file)
  }, [onFileSelect])
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop,multiple:false,
    accept:{'applicaation/pdf':['.pdf']},
    maxSize:20 *1024 *1024 ,
  })
  return (
    <div className='w-full gradient-border'>
      <div {...getRootProps()}>
      <input {...getInputProps()} />
            <div className="space-y-4 cursor-pointer w-full">
                <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                    <img src="/icons/info.svg" className='size-20' alt="" />
                </div>
                {file ? (
                    <div>

                    </div>
                ):(
                    <div>
                        <p className='text-lg text-gray-500 '>
                            <span className="font-semibold">
                                Click To upload
                            </span> or Drag and drop
                        </p>
                        <p className='text-lg text-gray-500'>PDF (max 20 MB)</p> 
                    </div>
                )}
            </div>
    </div>
    </div>
  )
}

export default FileUploader
