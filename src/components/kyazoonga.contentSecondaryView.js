import React from 'react';
import ContentSecondaryItemView from './kyazoonga.contentPrimaryItemView';

export default function ({Data}) {
    return (
        <section className="home-cat-sec text-center">
    <div className="container">
      <h2 className="site-title">Browse by top categories</h2>
      <div className="row">
        {Data.map((elem) => {
          return <ContentSecondaryItemView ticketData={elem} />
        })}
      </div>
    </div>
  </section>
    );
}