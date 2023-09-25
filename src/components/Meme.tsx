import React from "react";

function Meme() {
    const [meme, setMeme] = React.useState<{
        topText: string;
        bottomText: string;
        randomImage: string;
    }>({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState<
        {
            box_count: number;
            captions: number;
            height: number;
            id: string;
            name: string;
            url: string;
            width: number;
        }[]
    >([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemeImages(data.data.memes));
    }, []);

    function setText(event: { target: { name: string; value: string } }) {
        const { name, value } = event.target;
        setMeme((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url: string = allMemeImages[randomNumber].url;
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage: url,
            };
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={setText}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={setText}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image
                </button>
            </div>

            <div className="meme">
                <img
                    src={meme.randomImage}
                    alt="meme"
                    className="meme--image"
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Meme;
