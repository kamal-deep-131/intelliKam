import { useContext } from 'react'
import { GeminiContext } from '../Context/GeminiContext'
import Markdown from 'react-markdown'
import { FaUserEdit } from "react-icons/fa";

const Hero = () => {
    const { response, recentPrompt } = useContext(GeminiContext)
    return (
        <section className='p-12'>
            {!response ?
                <>
                    <h1 className='text-5xl font-medium'>Hi, I am <span className='text-green-500 font-bold' >IntelliKam,</span><br />
                        <span className='light:text-zinc-950 dark:text-slate-300  text-3xl'>How Can I help You Today?</span></h1>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 pt-9'>
                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950 '>
                            <span className="font-semibold text-green-500">Answer Questions</span> <p className="text-md pt-5">I can provide information on a wide range of topics including science, history, technology, literature, and more.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950 '>
                            <span className="font-semibold text-green-500">Generate Text</span> <p className="text-md pt-5">I can create stories, poems, essays, and other forms of written content based on provided prompts.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950 '>
                            <span className="font-semibold text-green-500">Language Translation</span> <p className="text-md pt-5"> I can translate text between different languages..</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950 '>
                            <span className="font-semibold text-green-500">Code Generation</span> <p className="text-md pt-5"> I can help with coding tasks, provide code snippets, and assist in debugging.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950  '>
                            <span className="font-semibold text-green-500">Creative Writing</span> <p className="text-md pt-5">I can assist in creative writing tasks such as brainstorming ideas, developing characters, and crafting plots.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950  '>
                            <span className="font-semibold text-green-500">Educational Assistance</span> <p className="text-md pt-5">I can help with learning new subjects, explain concepts, and provide study guides.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950  '>
                            <span className="font-semibold text-green-500">Conversation</span> <p className="text-md pt-5">I can engage in casual conversation, provide companionship, and assist with social interactions.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950  '>
                            <span className="font-semibold text-green-500">Problem-Solving</span> <p className="text-md pt-5"> I can help solve puzzles, riddles, and logical problems.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950  '>
                            <span className="font-semibold text-green-500">Text Analysis</span> <p className="text-md pt-5">I can analyze text for sentiment, tone, and other linguistic features.</p>
                        </div>

                        <div className='w-full p-4 rounded-lg bg-slate-100 dark:bg-zinc-950  '>
                            <span className="font-semibold text-green-500">Generate summaries</span> <p className="text-md pt-5"> I can summarize long texts, articles, or documents.</p>
                        </div>


                    </div>
                </>
                :
                <div className='flex items-start gap-4 justify-start flex-col'>
                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <FaUserEdit size={16} />
                        </div>
                        <p className='text-lg font-extrabold dark:text-white text-zinc-950'>{recentPrompt}</p>
                    </div>
                    <div className='flex items-start justify-start gap-2'>
                        <div className='text-base font-normal dark:text-white text-zinc-950'>
                            <Markdown>{response}</Markdown>
                        </div>
                    </div>
                </div>}
        </section>
    )
}

export default Hero