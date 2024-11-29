import React from 'react';

const Career = () => {
    const jobOpenings = [
        {
            title: "Creative Director",
            department: "Creative Department",
            location: "On-site",
            type: "Full-time",
            id: 1
        },
        {
            title: "Senior Graphic Designer", 
            department: "Design Department",
            location: "Hybrid",
            type: "Full-time",
            id: 2
        },
        {
            title: "Content Writer",
            department: "Content Department", 
            location: "Remote",
            type: "Full-time",
            id: 3
        }
    ];

    return (
        <>
            <div className='container mx-auto px-4 pt-32 pb-16 relative z-10 '>
                <h1 className='text-5xl font-bold text-center mb-10 text-white tracking-tight'>
                    Welcome To <span className='text-yellow-400'>251 COMMUNICATIONS</span>
                </h1>
                <h2 className='text-3xl text-yellow-400 font-bold mb-12 text-center'>JOB OPENINGS</h2>
                
                <div className='max-w-3xl mx-auto space-y-6'>
                    {jobOpenings.map((job) => (
                        <div key={job.id} className='bg-gray-900 rounded-xl shadow-2xl p-8 hover:shadow-yellow-400/20 transition-all duration-300 border-l-4 border-yellow-400'>
                            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                                <div>
                                    <h3 className='text-2xl font-bold text-white mb-4'>{job.title}</h3>
                                    <div className='flex flex-wrap gap-6 text-gray-300'>
                                        <span className='flex items-center hover:text-yellow-400 transition-colors'>
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                                            </svg>
                                            {job.department}
                                        </span>
                                        <span className='flex items-center hover:text-yellow-400 transition-colors'>
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span className='flex items-center hover:text-yellow-400 transition-colors'>
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                                            </svg>
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                                <button className='bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30'>
                                    APPLY NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Career;
