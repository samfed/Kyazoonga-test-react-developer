import React from 'react';

export default function ContentSecondaryItemView ({ticketData}) {
    const {title, imgSrc} = ticketData;
    console.log("fffff", title)
    return (
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>{title}</h3>
            </div>
            <img src={imgSrc} alt="" className="img-full-width" />
          </a>
        </div>
    );
}