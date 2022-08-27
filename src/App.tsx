import Attribution from './components/Attribution'
import Comment from './components/Comment'

const App = () => {
    return (
        <div className='max-w-screen-md min-h-screen flex flex-col justify-center items-center mx-auto'>
            <h1 className='mb-6 text-moderate-blue text-3xl'>Interactive comments</h1>
            <Comment />
            <Attribution />
        </div>
    )
}

export default App
