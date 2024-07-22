import Doggs from "./Doggs"

function ImageGallery() {
    let imgLink = `https://dog.ceo/api/breed/${Doggs.dogs}/images/random`
    return (
    <div>
        <img href={imgLink} alt="This should be a dog!"></img>
    </div>
  )
}

ImageGallery()

export default ImageGallery
