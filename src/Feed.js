
import Post from "./Post"
// import emptyImage from './images/empty.png'
import { ReactComponent as EmptyImageSvg } from './images/empty.svg'

function Feed({posts, deletePost, isLoading, likePost}) {

    // afficher les post par ordre de publication grace à la date
    posts.sort((post1, post2) => post2.date.getTime() -  post1.date.getTime())

    
    return isLoading ?
    (

        <div>Chargement...</div> 

    ) : (

        posts.length > 0 ? 
        (
            posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} likePost={likePost} />)
            
        ) : (
            <>
            <h3 align="center">
            {/* <img src={emptyImage} width='300' /> */}
            <EmptyImageSvg width="300" height="300" />
            <div>Aucun post pour le moment</div>
            </h3>
            </>
        )

    )
    
    
    
   
}

export default Feed