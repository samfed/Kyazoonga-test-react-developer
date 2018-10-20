import React from 'react';
import HeaderView from './kyazoonga.headerView';
import PrimaryContentView from './kyazoonga.contentPrimaryView';
import SecondaryContentView from './kyazoonga.contentSecondaryView';
import TertiaryContentView from './kyazoonga.contentTertiaryView';
import QuaternaryContentView from './kyazoonga.contentQuaternaryView';
import FooterView from './kyazoonga.footerView';

export default function KyazoongaMainView ({MockData}) {
    const {primaryContentData, secondaryContentData} = MockData;
    return (
    <div>
        {/* <HeaderView /> */}
        <PrimaryContentView Data={primaryContentData}/>
        <SecondaryContentView Data={secondaryContentData} />
        <TertiaryContentView />
        <QuaternaryContentView />
        <FooterView />
    </div>);
}