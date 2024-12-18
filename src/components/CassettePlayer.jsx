import { React, useEffect, useRef } from "react";
import Button from "./Button";
import playPauseButtonImg from "../img/cassette-player/buttons/play-button.png";
import playPauseButtonPressedImg from "../img/cassette-player/buttons/play-button-pressed.png";
import rewindPauseButtonImg from "../img/cassette-player/buttons/rewind-button.png";
import rewindPauseButtonPressedImg from "../img/cassette-player/buttons/rewind-button-pressed.png";
import fastForwardButtonImg from "../img/cassette-player/buttons/fast-forward.png";
import fastForwardButtonPressedImg from "../img/cassette-player/buttons/fast-forward-pressed.png";
import ejectButtonImg from "../img/cassette-player/buttons/eject-button.png";
import ejectButtonPressedImg from "../img/cassette-player/buttons/eject-button-pressed.png";
import "../style-sheets/CassettePlayer.css";

function useResponsiveFontSize(ref) {
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        ref.current.style.fontSize = `${height}px`;
        ref.current.style.lineHeight = `${height}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);
}

function CassettePlayer() {
	const songTitleRef = useRef(null);
	const songActualTime = useRef(null);
  useResponsiveFontSize(songTitleRef);
	useResponsiveFontSize(songActualTime);
	
	return (
		<div className="cassette-player-container">
			<div className="cassette-player-initial-structure">
				<div className="cassette-player-song-info">
					<div className="song-info-title-container">
						<h2 ref={songTitleRef} className="song-info-title">song title</h2>
					</div>
					<div className="song-info-timeline-container">
						<div className="song-info-timeline">
							<div className="timeline-time-indicator"></div>
						</div>
						<span ref={songActualTime} className="song-info-timeline-actual-time">0:00</span>
					</div>
				</div>
				<div className="cassette-player-cassette-cover">
					<div className="cassette-player-cassette"></div>
				</div>
				<div className="cassette-player-controls">
					<Button
						handleClick={() => console.log("Play Button Clicked")}
						imgClassName={"controls-button-img play"}
						imgSrc={playPauseButtonImg}
						altImgSrc={playPauseButtonPressedImg}
						imgAlt={"Play Button"}
					/>
					<Button
						handleClick={() => console.log("Rewind Button Clicked")}
						imgClassName={"controls-button-img rewind"}
						imgSrc={rewindPauseButtonImg}
						altImgSrc={rewindPauseButtonPressedImg}
						imgAlt={"Rewind Button"}
					/>
					<Button
						handleClick={() => console.log("Fast Forward Button Clicked")}
						imgClassName={"controls-button-img fast-forward"}
						imgSrc={fastForwardButtonImg}
						altImgSrc={fastForwardButtonPressedImg}
						imgAlt={"Fast Forward Button"}
					/>
					<Button
						handleClick={() => console.log("Eject Button Clicked")}
						imgClassName={"controls-button-img eject"}
						imgSrc={ejectButtonImg}
						altImgSrc={ejectButtonPressedImg}
						imgAlt={"Eject Button"}
					/>
				</div>
			</div>
		</div>
	);
}

export default CassettePlayer;