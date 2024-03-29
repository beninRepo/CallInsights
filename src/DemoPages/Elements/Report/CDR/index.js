import React, { Fragment } from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples
import CdrReports from './All/cdrReport';

const tabsContent = [
    {
        title: 'CDR Report',
        content: <CdrReports/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class CdrReport extends React.Component {

    render() {

        return (
            
            <Fragment>
              
                <PageTitle
                    heading="CDR Report"
                    icon="pe-7s-news-paper icon-gradient bg-tempting-azure"
                />
                <Tabs transform={false} showInkBar={true} items={getTabs()} />
            </Fragment>
        );
    }
}