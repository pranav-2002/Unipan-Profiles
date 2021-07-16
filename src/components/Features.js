import React from "react";
import "./Features.css";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
import EcoIcon from "@material-ui/icons/Eco";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import PaletteIcon from "@material-ui/icons/Palette";
import Looks5Icon from "@material-ui/icons/Looks5";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import BrushIcon from "@material-ui/icons/Brush";
import PublicIcon from "@material-ui/icons/Public";

function Features() {
  return (
    <div className="features">
      <div className="features__content">
        <div className="features__icon">
          <FormatColorResetIcon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>Water Proof</h1>
          <p>
            UNIPAN doors are Waterproof <br /> & Weatherproof{" "}
          </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <EcoIcon className="water-icon" />
        </div>
        <div className="features__text bottom-line">
          <h1>Termite Proof</h1>
          <p>
            UNIPAN doors are resistant <br /> to Termites
          </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <TouchAppIcon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>Scratch Resistant</h1>
          <p>
            UNIPAN doors offer resistance <br /> to scratches{" "}
          </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <PaletteIcon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>Colors</h1>
          <p>
            UNIPAN doors are available <br /> in wide range of colors{" "}
          </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <Looks5Icon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>Years Warranty</h1>
          <p>UNIPAN offers 5 years warranty </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <MeetingRoomIcon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>Easy to Install</h1>
          <p>
            UNIPAN doors are easy <br /> to install{" "}
          </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <BrushIcon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>
            No Repainting <br /> Required
          </h1>
          <p>
            UNIPAN doors are pre-painted <br /> at our factory and do not <br />{" "}
            require re-painting for lifetime
          </p>
        </div>
      </div>
      <div className="features__content">
        <div className="features__icon">
          <PublicIcon className="water-icon" />
        </div>
        <div className="features__text">
          <h1>Economical</h1>
          <p>
            Our moto is: <br /> "Save the Trees - Save the Planet"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
