import React, { useState, type FormEvent } from 'react'
import FileUploader from '~/components/FileUploader'
import Navbar from '~/components/Navbar'

const upload = () => {
    const [isProcessing,setIsProcessing] = useState(false)
    const [statusText,setStatusText] = useState('')
    const [file,setFile] = useState<File | null>(null)

    const handleFileSelect = (file:File | null)=>{
        setFile(file)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{

    }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section" >
        <div className="page-heading py-16">
            <h1>Crucial Feedback to land your Dream Job!</h1>
            {isProcessing ? (
                <>
                <h2>{statusText}</h2>
                <img src="/images/resume-scan.gif" alt="" className='w-full' />
                </>
            ):(
                <>
                <h2>Drop your resume for an ATS score and improvement tips</h2>
                </>
            )}
            {!isProcessing && (
                <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8 w-full mx-auto'>
                    <div className="form-div">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" name='company-name' placeholder='Company name' />
                    </div>
                    <div className="form-div">
                        <label htmlFor="job-title">Job Title</label>
                        <input type="text" name='job-title' placeholder='Job Title' />
                    </div>
                    <div className="form-div">
                        <label htmlFor="job-description">Job Description</label>
                        <textarea className='h-14 focus:h-26 transition-all' name='job-description' placeholder='Job Description' />
                    </div>
                    <div className="form-div">
                        <label htmlFor="uploader">Upload resume</label>
                        <div>
                            <FileUploader onFileSelect={handleFileSelect} />
                        </div>
                    </div>
                    <button className='primary-button' type='submit'>
                        Analyze
                    </button>
                </form>
            )}
        </div>
      </section>
    </main>
  )
}

export default upload
