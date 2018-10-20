import React from 'react';

export default function ContentPrimaryItemView ({ticketData}) {
    const {ticket: {time, venue, title, price, imageSrc}} = ticketData;
    return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="box">
            <a href="#" className="block-link">
              <div className="ticket-img">
                <img src={imageSrc} alt="" />
                <span className="ticket-price">{price}</span>
              </div>
              <div className="ticket-info">
                <span className="time-info">{time}</span>
                <h3 className="ticket-title">{title}</h3>
                <p className="venue-info">{venue}</p>
              </div>
            </a>
            <div className="social clearfix">
              <div className="pull-left">
                <a className="btn btn-default btn-xs ical" href="#">
              <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                <a className="btn btn-default btn-xs ml-10" href="#">
              <i className="fa fa-calendar"></i> &nbsp;Google</a>
              </div>
              <div className="pull-right">
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-facebook"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-twitter"></i></a>
                <a className="btn btn-default btn-xs btn-circle" href="#">
              <i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
    );
}