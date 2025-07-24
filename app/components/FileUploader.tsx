import React,{useCallback , useState} from 'react'
import { useDropzone } from 'react-dropzone'
import { formatSize } from '~/lib/utils';

const maxFileSize = 10 * 1024 * 1024; // 10MB limit

interface FileUploaderProps {
    onFileSelect?:(file:File | null)=>void;
}
const FileUploader = ({onFileSelect}:FileUploaderProps) => {
    const [file, setFile] = useState<File | null>(null)
    
    const onDrop = useCallback((acceptedFiles:File[]) => {
        const selectedFile = acceptedFiles[0] || null
        setFile(selectedFile)
        onFileSelect?.(selectedFile)
    }, [onFileSelect])
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop,multiple:false,
        accept:{'application/pdf':['.pdf']},
        maxSize:maxFileSize ,
    })
    return (
        <div className='min-w-full gradient-border'>
          <div {...getRootProps()}>
          <input {...getInputProps()} />
                <div className="space-y-4 cursor-pointer w-full">
                    <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                        <img src="/icons/info.svg" className='size-20' alt="" />
                    </div>
                    {acceptedFiles[0] ? (
                        <div className='flex items-center space-x-3'>
                            <p className='text-lg text-gray-500 font-medium truncate'>
                                {acceptedFiles[0].name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {formatSize(acceptedFiles[0].size)}
                            </p>
                        </div>
                    ):(
                        <div>
                            <p className='text-lg text-gray-500 '>
                                <span className="font-semibold">
                                    Click To upload
                                </span> or Drag and drop
                            </p>
                            <p className='text-lg text-gray-500'>PDF (max {formatSize(maxFileSize)})</p> 
                        </div>
                    )}
                </div>
        </div>
        </div>
      )
    }
    
    export default FileUploader
