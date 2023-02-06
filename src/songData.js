import { v4 as uuidv4 } from "uuid";
// UUID generates unique IDs
//======================================

function songData() {
	return [
		{
			name: "Meaningless",
			cover:
				"https://i.imgur.com/MAp2SCS.png",
			artist: "Justin/Clay",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/MeaninglessMP3.mp3",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Purposeless Bluesmen",
			cover:
				"https://i.imgur.com/ajQxZYP.png",
			artist: "Justin/Clay",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/Purposeless+bluesmenMP%23.mp3",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Oh",
			cover:
				"https://i.imgur.com/1V1C47v.png",
			artist: "Justin",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/Oh.mp3",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Droopy",
			cover:
				"https://i.imgur.com/PABKHBW.png",
			artist: "Justin",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/droopMP3.mp3",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Bounce",
			cover:
				"https://i.imgur.com/zwxRJ3I.png",
			artist: "Justin",
			audio: "https://catcollector100.s3.us-west-1.amazonaws.com/bounceMP3.mp3",
			id: uuidv4(),
			active: true,
		},
		
		//ADD MORE HERE
	];
}

export default songData;