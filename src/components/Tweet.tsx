import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/jakeliny.png" alt="Jakeliny Gracielly" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Jakeliny Gracielly</strong>
          <span>@Jakelinygr</span>
        </div>
        <p>Meu primeiro Tweet.</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
