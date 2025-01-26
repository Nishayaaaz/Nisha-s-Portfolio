import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: 'https://acrobat.adobe.com/link/file?x_api_client_id=adobe_com&x_api_client_location=add_comment&uri=urn%3Aaaid%3Asc%3AAP%3A13ee1cf9-9f32-4a14-bdf7-b65e9a04df23&viewer%21megaVerb=group-discover'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}