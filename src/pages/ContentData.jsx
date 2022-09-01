import './ContentData.css'

const ContentData = ({data})=>{

// console.log(data.title.split(':')[1])
// console.log(data.postId)

return(
    <div className='contentData'>
        <div className='items'>
            
            <img className='contentImage' src={data.coverImageUrl}/>
            <p className='contentText'>{data.title.split(':')[1]}</p>
            
        </div>
        <br/>
    </div>
)
}
export default ContentData