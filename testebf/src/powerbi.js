import React, { Component } from 'react';
import PowerbiEmbeed from 'react-powerbi';

class powerbi extends Component{
    render(){
        return(
            <div>
                <PowerbiEmbeed
                    id={}
                    embeedUrl={}
                    accessToken={}
                    filterPaneEnabled={false}
                    navContentPaneEnabled={false}
                    embedType="Embeed"
                    permissions="All"
                />
            </div>
        )
    }
}

export default powerbi;