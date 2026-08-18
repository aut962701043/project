import Insta from './Insta';
import image1 from'./assets/plus.jpg'
import image2 from'./assets/arrow.jpg'
import image3 from'./assets/lock.jpg'
import image4 from'./assets/threads.jpg'
import image5 from'./assets/bar.jpg'
import image6 from'./assets/image.jpg'
import image7 from'./assets/squre.jpg'
import image8 from'./assets/repeat.jpg'
import image9 from'./assets/man.jpg'
import image10 from'./assets/baby.jpg'
import image11 from'./assets/baby.jpg'
import image12 from'./assets/baby.jpg'
import image13 from'./assets/baby.jpg'
import image14 from'./assets/photo1.jpg'
import image15 from'./assets/photo2.jpg'
import image16 from'./assets/photo3.jpg'
import image17 from'./assets/photo4.jpg'
function InstaList(){
   
        const insta=[
            {
                id:1,
                plusIcon:image1,
                lockIcon:image3,
                name:"_black_lover_6866",
                arrowIcon:image2,
                threadsIcon:image4,
                barIcon:image5,
                imageIcone:image6,
                postname:"posts",
                number1:12,  
                followersname:"followers",
                number2:300,
                followingname:"following",
                number3:1,
                squreIcon:image7,
                repeatIcon:image8,
                manIcon:image9,
                babyIcon:image10,
                babyIcon:image11,
                babyIcon:image12,
                babyIcon:image13,
                photo1Icon:image14,
                photo2Icon:image15,
                photo3Icon:image16,
                photo4Icon:image17
              }
               
             ]
        const instalist=insta.map((insta)=>(<Insta key={insta.id} 
            plus={insta.plusIcon}
            lock={insta.lockIcon}
            arrow={insta.arrowIcon}
            threads={insta.threadsIcon}
            bar={insta.barIcon} 
            name={insta.name}
            image={insta.imageIcone}
            postname={insta.postname}
            number1={insta.number1}
            followersname={insta.followersname}
            number2={insta.number2}
            followingname={insta.followingname}
            number3={insta.number3}
            squre={insta.squreIcon}
            repeat={insta.repeatIcon}
            man={insta.manIcon}
            baby={insta.babyIcon}
            baby={insta.babyIcon}
            baby={insta.babyIcon}
            baby={insta.babyIcon}
            photo1={insta.photo1Icon}
            photo2={insta.photo2Icon}
            photo3={insta.photo3Icon}
            photo4={insta.photo4Icon}
            />))
         return(
            <>
            {instalist}
            </>
    );
}
export default InstaList