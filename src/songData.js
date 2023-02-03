import { v4 as uuidv4 } from "uuid";
// UUID generates unique IDs
//======================================

function songData() {
	return [
		{
			name: "Meaningless",
			cover:
				"https://i.imgur.com/Zusn5sx.png",
			artist: "Justin/Clay",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/MeaninglessMP3.mp3",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Oh",
			cover:
				"https://i.imgur.com/29ghqez.png",
			artist: "Justin",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/Oh.mp3",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Bounce",
			cover:
				"https://i.imgur.com/ShhRVso.png",
			artist: "Justin",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/bounceMP3.mp3",
			id: uuidv4(),
			active: true,
		},
		
		//ADD MORE HERE
	];
}

export default songData;